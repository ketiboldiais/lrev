import dynamic from "next/dynamic";
import flowchartstyles from "../styles/flowchart.module.css";

const Graphviz = dynamic(() => import("graphviz-react"), { ssr: false });

const FlowChart = ({
	data,
	height = 150,
	width = 150,
	type = "digraph",
	nodeShape = "plain",
	nodeHeight=0.4,
	nodeWidth=0.4,
	rankdir = "TB",
	orientation="portrait",
	engine = "dot",
}) => {
	// const dot = data;
	return (
		<figure className="flowchart">
			<Graphviz
				options={{
					className: "flowchart",
					width: height,
					height: width,
					zoom: false,
					useWorker: false,
					engine: engine,
					fit: true,
				}}
				dot={`
					${type} {
						rankdir=${rankdir}
						node[shape=${nodeShape},height=${nodeHeight},width=${nodeWidth}]
							${data}
					}
				`}
			/>
		</figure>
	);
};

export default FlowChart;
