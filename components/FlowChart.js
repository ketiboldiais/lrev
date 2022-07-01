import dynamic from "next/dynamic";
import flowchartstyles from "../styles/flowchart.module.css";

const Graphviz = dynamic(() => import("graphviz-react"), {ssr: false});

const FlowChart = ({
  data,
  height = 300,
  width = 300,
  type = "digraph",
  className = "flowchart",
  nodeShape = "plain",
  nodeHeight = 0.4,
  nodeWidth = 0.4,
  rankdir = "TB",
  engine = "dot",
}) => {
  // const dot = data;
  return (
    <figure className="flowchart">
      <Graphviz
        options={{
          className: className,
          // width: width,
          // height: height,
          zoom: false,
          fit: true,
          useWorker: false,
          engine: engine,
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
