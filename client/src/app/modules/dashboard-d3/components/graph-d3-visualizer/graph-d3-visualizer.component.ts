import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';
import * as _ from 'lodash';
import { SharedGraphService } from 'src/app/modules/core/services/shared-graph.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-graph-d3-visualizer',
  templateUrl: './graph-d3-visualizer.component.html',
  styleUrls: ['./graph-d3-visualizer.component.scss']
})
export class GraphD3VisualizerComponent implements OnInit {

  @Input() event: String;
  @Input() totalTypesArray = [];
  public selectedNodes = [];
  public linkCreateDrag: boolean = false;
  public graphData = {};
  public data = {};
  constructor(private graphService: GraphDataService, private sharedGraphService: SharedGraphService) { }
  public circleRadius: number = 25;
  public linkColor: string = "#696969";
  public relationColor: string = "#696969";

  public width = window.innerWidth;
  public height = window.innerHeight - 10;
  public lineLength = 130;

  public newRelationData;

  public defaultNodeLimit: number = 149;
  public nodeLimit: any;
  public emptyNodeLimit: number = 179;

  selectedCount;
  public edgeDragEndEvent = {};
  public errorMessage = '';

  public transitionDuration = 2000;
  public colorConfig = {
    defaultColor: {
      "Academia": '#C990C0',
      "Consulting": '#A5ABB6',
      "Government": '#8DCC93',
      "Impact Investor": '#4C8EDA',
      "International Agency": '#FFC454',
      "Media": '#D9C8AE',
      "NGO/CBO": '#F79767',
      "People": '#569480',
      "Philanthropy": '#DA7194',
      "Platform": '#57C7E3',
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

  public edgepaths;
  public edgelabels;
  public node;
  public nodelabels;
  public link;
  public simulation;
  public arrow;

  ngOnInit() {
    this.displayInitialGraph();
  }

  // fetch initial data
  displayInitialGraph() {
    this.graphService.getInitialDataV2().subscribe(result => {
      // console.log('recieved data from graph service', result);

      if (result.hasOwnProperty('seperateNodes')) {
        var nodes = [];
        result['seperateNodes'] = this.addColors(result['seperateNodes']);
        result['seperateNodes'].filter(node => {
          nodes.push({ id: node.id, label: node.label, type: node.type[0], connection: node.properties.Connection, status: node.properties.Status, represent: node.properties.Represent, 'Understanding of SP Thinking': node.properties['Understanding of SP Thinking'], color: node.color });
        })
      }
      this.graphData['nodes'] = nodes;
      if (result.hasOwnProperty('seperateEdges')) {
        var edges = [];
        result['seperateEdges'].filter(edge => {
          edges.push({ source: edge.from, target: edge.to, type: edge.type, value: 1 });
        })
      }
      this.graphData['links'] = edges;
      this.selectedCount = this.graphData['nodes'].length;
      // console.log('graphData :', this.graphData);
      // display data
      this.d3SimpleGraph();

    }, err => {
      console.error('An error occured while retrieving initial graph data', err);
      this.graphData = {};
    });
  }

  // populate graph
  private d3SimpleGraph(): void {

    let svg = d3.select('#canvas').append('svg')
      .attr("width", "100%")
      .attr("height", "100%")
    // .attr('width', this.width)
    // .attr('height', this.height);

    //add zoom capabilities 
    var zoom_handler = d3.zoom()
      .on("zoom", zoom_actions);

    zoom_handler(svg);

    //Zoom functions 
    function zoom_actions() {
      d3.selectAll("g").attr("transform", d3.event.transform)
    }

    this.restartSimulation();
  }

  // to reset whole graph
  restartSimulation() {

    //any links with duplicate source and target get an incremented 'linknum'
for (var i=0; i<this.graphData['links'].length; i++) {
  if (i != 0 &&
    this.graphData['links'][i].source == this.graphData['links'][i-1].source &&
    this.graphData['links'][i].target == this.graphData['links'][i-1].target) {
      this.graphData['links'][i].linknum = this.graphData['links'][i-1].linknum + 1;
      }
  else {this.graphData['links'][i].linknum = 1;};
};

    // first remove the previous graph
    d3.select("svg").selectAll("g").remove();
    d3.selectAll(".tooltip").remove();

    this.simulation = d3.forceSimulation(this.graphData['nodes'])
      .force("link", d3.forceLink(this.graphData['links']).id(d => d['id']).distance(this.lineLength))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2))
      .force("charge", d3.forceManyBody().strength(-800).distanceMin(100).distanceMax(800))// Nodes are attracted one each other of value is > 0
      .force("collide", d3.forceCollide().strength(.1).radius(45).iterations(.1)) // Force that avoids circle overlapping
      .alpha(.7)
      .velocityDecay(.7)
      .alphaDecay(.1)
      .on("tick", () => {
        edgepaths.attr('d', function (d) {
          let dr = 75/d['linknum'];  //linknum is defined above
          return 'M ' + d['source'].x + ' ' + d['source'].y + ' L ' + d['target'].x + ' ' + d['target'].y;
        });

        edgelabels.attr('transform', function (d) {
          if (d['target'].x < d['source'].x) {
            var bbox = this.getBBox();
            var rx = bbox.x + bbox.width / 2;
            var ry = bbox.y + bbox.height / 2;
            return 'rotate(180 ' + rx + ' ' + ry + ')';
          }
          else {
            return 'rotate(0)';
          }
        });

        // update label positions
        nodelabels
          .attr("x", function (d) { return d['x']; })
          .attr("y", function (d) { return d['y']; })
        link
          .attr("x1", d => d['source'].x)
          .attr("y1", d => d['source'].y)
          .attr("x2", d => d['target'].x)
          .attr("y2", d => d['target'].y);
        // console.log('wh', window.innerWidth, window.innerHeight);

        // to set boundery to forcelayout
        let r = this.circleRadius;
        let w = this.width;
        let h = this.height;
        node
          .attr("cx", function (d) { return d['x'] = Math.max(r, Math.min(w - r, d['x'])); })
          .attr("cy", function (d) { return d['y'] = Math.max(r, Math.min(h - r, d['y'])); })
          .attr("id", (d) => { return "node" + d['id'] })
          .on('mouseover.tooltip', (d) => {
            d3.select("#node" + d['id'])
              .attr("stroke", "#00BFFF") // for the border of circle
              .attr("stroke-width", 2.5) // for the border of circle
              tooltip.transition()
              .duration(20)
              .style("opacity", 10)
              .style("background-color", "#fff")
              .style("pointer-events", "none")
              .style("z-index", "10")
              .style('max-width', '200px')
              .style('height', 'auto')
              .style('padding', '1px')
              .style('border-style', 'solid')
              .style('border-width', '.5px')
              .style('border-radius', '4px')
              .style('box-shadow', '1px 1px 5px rgba(0, 0, 0, .5)')

            tooltip.html("Name : " + d['label'] + "<br>Status : " + d['status'] + "<br>Connection : " + d['connection'] + "<br>Represent : " + d['represent'] + "<br>SP Thinking : " + d['Understanding of SP Thinking'] + "<p/>Type : " + d['type'])
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY + 10) + "px");
              this.nodemouseover(d)
            
          })
          
          .on('mouseout.tooltip', (d) => {
            tooltip.transition()
            .duration(10)
            .style("opacity", 0)
             d3.selectAll(".tooltip").remove();
            if(this.linkCreateDrag){
              d3.select("#node" + d['id'])
              .attr("stroke", "#00BFFF") // for the border of circle
              .attr("stroke-width", 2.5) // for the border of circle
              // this.nodemouseout(d);
            }else{
              d3.select("#node" + d['id'])
              .attr("stroke", "#fff") // for the border of circle
              .attr("stroke-width", 1.5) // for the border of circle
            }           
           
          })
          
        let tooltip = d3.select("body")
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);

      });

    let link = d3.select("svg").append("g")
      .attr("stroke", this.linkColor)
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(this.graphData['links'])
      .join("line")
      .attr('marker-end', 'url(#arrowhead)')
      .attr("stroke-width", d => Math.sqrt(d['value']));

    link.append("title")
      .text(function (d) { return d['type']; });

    let edgepaths = d3.select("svg").append("g").selectAll(".edgepath")
      .data(this.graphData['links'])
      .enter()
      .append('path')
      .attr('class', 'edgepath')
      .attr('fill-opacity', 0)
      .attr('stroke-opacity', 0)
      .attr('id', function (d, i) { return 'edgepath' + i })
      .style("pointer-events", "none");

    let edgelabels = d3.select("svg").append("g").selectAll(".edgelabel")
      .data(this.graphData['links'])
      .enter()
      .append('text')
      .style("pointer-events", "none")
      .attr('class', 'edgelabel')
      .attr('id', function (d, i) { return 'edgelabel' + i })
      .attr('font-size', 10)
      .attr('fill', this.relationColor);

    edgelabels.append('textPath')
      .attr('xlink:href', function (d, i) { return '#edgepath' + i })
      .style('text-anchor', 'middle')
      .style('pointer-events', 'none')
      .attr('startOffset', '50%')
      .text(function (d) { return d['type'] });

    let node = d3.select("svg").append("g")
      .attr("stroke", "#fff") // for the border of circle
      .attr("stroke-width", 1.5) // for the border of circle
      .selectAll("circle")
      .data(this.graphData['nodes'])
      .join("circle")
      .attr("r", this.circleRadius) // circle radius
      .attr("fill", this.color()) // circle color
      .call(d3.drag()
        .on("start", (d) => { this.dragstarted(d) })
        .on("drag", (d) => { this.dragged(d) })
        .on("end", (d) => { this.dragended(d) }));
    this.node = node;
    // node labels
    let nodelabels = d3.select("svg").append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(this.graphData['nodes'])
      .enter().append("text")
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .style('font-family', 'FontAwesome')
      .style('font-size', '15px')
      .style("pointer-events", "none")
      .text(function (d) { return d['label']; })
      .call(d3.drag()
        .on("start", (d) => { this.dragstarted(d) })
        .on("drag", (d) => { this.dragged(d) })
        .on("end", (d) => { this.dragended(d) }));

    // build the arrow.
    let arrow = d3.select('svg').append("g").append('defs').append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '-0 -5 10 10')
      .attr('refX', 30)
      .attr('refY', 0)
      .attr('orient', 'auto')
      .attr('markerWidth', 13)
      .attr('markerHeight', 13)
      .attr('xoverflow', 'visible')
      .append('svg:path')
      .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
      .attr('fill', '#999')
      .style('stroke', 'none');
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

  // create new node 
  nodeEventCapture(event) {
    if (Object.keys(event).length > 0) {

      if (event.action === 'create') {
        // handle the functionaluty of creating a node
        let newNodeData = {
          id: event.data.id,
          label: event.data.properties.Name,
          type: [event.data.type],
          properties: event.data.properties
        };
        // make a request to create a node, if it succeedes only then show in the graph
        this.graphService.createNewNode(newNodeData).subscribe(response => {
          // console.log(response);
          try {
            // add the new node to the d3js
            //  console.log("node created");
            if (response.hasOwnProperty('seperateNodes')) {
              response['seperateNodes'] = this.addColors(response['seperateNodes']);
              response['seperateNodes'].filter(node => {
                this.graphData['nodes'].push({ id: node.id, label: node.label, type: node.type[0], connection: node.properties.Connection, status: node.properties.Status, represent: node.properties.Represent, 'Understanding of SP Thinking': node.properties['Understanding of SP Thinking'], color: node.color });
              })
            }
            if (response.hasOwnProperty('seperateEdges')) {
              response['seperateEdges'].filter(edge => {
                this.graphData['links'].push({ source: edge.from, target: edge.to, type: edge.type, value: 1 });
              })
            }
            this.restartSimulation();
            //  console.log('graphData :', this.graphData);


          } catch (addErr) {
            console.log('Error while adding the data node to vis ', addErr['message']);
          }
        }, error => {
          console.error('An error occured while creating node in  database ', error);
        });
      } else if (event.action === 'cancel') {
        // When cancelation of node create
        console.log("cancle");
    }
    }

    else if (event.action === 'edit') {
      // handle the functionality of editing the node
    } else if (event.action === 'delete') {
      // handle the functionality of deleting the node
    } else {
      // invalid click event
      console.error('An invalid click event retrieved ', event);
    }
  }

  // create new relationship
  edgeEventCapture(event) {
    if (Object.keys(event).length > 0) {
      // console.log('recieved an event ', event);

      if (event.action === 'create') {
        //  console.log("linkcreate",this.linkCreateDrag);
        this.linkCreateDrag = true;
      } else if (event.action === 'createRel') {
        // handle the functionaluty of creating a relationship
        this.newRelationData = {
          type: [event.data.type],
          properties: event.data.properties
        };
        let sourceNodeId = this.selectedNodes[this.selectedNodes.length - 2]['id'];
        let targetNodeId = this.selectedNodes[this.selectedNodes.length - 1]['id'];
        // d3.select("#link").remove();
        this.linkCreateDrag = false;
        this.graphData['links'].push({ source: sourceNodeId, target: targetNodeId, type: this.newRelationData['type'][0], value: 1 });
        // make a request to create a node, if it succeedes only then show in the graph
        this.newRelationData['from'] = this.selectedNodes[this.selectedNodes.length - 2]['name'];;
        this.newRelationData['to'] = this.selectedNodes[this.selectedNodes.length - 1]['name'];
        console.log("newrel", this.newRelationData);
        this.graphService.createNewRelation(this.newRelationData).subscribe(response => {
          console.log("createNewRelation", response);
        }, error => {
          console.log('error while reading new relation data from service ', error);
        });
        // console.log(this.graphData);
        this.selectedNodes = [];
        d3.select('#newline').remove();
        d3.select('#arrowheadnewrel').remove();
        this.restartSimulation();
      } else if (event.action === 'cancel') {
          // When cancelation of relation create
          this.linkCreateDrag = false;
          d3.select('#newline').remove();
          d3.select('#arrowheadnewrel').remove();
      }
    }
  }

  color() {
    //const scale = d3.scaleOrdinal(d3.schemeCategory10);
    return d => d.color;
  }


  dragstarted(d) {
    if (this.linkCreateDrag) {
      // build the arrow for new relation.
    let arrow2 = d3.select('svg').append("g").append('defs').append('marker')
    .attr('id', 'arrowheadnewrel')
    .attr('viewBox', '-0 -5 10 10')
    .attr('refX', 1)
    .attr('refY', 0)
    .attr('orient', 'auto')
    .attr('markerWidth', 7)
    .attr('markerHeight', 7)
    .attr('xoverflow', 'visible')
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', '#999')
    .style('stroke', 'none');

      let lines = d3.select("svg").append("g").append("line")
        .attr("id", "newline")
        .attr("stroke", this.linkColor)
        .attr("stroke-width", 2)
        .attr("stroke-opacity", 0.6)
        .attr("x1", d.x)
        .attr("y1", d.y)
        .attr("x2", d.x)
        .attr("y2", d.y)
        .attr('marker-end', 'url(#arrowheadnewrel)')


    } else {
      if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
      d3.select("#node" + d['id'])
        .attr("stroke", "#00BFFF") // for the border of circle
        .attr("stroke-width", 2.5) // for the border of circle
      d.fx = d.x;
      d.fy = d.y;
    }
  }
  dragged(d) {
    if (this.linkCreateDrag) {
      var lines = d3.select("#newline")
        .attr("x2", d3.event.x)
        .attr("y2", d3.event.y)
    } else {
      d3.select("#node" + d['id'])
        .attr("stroke", "#00BFFF") // for the border of circle
        .attr("stroke-width", 2.5) // for the border of circle
      d.fx = d3.event.x;
      d.fy = d3.event.y;
      this.node['_groups'][0].forEach(element => {

        if (element['__data__']['id'] != d['id']) {
          element['__data__']['fx'] = element['__data__']['x'];
          element['__data__']['fy'] = element['__data__']['y'];
        }
      })
    }
  }
  dragended(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0);
    // d.fx = d.x;
    // d.fy = d.y;
    d3.select("#node" + d['id'])
      .attr("stroke", "#fff") // for the border of circle
      .attr("stroke-width", 1.5) // for the border of circle
    if (this.linkCreateDrag) { this.createNewLink() }
  }



  nodemouseover(d) {
    this.selectedNodes.push({ id: d['id'], name: d['label'] });
    console.log("selec",this.selectedNodes);
  }
  nodemouseout(d){
    
  }

  createNewLink() {
    this.linkCreateDrag = false;
    if(this.selectedNodes.length > 1){
      if (this.selectedNodes[this.selectedNodes.length - 1]['id'] === this.selectedNodes[this.selectedNodes.length - 2]['id']) {
        alert("plaese select two different nodes to create relation");
        d3.select('#newline').remove();
        d3.select('#arrowheadnewrel').remove();
        this.selectedNodes = [];
      } else {
        this.edgeDragEndEvent = { type: 'click', action: 'openModal' };
      }
    }else{
      alert("plaese select two nodes to create relation");
      d3.select('#newline').remove();
      d3.select('#arrowheadnewrel').remove();
      this.selectedNodes = [];
    }
    
  }


  showGraphData() {
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
      //console.log('recieved data from graph service', result);
      if (result.hasOwnProperty('seperateNodes')) {
        var nodes = [];
        result['seperateNodes'] = this.addColors(result['seperateNodes']);
        result['seperateNodes'].filter(node => {
          nodes.push({ id: node.id, label: node.label, type: node.type[0], connection: node.properties.Connection, status: node.properties.Status, represent: node.properties.Represent, 'Understanding of SP Thinking': node.properties['Understanding of SP Thinking'], color: node.color });
        })
      }
      this.graphData['nodes'] = nodes;
      if (result.hasOwnProperty('seperateEdges')) {
        var edges = [];
        result['seperateEdges'].filter(edge => {
          edges.push({ source: edge.from, target: edge.to, type: edge.type, value: 1 });
        })
      }
      this.graphData['links'] = edges;
      console.log('graphData :', this.graphData);
      this.selectedCount = this.graphData['nodes'].length;
      // display data
      this.restartSimulation();
    }, err => {
      console.error('An error occured while retrieving initial graph data', err);
      this.graphData = {};
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('graph',this.event);
    this.changeNodeColor();
  }

  changeNodeColor() {
    if (this.event == 'search1' || this.event == 'search2') {
      this.showGraphData();
    } else if (this.event == 'reset') {
      this.nodeLimit = "";
      this.displayInitialGraph();
    } else {
      const previousData = _.cloneDeep(this.graphData);
      // tslint:disable-next-line: no-string-literal
      if (!!this.graphData['nodes']) {
        var temgraph = this.graphData['nodes'].map(node => {
          if (this.event == node.type[0]) {
            node.color = this.colorConfig.defaultColor[node.type[0]];
          } else {
            node.color = '#95BFF8';

            return node;
          }
          return node;
        })
        previousData.nodes.clear();
        previousData.nodes = _.cloneDeep(temgraph);
        this.graphData = previousData;
        // this.restartSimulation();
        // console.log(this.graphData)
      }
    }
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

}
