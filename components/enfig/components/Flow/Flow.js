import React, {useRef, useEffect} from "react";
import {svg} from "../utils/svg/svg";
import {Base} from "../base/Base";
import {attrs} from "../utils/attrs/attrs";
import { generateEdges } from "../Graph/generateEdges/generateEdges";
import { generateNodes } from "../Graph/generateNodes/generateNodes";
import * as d3 from "d3";

export const Flow = ({
  data = [[]],
  width = 500,
  focus,
  height = 500,
  containerWidth = 70,
  containerHeight = 70,
  repulsion = 0.01,
  edgeLength = 30,
  collisionRadius = 10,
  margins = [50, 50, 50, 50],
  nodeRadius = 5,
  radialRadius = nodeRadius * 8,
  nodeTextOffsetY = -11,
  nodeTextOffsetX = 0,
  edgeColor = "",
  edgeWidth = "",
  nodeFillColor = "",
  nodeStrokeColor = "",
  nodeStrokeWidth = "",
  nodeTextColor = "",
  nodeTextFontSize = "",
}) => {
  const GraphFigure = useRef();
  const _svg = svg(width, height, margins);
  const edges = generateEdges(data);
  const nodes = Object.values(generateNodes(data, edges));
  const networkCenter = d3
    .forceCenter()
    .x(_svg.width / 2)
    .y(_svg.height / 2);
  const manyBody = d3.forceManyBody().strength(-150).distanceMax(100);
  const forceX = d3.forceX(_svg.width / 2).strength(repulsion);
  const forceY = d3.forceY(_svg.height / 2).strength(repulsion);
  const force = d3
    .forceSimulation(nodes)
    .force("charge", manyBody)
    .force("link", d3.forceLink(edges).distance(edgeLength).iterations(1))
    .force("center", networkCenter)
    .force("x", forceX)
    .force("y", forceY)
    .force("collision", d3.forceCollide().radius(collisionRadius));

  useEffect(() => {
    const canvas = d3.select(GraphFigure.current).select("g.svgElement");
    const graph = canvas.append("g").attr("class", "graph");
    const edgeEnter = graph
      .selectAll("g.edges")
      .data(edges)
      .enter()
      .append("g")
      .attr("class", "graph-edge");
    const edgeLines = edgeEnter.append("line");
    attrs(edgeLines, {
      class: "graph-edge-line",
      stroke: edgeColor,
      strokeWidth: edgeWidth,
    });
    const nodeEnter = graph
      .selectAll("g.nodes")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", (d) =>
        d.focus ? `graph-node-focus-${d.focus}` : `graph-node`,
      );

    const nodeCircles = nodeEnter
      .append("circle")
      .attr("class", "graph-node-circle")
      .attr("r", (d) => (d.r ? d.r : nodeRadius))
      .attr("stroke", (d) => (d.stroke ? d.stroke : nodeStrokeColor))
      .attr("stroke-width", (d) =>
        d.strokeWidth ? d.strokeWidth : nodeStrokeWidth,
      )
      .attr("fill", (d) => (d.fill ? d.fill : nodeFillColor));

    const radial = nodeEnter
      .filter((d) => d.radial)
      .append("circle")
      .attr("class", "graph-node-radial-circle")
      .attr("r", (d) =>
        typeof d.radial === "number" ? d.radial : radialRadius,
      )
      .attr("fill", (d) => (d.fill ? d.fill : nodeFillColor))
      .attr("fill-opacity", 0.2)
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 0.2);

    const nodeText = nodeEnter.append("text").text((d) => d.id);

    attrs(nodeText, {
      class: "graph-node-text",
      "text-anchor": "middle",
      fill: nodeTextColor,
      dy: (d) => (d.dy ? d.dy : nodeTextOffsetY),
      dx: (d) => (d.dx ? d.dy : nodeTextOffsetX),
      "font-size": nodeTextFontSize,
    });

    force.on("tick", function () {
      const edgeSelection = edgeEnter.selectAll("line");
      attrs(edgeSelection, {
        x1: (d) => d.source.x,
        y1: (d) => d.source.y,
        x2: (d) => d.target.x,
        y2: (d) => d.target.y,
      });
      nodeEnter.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    });
  });
  return (
    <Base
      id={GraphFigure}
      width={width}
      height={height}
      containerWidth={containerWidth}
      containerHeight={containerHeight}
      margins={margins}
    />
  );
};
