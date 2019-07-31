import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { GraphDataService } from 'src/app/modules/core/services/graph-data-service/graph-data.service';

@Component({
  selector: 'app-graph-d3-visualizer',
  templateUrl: './graph-d3-visualizer.component.html',
  styleUrls: ['./graph-d3-visualizer.component.scss']
})
export class GraphD3VisualizerComponent implements OnInit {

  public graphData = {};
  public data = {};
  constructor(private graphService: GraphDataService) { }
  public circleRadius: number = 25;
  public linkColor : string = "#696969";
  public relationColor : string = "#696969";
  public colorConfig = {
    defaultColor : {
    "Academia" : '#C990C0',
    "Consulting" : '#A5ABB6',
    "Government" : '#8DCC93',
    "Impact Investor" : '#4C8EDA',
    "International Agency" : '#FFC454',
    "Media" : '#D9C8AE',
    "NGO/CBO" : '#F79767',  
    "People" : '#569480',
    "Philanthropy" : '#DA7194',
    "Platform" : '#57C7E3',
    "Private Sector" : '#2BBBAD',
    "Research Institute" : '#c51162'
    },
    selectedColor : {
      "Academia" : '#ff4444',
      "Consulting" : '#ffbb33',
      "Government" : '#00C851',
      "Impact Investor" : '#33b5e5',
      "International Agency" : '#CC0000',
      "Media" : '#FF8800',
      "NGO/CBO" : '#007E33',
      "People" : '#0099CC',
      "Philanthropy" : '#9933CC',
      "Platform" : '#0d47a1',
      "Private Sector" : '#2BBBAD',
      "Research Institute" : '#c51162'
  
    }
  };
  ngOnInit() {
    this.displayInitialGraph();
  }

  displayInitialGraph() {
    this.graphService.getInitialDataV2().subscribe(result => {
      console.log('recieved data from graph service', result);

      if (result.hasOwnProperty('seperateNodes')) {
        var nodes = [];
        result['seperateNodes'] = this.addColors(result['seperateNodes']);
        result['seperateNodes'].filter(node => {
          nodes.push({ id: node.id, label: node.label, type: node.type[0], connection: node.properties.Connection, status: node.properties.Status, represent: node.properties.Represent, 'Understanding of SP Thinking':node.properties['Understanding of SP Thinking'], color: node.color });
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

  private d3SimpleGraph(): void {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var lineLength = 130;

    var svg = d3.select('#canvas').append('svg')
      .attr('width', width)
      .attr('height', height);
    const links = this.graphData['links'].map(d => Object.create(d));
    const nodes = this.graphData['nodes'].map(d => Object.create(d));

    var tooltip = d3.select("#canvas")
      .append("div")
      .attr("class", "tooltip");

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d['id']).distance(lineLength))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("charge", d3.forceManyBody().strength(-800)) // Nodes are attracted one each other of value is > 0
      .force("collide", d3.forceCollide().strength(.1).radius(45).iterations(1)) // Force that avoids circle overlapping

      // edge label
    const link = svg.append("g")
      .attr("stroke", this.linkColor)
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d['value']));

    link.append("title")
      .text(function (d) { return d['type']; });

    var edgepaths = svg.selectAll(".edgepath")
      .data(links)
      .enter()
      .append('path')
      .attr('class', 'edgepath')
      .attr('fill-opacity', 0)
      .attr('stroke-opacity', 0)
      .attr('id', function (d, i) { return 'edgepath' + i })
      .style("pointer-events", "none");

    var edgelabels = svg.selectAll(".edgelabel")
      .data(links)
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


    const node = svg.append("g")
      .attr("stroke", "#fff") // for the border of circle
      .attr("stroke-width", 1.5) // for the border of circle
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", this.circleRadius) // circle radius
      .attr("fill", this.color()) // circle color
      .call(this.drag(simulation));

    // node labels
    var nodelabels = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(nodes)
      .enter().append("text")
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .style('font-family', 'FontAwesome')
      .style('font-size', '15px')
      .style("pointer-events", "none")
      .text(function (d) { return d['label']; })
      .call(this.drag(simulation));

    simulation.on("tick", () => {
      edgepaths.attr('d', function (d) {
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

      node
        .attr("cx", d => d['x'])
        .attr("cy", d => d['y'])
        .on('mouseover.tooltip', function (d) {
          tooltip.transition()
            .duration(300)
            .style("opacity", 10)
            .style("background-color", "#fff")
            .style("pointer-events", "none")
            .style("z-index", "10")
            .style('max-width','200px')
            .style('height','auto')
            .style('padding','1px')
            .style('border-style','solid')
            .style('border-width','.5px')
            .style('border-radius','4px')
            .style('box-shadow','1px 1px 5px rgba(0, 0, 0, .5)')
            
          tooltip.html("Name : " + d['label'] + "<br>Status : " + d['status'] + "<br>Connection : " + d['connection'] + "<br>Represent : " + d['represent'] + "<br>SP Thinking : " + d['Understanding of SP Thinking'] + "<p/>Type : " + d['type'])
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 10) + "px");
        })
        .on("mouseout.tooltip", function () {
          tooltip.transition()
            .duration(100)
            .style("opacity", 0);
        });
    });




  }
  drag = simulation => {

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    // function dragended(d) {
    //   if (!d3.event.active) simulation.alphaTarget(0);
    //   d.fx = null;
    //   d.fy = null;
    // }

    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
    // .on("end", dragended);
  }
  color() {
    //const scale = d3.scaleOrdinal(d3.schemeCategory10);
    return d => d.color;
  }

  addColors(nodeObj) {
    // console.log(nodeObj);
    nodeObj.forEach(node => {
      if (node.hasOwnProperty('type') && node.type.length > 0 ) {
        node['color'] = this.colorConfig.defaultColor[node.type[0]];
      }
    });
    // console.log(nodeObj);
    return nodeObj;

  }

}
