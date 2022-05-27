import React, {useRef, useEffect} from "react";
import {svg} from "../utils/svg/svg";
import {Base} from "../base/Base";
import {attrs} from "../utils/attrs/attrs";
import * as d3 from "d3";

export const Network = ({
  data = [[]],
  width = 500,
  height = 500,
  containerWidth = 90,
  containerHeight = 90,
  repulsion = 0.01,
  edgeLength = 50,
  collisionRadius = 10,
  margins = [50, 50, 50, 50],
  nodeRadius = 5,
  edgeColor = "black",
  edgeLabelColor = "black",
  edgeLabelFontSize = "0.6rem",
  radialStrokeColor = "red",
  radialFillColor = "",
  radialRadius = 10,
  radialOpacity = 0.4,
  edgeWidth = 1,
  nodeFillColor = "white",
  nodeStrokeColor = "black",
  nodeStrokeWidth = 1,
  nodeTextColor = "black",
  nodeTextFontSize = "0.7rem",
}) => {
  const _svg = svg(width, height, margins);
  const _edges = data;
  const NetworkFigure = useRef(null);
  const generateNodes = (_edges) => {
    let _nodes = {};
    _edges.forEach(function (link) {
      if (link.hasOwnProperty("sattr")) {
        _nodes[link.source] = {name: link.source, attr: link.sattr};
      }
      if (link.hasOwnProperty("tattr")) {
        _nodes[link.target] = {name: link.target, attr: link.attr};
      }
      link.source = _nodes[link.source] || (_nodes[link.source] = {name: link.source});
      link.target = _nodes[link.target] || (_nodes[link.target] = {name: link.target});
    });
    return _nodes;
  };
  const _nodes = Object.values(generateNodes(_edges));
  const networkForce = d3
    .forceSimulation(_nodes)
    .force("charge", d3.forceManyBody().strength(repulsion))
    .force("link", d3.forceLink(_edges).distance(edgeLength))
    .force(
      "center",
      d3
        .forceCenter()
        .x(_svg.width / 2)
        .y(_svg.height / 2),
    )
    .force("collision", d3.forceCollide().radius(collisionRadius));
  const renderNetwork = () => {
    const canvas = d3.select(NetworkFigure.current).select("g.svgElement");
    const networkCanvas = canvas.append("g").attr("class", "network");

    // edge groups
    const networkEdgeGroups = networkCanvas
      .selectAll("network-edges")
      .data(_edges)
      .enter()
      .append("g")
      .attr("class", "network-edge");

    // edge lines
    const networkEdgeLines = networkEdgeGroups
      .append("line")
      .attr("stroke", edgeColor)
      .attr("stroke-width", 1)
      .attr("fill", "none");

    // edge label, if any
    networkEdgeGroups
      .selectAll("network-edge-labels")
      .join("text")
      .attr("text-anchor", "middle")
      .attr("fill", edgeLabelColor)
      .attr("font-size", edgeLabelFontSize)
      .text((d) => d.label);

    // node groups
    const networkNodeGroups = networkCanvas
      .selectAll("network-node-groups")
      .data(_nodes)
      .join("g")
      .attr("class", "network-node");

    // node circles
    const networkNodeCircles = networkNodeGroups
      .append("circle")
      .attr("fill", (d) => {
        if (d.attr && d.attr.fill) {
          return d.attr.fill;
        } else if (d.attr && d.attr.radial) {
          return radialStrokeColor;
        } else {
          return nodeStrokeColor;
        }
      })
      .attr("r", (d) => {
        if (d.attr && d.attr.r) {
          return d.attr.r;
        } else {
          return nodeRadius;
        }
      });

    // radial nodes
    networkNodeGroups
      .filter((d) => d.attr && d.attr.radial)
      .append("circle")
      .attr("fill", (d) => (d.attr.fill ? d.attr.fill : radialFillColor))
      .attr("stroke", (d) => (d.attr.stroke ? d.attr.stroke : radialStrokeColor))
      .attr("opacity", (d) => (d.attr.opacity ? d.attr.opacity : radialOpacity))
      .attr("r", (d) => (typeof d.attr.r === "number" ? d.attr.r : radialRadius));

    // node labels
    networkNodeGroups
      .append("text")
      .text((d) => d.name)
      .attr("text-anchor", "middle")
      .attr("dx", "-1.3em")
      .attr("fill", nodeTextColor)
      .attr("font-size", nodeTextFontSize);

    // force - test
    networkForce.on("tick", function () {
      const edgeSelection = networkEdgeGroups.selectAll("line");
      attrs(edgeSelection, {
        x1: (d) => d.source.x,
        y1: (d) => d.source.y,
        x2: (d) => d.target.x,
        y2: (d) => d.target.y,
      });
      networkNodeGroups.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    });
  };
  useEffect(() => {
    if (NetworkFigure.current) {
      renderNetwork();
    }
  }, []);
  return (
    <Base
      id={NetworkFigure}
      width={width}
      height={height}
      containerWidth={containerWidth}
      containerHeight={containerHeight}
      margins={margins}
    />
  );
};
