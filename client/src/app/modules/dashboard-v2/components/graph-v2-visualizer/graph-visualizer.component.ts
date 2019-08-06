import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';
import { Network, DataSet, Node, Edge, IdType } from 'vis';
import * as _ from 'lodash';
import { SharedGraphService } from 'src/app/modules/core/services/shared-graph.service';

@Component({
  selector: 'app-graph-visualizer',
  templateUrl: './graph-visualizer.component.html',
  styleUrls: ['./graph-visualizer.component.scss']
})
export class GraphVisualizerComponent implements OnInit {

  @Input() event: String;
  @Input() totalTypesArray = [];
  public graphData = {};
  public errorMessage = '';
  public loader = true;
  public defaultNodeLimit: number = 149;
  selectedCount;
  public nodeLimit: any = 149;
  public emptyNodeLimit: number = 179;
  public colorConfig = {
    defaultColor: {
      "Academia": '#ff4444',
      "Consulting": '#ffbb33',
      "Government": '#00C851',
      "Impact Investor": '#33b5e5',
      "International Agency": '#CC0000',
      "Media": '#FF8800',
      "NGO/CBO": '#007E33',
      "People": '#0099CC',
      "Philanthropy": '#9933CC',
      "Platform": '#0d47a1',
      "Private Sector": '#2BBBAD',
      "Research Institute": '#c51162'

    },
    selectedColor: {
      "Academia": '#ff4444',
      "Consulting": '#ffbb33',
      "Government": '#00C851',
      "Impact Investor": '#33b5e5',
      "International Agency": '#CC0000',
      "Media": '#FF8800',
      "NGO/CBO": '#007E33',
      "People": '#0099CC',
      "Philanthropy": '#9933CC',
      "Platform": '#0d47a1',
      "Private Sector": '#2BBBAD',
      "Research Institute": '#c51162'

    }
  };

  public editNodeData = null;
  public network: any;
  @Output() networkInstance = new EventEmitter<any>();
  private graphOptions = {
    physics: false,
    edges: {
      smooth: {
        type: 'dynamic'
      }
    },
    nodes: {
      shape: 'dot',
      scaling: {
        customScalingFunction: (min, max, total, value) => {
          return value / total;
        },
        min: 5,
        max: 150
      }
    }
  };

  constructor(private graphService: GraphDataService, private sharedGraphService: SharedGraphService) { }

  ngOnInit() {
    this.loader = true;
    this.displayInitialGraph();
  }

