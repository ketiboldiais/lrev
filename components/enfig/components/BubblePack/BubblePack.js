import React, { useRef, useEffect } from "react";
import { translate } from "../utils/translate/translate";
import { svg } from "../utils/svg/svg";
import { getArrayMax } from "../utils/getArrayMax/getArrayMax";
import { getPropertyValues } from "../utils/getPropertyValues/getPropertyValues";
import { Base } from "../base/Base";
import * as d3 from "d3";
import { wrap } from "../utils/wrap/wrap";

export const BubblePack = ({
	data = [],
	width = 500,
	height = 500,
	colorWeight = ["#e0fffe", "#f9fffe"],
	containerWidth = 50,
	containerHeight = 50,
	margins = [50, 50, 50, 50],
	padding=20,
	fontSize,
	textWrap,
	xText=0,
	yText=0,
}) => {
	const BubblePackFigure = useRef();
	const _svg = svg(width, height, margins);
	const maxVal = getArrayMax(getPropertyValues(data, "val"));
	const circleCount = data.length;
	const stratify = d3
		.stratify()
		.id((d) => d.id)
		.parentId((d) => d.parent);
	const rootNode = stratify(data).sum((d) => d.val ? d.val : 1);
	const pack = d3.pack().size([_svg.width, _svg.height]).padding(padding);
	const bubbleData = pack(rootNode).descendants();
	const circleFillColor = d3
		.scaleLinear()
		.domain([0, rootNode.height])
		.range(colorWeight);

    useEffect(() => {
    	const canvas = d3
    		.select(BubblePackFigure.current)
    		.select("g.svgElement")
    		.attr("class", "bubble-pack");
    	const nodes = canvas
    		.selectAll("g.nodes")
    		.data(bubbleData)
    		.enter()
    		.append("g")
    		.attr("class", "bubble-pack-circle-group")
    		.attr("transform", (d) => translate(d.x, d.y));
    	const circles = nodes
    		.append("circle")
    		.attr("r", (d) => d.r)
				.attr('cx', d => d.data.x)
				.attr('cy', d => d.data.y)
				.attr('foo', d => console.log(d))
    		.attr("class", "bubble-pack-circle")
    		.attr("fill", (d) => circleFillColor(d.depth));
    	const circleLabelNoChildren = nodes
    		.filter((d) => !d.children)
    		.append('g')
    		.attr('transform', translate(xText, yText))
    		.append("text")
				.attr('font-size', fontSize)
    		.attr("text-anchor", "middle")
    		.attr("class", "bubble-pack-circle-label leaf-node-label")
    		.text((d) => d.data.id)
    		.call(wrap, textWrap)
    	const circleLabelHasChildren = nodes
    		.filter((d) => d.children)
    		.append("text")
    		.attr("class", "bubble-pack-circle-label branch-node-label")
    		.attr("text-anchor", "middle")
    		.attr("dy", (d) => -d.r - 10)
    		.text(d => d.id)
    });
    return (
    	<Base
    		id={BubblePackFigure}
    		width={width}
    		height={height}
    		containerWidth={containerWidth}
    		containerHeight={containerHeight}
    		margins={margins}
    	/>
    );

};
