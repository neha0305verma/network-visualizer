import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';

@Component({
  selector: 'app-graph-d3-visualizer',
  templateUrl: './graph-d3-visualizer.component.html',
  styleUrls: ['./graph-d3-visualizer.component.scss']
})
export class GraphD3VisualizerComponent implements OnInit {

  @Input() event: String;
  @Input() totalTypesArray = [];
  public selectedNodes = [];
  public linkCreateDrag : boolean = false;
  public graphData = {};
  public data = {};
  constructor(private graphService: GraphDataService) { }
  public circleRadius: number = 25;
  public linkColor: string = "#696969";
  public relationColor: string = "#696969";

  public width = window.innerWidth;
  public height = window.innerHeight;
  public lineLength = 130;

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
  public tooltip = d3.select("#canvas")
  .append("div")
  .attr("class", "tooltip");
  public edgepaths;
  public edgelabels;
  public node;
  public nodelabels;
  public link;
  public simulation;
  ngOnInit() {
    this.displayInitialGraph();
  }

  // fetch initial data
  displayInitialGraph() {
    this.graphService.getInitialDataV2().subscribe(result => {
      console.log('recieved data from graph service', result);

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
      .attr('width', this.width)
      .attr('height', this.height);

    this.restartSimulation();
  }

  // to reset whole graph
  restartSimulation() {

    // first remove the previous graph
    d3.select("svg").selectAll("g").remove();
    d3.selectAll(".tooltip").remove();

     this.simulation = d3.forceSimulation(this.graphData['nodes'])
      .force("link", d3.forceLink(this.graphData['links']).id(d => d['id']).distance(this.lineLength))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2))
      .force("charge", d3.forceManyBody().strength(-800))// Nodes are attracted one each other of value is > 0
      .force("collide", d3.forceCollide().strength(.1).radius(45).iterations(1)) // Force that avoids circle overlapping

      this.setAttribute();
      
    this.simulation.on("tick", () => {
      this.simulationTick();
    });
  }
  // set attribute of node,edge and labels
  setAttribute(){

    // edge label
    this.link = d3.select("svg").append("g")
      .attr("stroke", this.linkColor)
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(this.graphData['links'])
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d['value']));

    this.link.append("title")
      .text(function (d) { return d['type']; });

     this.edgepaths = d3.select("svg").append("g").selectAll(".edgepath")
      .data(this.graphData['links'])
      .enter()
      .append('path')
      .attr('class', 'edgepath')
      .attr('fill-opacity', 0)
      .attr('stroke-opacity', 0)
      .attr('id', function (d, i) { return 'edgepath' + i })
      .style("pointer-events", "none");

    this.edgelabels = d3.select("svg").append("g").selectAll(".edgelabel")
      .data(this.graphData['links'])
      .enter()
      .append('text')
      .style("pointer-events", "none")
      .attr('class', 'edgelabel')
      .attr('id', function (d, i) { return 'edgelabel' + i })
      .attr('font-size', 10)
      .attr('fill', this.relationColor);

    this.edgelabels.append('textPath')
      .attr('xlink:href', function (d, i) { return '#edgepath' + i })
      .style('text-anchor', 'middle')
      .style('pointer-events', 'none')
      .attr('startOffset', '50%')
      .text(function (d) { return d['type'] });


    this.node = d3.select("svg").append("g")
      .attr("stroke", "#fff") // for the border of circle
      .attr("stroke-width", 1.5) // for the border of circle
      .selectAll("circle")
      .data(this.graphData['nodes'])
      .join("circle")
      .attr("r", this.circleRadius) // circle radius
      .attr("fill", this.color()) // circle color
      .call(this.drag(this.simulation,this.linkCreateDrag));

    // node labels
    this.nodelabels = d3.select("svg").append("g")
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
      .call(this.drag(this.simulation,this.linkCreateDrag));

  }

  // to set all elements properly on window
  simulationTick(){
    this.edgepaths.attr('d', function (d) {
      return 'M ' + d['source'].x + ' ' + d['source'].y + ' L ' + d['target'].x + ' ' + d['target'].y;
    });

    this.edgelabels.attr('transform', function (d) {
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
    this.nodelabels
      .attr("x", function (d) { return d['x']; })
      .attr("y", function (d) { return d['y']; })
    this.link
      .attr("x1", d => d['source'].x)
      .attr("y1", d => d['source'].y)
      .attr("x2", d => d['target'].x)
      .attr("y2", d => d['target'].y);
    console.log('wh', window.innerWidth, window.innerHeight);
    let r = this.circleRadius;
    let w = this.width - 80;
    let h = this.height - 50;
    this.node.attr("cx", function (d) { return d['x'] = Math.max(r, Math.min(w - r, d['x'])); })
      .attr("cy", function (d) { return d['y'] = Math.max(r, Math.min(h - r, d['y'])); })
      .on('mouseover.tooltip', (d) => {
        this.relationBetweenNodes(d)
        this.tooltip.transition()
          .duration(300)
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

        this.tooltip.html("Name : " + d['label'] + "<br>Status : " + d['status'] + "<br>Connection : " + d['connection'] + "<br>Represent : " + d['represent'] + "<br>SP Thinking : " + d['Understanding of SP Thinking'] + "<p/>Type : " + d['type'])
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY + 10) + "px");
      })
      .on("mouseout.tooltip", function () {
        this.tooltip.transition()
          .duration(100)
          .style("opacity", 0);
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
          console.log(response);
          try {
            // add the new node to the d3js
            console.log("node created");
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

            console.log('graphData :', this.graphData);
            // display data
            this.d3SimpleGraph();

          } catch (addErr) {
            console.log('Error while adding the data node to vis ', addErr['message']);
          }
        }, error => {
          console.error('An error occured while creating node in  database ', error);
        });
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
      console.log('recieved an event ', event);

      if (event.action === 'create') {
        console.log("linkcreate",this.linkCreateDrag);
          this.linkCreateDrag = true;
          this.setAttribute();

      };
    }
  }

  color() {
    //const scale = d3.scaleOrdinal(d3.schemeCategory10);
    return d => d.color;
  }

  drag (simulation,linkCreateDrag){

    function dragstarted(d) {
      if (linkCreateDrag) {
        let lines = d3.select("svg").append("g").append("line")
        .attr("id", "newline"+d['id'])
        .style("stroke", "gray") // <<<<< Add a color
        .attr("x1", d.x)
        .attr("y1", d.y)
        .attr("x2", d.x)
        .attr("y2", d.y)
      } else {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
      }
    }
    function dragged(d) {
      if(linkCreateDrag){
        var lines = d3.select("#newline"+d['id'])
        .attr("x2", d3.event.x)
        .attr("y2", d3.event.y)
      }else{
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    
      }
    }
    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", () => { if(this.linkCreateDrag){this.createNewLink()} });
  }

  relationBetweenNodes(d) {
    this.selectedNodes.push(d['id']);
  }

  createNewLink() {
    let sourceNodeId = this.selectedNodes[this.selectedNodes.length - 2];
    let targetNodeId = this.selectedNodes[this.selectedNodes.length - 1];
      this.selectedNodes = [];
      // d3.select("#link").remove();
      this.linkCreateDrag = false;
      this.graphData['links'].push({ source: sourceNodeId, target: targetNodeId, value: 13 });
      console.log(this.graphData);
      this.restartSimulation();
  }

}
