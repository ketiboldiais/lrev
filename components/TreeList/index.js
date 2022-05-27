import React from "react";
import Route from "../Route";

const Tree = ({ data = [], allLinks = false, clickHandler }) => {
	return (
		<div>
			<ul>
				{data.map((tree, index) => (
					<TreeNode
						node={tree}
						key={index}
						allLinks={allLinks}
						clickFunction={clickHandler}
					/>
				))}
			</ul>
		</div>
	);
};

const TreeNode = ({ node, allLinks, clickFunction }) => {
	return (
		<li onClick={clickFunction}>
			<div>
				{allLinks ? (
					<Route to={node.path} text={node.name} />
				) : (
					<div>{node.name}</div>
				)}
			</div>
			<ul>
				<Tree data={node.children} allLinks={true} />
			</ul>
		</li>
	);
};

export default Tree;
