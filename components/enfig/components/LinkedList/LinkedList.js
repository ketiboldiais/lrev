import React, { useRef, useEffect } from "react";
import { isObjectLiteral } from "../utils/isObjectLiteral/isObjectLiteral";
import { svg } from "../utils/svg/svg";
import { Base } from "../base/Base";
import * as d3 from "d3";
import { translate } from "../utils/translate/translate";
import { insertArrowDefinitions } from "../utils/insertArrowDefinitions/insertArrowDefinitions";

const formatData = (arr = []) => {
	let data = [];
	for (let i = 0; i < arr.length; i++) {
		if (isObjectLiteral(arr[i])) {
			data.push(arr[i]);
		} else {
			let node = { val: arr[i] };
			data.push(node);
		}
	}
	return data;
};

const setDimensions = (length) => {
	let svgWidth, svgHeight, containerWidth, containerHeight;
	switch (length) {
		case 1:
			svgWidth = 100;
			svgHeight = 30;
			containerWidth = 40;
			containerHeight = 14;
			break;
		case 2:
			svgWidth = 130;
			svgHeight = 40;
			containerWidth = 50;
			containerHeight = 14;
			break;
		case 3:
			svgWidth = 160;
			svgHeight = 40;
			containerWidth = 60;
			containerHeight = 14;
			break;
		case 4:
			svgWidth = 190;
			svgHeight = 40;
			containerWidth = 70;
			containerHeight = 14;
			break;
		case 5:
			svgWidth = 220;
			svgHeight = 40;
			containerWidth = 80;
			containerHeight = 14;
			break;
		case 6:
			svgWidth = 260;
			svgHeight = 40;
			containerWidth = 90;
			containerHeight = 14;
			break;
		case 7:
			svgWidth = 280;
			svgHeight = 40;
			containerWidth = 100;
			containerHeight = 14;
			break;
		case 8:
			svgWidth = 300;
			svgHeight = 40;
			containerWidth = 100;
			containerHeight = 14;
			break;
		case 9:
			svgWidth = 340;
			svgHeight = 40;
			containerWidth = 100;
			containerHeight = 14;
			break;
		case 10:
			svgWidth = 380;
			svgHeight = 40;
			containerWidth = 100;
			containerHeight = 14;
			break;
		case 11:
			svgWidth = 400;
			svgHeight = 40;
			containerWidth = 100;
			containerHeight = 14;
			break;
		case 12:
			svgWidth = 430;
			svgHeight = 40;
			containerWidth = 100;
			containerHeight = 14;
			break;
	}
	return {
		svgWidth,
		svgHeight,
		containerWidth,
		containerHeight,
	};
};

export const LinkedList = ({
	data = [],
	width = 30.1049 * data.length + 70.1515,
	height = 40,
	containerWidth = 23.4209 * Math.log(20.5536*data.length-8.36375)-21.1874,
	containerHeight = 14,
	margins = [10, 40, 10, 20],
	isIndexed = true,
}) => {
	const LinkedListFigure = useRef();
	const _svg = svg(width, height, margins);
	const _data = formatData(data);
	const nodeCount = _data.length;
	const scale = d3
		.scaleBand()
		.domain(d3.range(nodeCount))
		.rangeRound([0, _svg.width])
		.paddingInner(0.5);
	const nodeWidth = scale.bandwidth();
	const nodeHeight = 10;

	useEffect(() => {
		const canvas = d3
			.select(LinkedListFigure.current)
			.select("g.svgElement");
		const nodeGroup = canvas
			.append("g")
			.attr("class", "linked-list")
			.selectAll("nodes")
			.data(_data)
			.enter()
			.append("g")
			.attr("class", "linked-list-node")
			.attr("transform", (d, i) => translate(scale(i), 0))
			.attr("y", 0);
		insertArrowDefinitions(
			canvas,
			"linked-list-arrow",
			9,
			0,
			5,
			5,
			"auto",
			"black",
		);
		const dataField = nodeGroup
			.append("g")
			.attr("class", "node-data-field");
		const dataFieldRectangle = dataField
			.append("rect")
			.attr("class", "node-data-field-rectangle")
			.attr("width", nodeWidth)
			.attr("height", nodeHeight)
			.attr("stroke", "black")
			.attr("fill", "white");
		const dataFieldText = dataField
			.append("text")
			.attr("class", "node-data-field-text")
			.attr("text-anchor", "middle")
			.attr("x", nodeWidth / 2)
			.attr("y", nodeHeight / 2)
			.attr("dy", "0.35em")
			.attr("font-size", "7px")
			.text((d) => d.val);
		if (isIndexed) {
			dataField
				.append("g")
				.attr("class", "enfig-index")
				.append("text")
				.attr("class", "node-index-text")
				.attr("text-anchor", "middle")
				.attr("fill", "black")
				.style("font-size", "7px")
				.attr("x", nodeWidth / 1.5)
				.attr("y", nodeHeight + 10)
				.text((d, i) => i);
		}

		const nextField = nodeGroup
			.append("g")
			.attr("class", "node-next-field")
			.attr("transform", translate(scale.bandwidth(), 0));

		const nextFieldRectangle = nextField
			.append("rect")
			.attr("stroke", "black")
			.attr("fill", "white")
			.attr("width", nodeWidth / 2)
			.attr("height", nodeHeight);

		const nodeLinks = nodeGroup
			.append("line")
			.attr("class", "linked-list-link")
			.attr("stroke", "black")
			.attr("x1", nodeWidth + nodeWidth / 4)
			.attr("y1", nodeHeight / 2)
			.attr("x2", nodeWidth + scale.bandwidth())
			.attr("y2", nodeHeight / 2)
			.attr("marker-end", "url(#linked-list-arrow)");

		const nodeLinkCircle = nodeGroup
			.append("circle")
			.attr("fill", "black")
			.attr("r", 1.5)
			.attr("cx", nodeWidth + nodeWidth / 4)
			.attr("cy", nodeHeight / 2);

		const annotation = nextField
			.filter((d) => d.ant)
			.append("g")
			.attr("class", "linked-list-annotation")
			.append("text")
			.attr("text-anchor", "middle")
			.style("font-size", "8px")
			.attr("x", -scale.bandwidth() / 4)
			.attr("y", -4)
			.text((d) => d.ant);
	});
	return (
		<Base
			id={LinkedListFigure}
			width={width}
			height={height}
			containerWidth={containerWidth}
			containerHeight={containerHeight}
			margins={margins}
		/>
	);
};