  displayInitialGraph() {
    this.graphService.getInitialDataV2().subscribe(result => {
      console.log('recieved data from graph service', result);
      // set data for vis
      if (result.hasOwnProperty('seperateNodes')) {
        // add colors to nodes
        result['seperateNodes'] = this.addColors(result['seperateNodes']);
        this.graphData['nodes'] = new DataSet(result['seperateNodes']);
        this.selectedCount = this.graphData['nodes'].length;
      }
      if (result.hasOwnProperty('seperateEdges')) {
        this.graphData['edges'] = new DataSet(result['seperateEdges']);
      }
      console.log('graphData :', this.graphData);
      // display data
      const container = document.getElementById('graphViewer');
      this.loader = false;
      this.network = new Network(container, this.graphData, this.graphOptions);
    }, err => {
      console.error('An error occured while retrieving initial graph data', err);
      this.loader = true;
      this.graphData = {};
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.changeNodeColor();
  }
  changeNodeColor() {
    if (this.event == 'search1' || this.event === 'search2') {
      this.loader = true;
      this.showGraphData();
    } else if (this.event === 'reset') {
      this.loader = true;
      this.nodeLimit = this.defaultNodeLimit;
      this.displayInitialGraph();
    } else {
      const previousData = _.cloneDeep(this.graphData);
      // tslint:disable-next-line: no-string-literal
      if (!!this.graphData['nodes']) {
        var temgraph = this.graphData['nodes'].map(node => {
          if (this.event == node.type[0]) {
            // node.color = this.colorConfig.defaultColor[node.type[0]];
          } else {
            // node.color='#95BFF8';
            return node;
          }
          return node;
        })
        previousData.nodes.clear();
        previousData.nodes = new DataSet(_.cloneDeep(temgraph));
        this.graphData = previousData;
        this.reinitializeGraph();
      }
    }
  }

  reinitializeGraph() {
    const container = document.getElementById('graphViewer');
    this.network.setData(this.graphData);
  }
  showGraphData() {
    this.loader = true;
    let requestBody = this.sharedGraphService.getGraphData();
    // check for node limit
    if (this.nodeLimit === "") {
      requestBody["limit"] = this.emptyNodeLimit;
    } else if (!isNaN(this.nodeLimit)) {
      requestBody["limit"] = this.nodeLimit;
    } else {
      requestBody["limit"] = this.defaultNodeLimit;
    }

    this.graphService.getSearchDataV2(requestBody).subscribe(result => {
      // console.log('recieved data from graph service', result);
      // set data for vis
      if (result.hasOwnProperty('seperateNodes')) {
        result['seperateNodes'] = this.addColors(result['seperateNodes']);
        this.graphData['nodes'] = new DataSet(result['seperateNodes']);
        this.selectedCount = this.graphData['nodes'].length;
      }
      if (result.hasOwnProperty('seperateEdges')) {
        this.graphData['edges'] = new DataSet(result['seperateEdges']);
      }
      // console.log('graphData :', this.graphData);
      // display data
      const container = document.getElementById('graphViewer');
      this.network = new Network(container, this.graphData, this.graphOptions);
      this.loader = false;
    }, err => {
      console.error('An error occured while retrieving initial graph data', err);
      this.loader = true;
      this.graphData = {};
    });
  }

  addColors(nodeObj) {
    // console.log(nodeObj);
    nodeObj.forEach(node => {
      if (node.hasOwnProperty('type') && node.type.length > 0) {
        node['color'] = this.colorConfig.defaultColor[node.type[0]];
      }
    });
    // console.log(nodeObj);
    return nodeObj;

  }

  private limitChange(limit, popup) {
    if (limit === "") {
      this.errorMessage = 'Only valid numbers allowed'
      popup.open();
      window.setTimeout(() => {
        popup.close();
      }, 3000)
    } else if (!isNaN(limit)) {
      this.nodeLimit = parseInt(limit);
    } else {
      this.errorMessage = 'Only valid numbers allowed'
      popup.open();
      window.setTimeout(() => {
        popup.close();
      }, 3000)
    }

  }

  nodeEventCapture(event) {
    if (Object.keys(event).length > 0) {

      if (event.action === 'create') {
        // handle the functionaluty of creating a node
        this.network.once('click', (clickEvent) => {
          console.log(clickEvent);
          // user should be able to fire an event onlyonce per dropdown click
          if (clickEvent.nodes.length > 0 || clickEvent.edges.length > 0) {
            // obviously a node cannot be created over another node or edge
            alert('please click on an empty space to create a node');
          } else {
            // user clicked on a good place to  create a node
            // console.log(this.graphData);
            let newNodeData = {
              id: event.data.id,
              label: event.data.properties.Name,
              type: [event.data.type],
              properties: event.data.properties
            };

            // let newNodeForVis = _.cloneDeep(newNodeData);
            // make a request to create a node, if it succeedes only then show in the graph
            this.graphService.createNewNode(newNodeData).subscribe(response => {
              console.log(response);
              // add additional data for vis layout
              // newNodeForVis = this.addData(newNodeForVis, clickEvent, event);
              try {
                let visNode = this.addData(response['seperateNodes'][0], clickEvent, event);
                // add the new node to the vis
                this.graphData['nodes'].add([visNode]);
              } catch (addErr) {
                console.error('Error while adding the data node to vis ', addErr['message']);
              }
            }, error => {
              console.error('An error occured while creating node in  database ', error);
            });
          }
        });
      } else if (event.action === 'edit' && !event.hasOwnProperty('process')) {
        // handle the functionality of editing the node
        console.log('Node edit is being clicked');
        this.network.once('click', (clickEvent) => {
          console.log(clickEvent);
          let clickedNode = this.graphData['nodes'].get(clickEvent.nodes);
          // if there are multiple nodes one above another, always select the top most one
          if (clickedNode.length > 0) {
            clickedNode = _.cloneDeep(clickedNode[0]);
          }
          console.log('clicked Node is ', clickedNode);
          this.startEditProcess(clickedNode);
        });
      } else if (event.action === 'edit' && event.hasOwnProperty('process') && event.process === 'complete') {
        // this will be invoked when the user has clicked on edit feature and submitted the form with new data
        console.log('edit event captured with new data', event.data);
        // the process is to first create a node for data base update
        // once the node is updated , use the updated node from the database to update in the visJS
        let newNodeData = {
          id: event.data.id,
          label: event.data.properties.Name,
          type: [event.data.type],
          properties: event.data.properties
        };

        this.graphService.updateNode(newNodeData).subscribe(response => {
          console.log('response from update node ', response);
          try {
            let updatedNode = response['seperateNodes'][0];
            // logic to update node in vis data set
            let visNode = this.graphData['nodes'].get(updatedNode['id']);
            // update everything except color and id
            if ([visNode].length == 1) {
              visNode['properties'] = updatedNode['properties'];
              visNode['label'] = updatedNode['label'];
              visNode['title'] = updatedNode['title'];
              visNode['type'] = updatedNode['type'];
              console.log('update node details are ', visNode);
              // node was present, simply update it now
              this.graphData['nodes'].update(visNode);
            }
            console.log(visNode);

          } catch (updateErr) {
            // any error encountered while updating the node in vis js
            console.error('Error while upating the data node to vis ', updateErr['message']);
          }
        }, err => {
          console.error('An error occured while updating node in database ', err);
        });
      } else if (event.action === 'delete') {
        console.log('Node delete has been clicked');
        // handle the functionality of deleting the node
      } else {
        // invalid click event
        console.error('An invalid click event retrieved ', event);
      }
    }
  }

  edgeEventCapture(event) {
    if (Object.keys(event).length > 0) {
      if (event.action === 'create') {
        // handle the functionaluty of creating a node
        let newRelationData = {
          type: [event.data.type],
          properties: event.data.properties,
          from: event.data.from[0],
          to: event.data.to[0]
        };
        // make a request to create a node, if it succeedes only then show in the graph
        this.graphService.createNewRelation(newRelationData).subscribe(response => {
          console.log(response);

          try {
            let visRelation = response['seperateEdges'][0]
            // add the new node to the vis
            this.graphData['edges'].add([visRelation]);
          } catch (addErr) {
            console.log('Error while adding the data relation to vis ', addErr['message']);
          }
        }, error => {
          console.log('error while reading new relation data from service ', error);
        });
      } else if (event.action === 'edit') {
        // handle the functionality of editing the node
      } else if (event.action === 'delete') {
        // handle the functionality of deleting the node
      } else {
        // invalid click event
        console.error('An invalid click event retrieved ', event);
      }
    }
  }

  serializeProperties(propertyObject) {
    if (propertyObject.constructor === Object) {
        let finalString = '';
        _.forOwn(Object.keys(propertyObject), (key) => {
            if (propertyObject[key].hasOwnProperty('low')) {
                // if the key has an integer value then set the low value of it
                propertyObject[key] = propertyObject[key]['low']
            }
            finalString += `<strong>${key} :</strong> ${propertyObject[key]} <br>`
        });
        return finalString;
    } else return null
}

  addData(node, clickEvent, event) {
    node['x'] = clickEvent.pointer.canvas.x;
    node['y'] = clickEvent.pointer.canvas.y;
    // node['title'] = this.serializeProperties(event.data.properties);
    node['color'] = this.colorConfig.defaultColor[event.data.type];
    console.log('final node is ', node);
    return node;
  }

  addNodeColor(node) {
    let colorCode = this.colorConfig.defaultColor[node.type[0]] || null;
    if (colorCode) {
      node['color'] = colorCode;
      return node;
    }
    else {
      console.warn('Error while adding color to the node ', node['label']);
      return node;
    }
  }

  startEditProcess(clickedNode) {
    // to extract relevant information and send it back to the edit modal
    console.log(clickedNode);
    this.editNodeData = clickedNode;
  }
}
