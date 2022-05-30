import Image from "next/image";
import FRCP from "./citator/FRCP";
import Red from "./Red";
import {Graph} from "./enfig/components/Graph/Graph";
import {Network} from "./enfig/components/Network/network";
import {FTree} from "./enfig/components/FTree/FTree";
import ImgStyles from "../styles/image.module.css";
import Standard_of_Review from "./Standard_of_Review";
import PageTitle from "./PageTitle";
import Restatement from "./citator/Restatement/Restatement";
import Box from "./Box";
import Checkbox from "./Checkbox";
import {BinaryTree} from "./enfig/components/BinaryTree/BinaryTree";
import {HTree} from "./enfig/components/HTree/HTree";
import {Matrix} from "./enfig/components/Matrix/Matrix";
import {LinkedList} from "./enfig/components/LinkedList/LinkedList";
import {Plot3D} from "./enfig/components/Plot3D/Plot3D";
import {Sequence} from "./enfig/components/Sequence/Sequence";
import {CircularList} from "./enfig/components/CircularList/CircularList";
import {CircularQueue} from "./enfig/components/CircularQueue/CircularQueue";
import FlowChart from "./FlowChart";
import {DoublyLinkedList} from "./enfig/components/DoublyLinkedList/DoublyLinkedList";
import {Stack} from "./enfig/components/Stack/Stack";
import {Queue} from "./enfig/components/Queue/Queue";
import {Tree} from "./enfig/components/Tree/Tree";
import {Plot} from "./enfig/components/Plot/Plot";
import {TangledTree} from "./enfig/components/TangledTree/TangledTree";
import {BubblePack} from "./enfig/components/BubblePack/BubblePack";
import {HexMap} from "./enfig/components/HexMap/HexMap";
import OR from "./citator/Connectives/OR";
import AND from "./citator/Connectives/AND";
import UNLESS from "./citator/Connectives/UNLESS";
import XOR from "./citator/Connectives/XOR";
import IFF from "./citator/Connectives/IFF";
import IF from "./citator/Connectives/IFF";
import THEN from "./citator/Connectives/THEN";
import UCC from "./citator/UCC";
import USC from "./citator/USC";
import Term from "./Term";
import Float from "./Float/Float";

import Header from "./Header";
const MDXComponents = {
  img: (props) => (
    <div>
      <figure className={ImgStyles.fig}>
        <Image
          {...props}
          alt={props.alt}
          layout="fill"
          objectFit="contain"
          className={ImgStyles.image}
        />
      </figure>
      <figcaption className={ImgStyles.figcaption}>{props.alt}</figcaption>
    </div>
  ),
  Float,
  OR,
  AND,
  UNLESS,
  FTree,
  XOR,
  IFF,
  IF,
  THEN,
  Restatement,
  Graph,
  Network,
  HexMap,
  FRCP,
  USC,
  Red,
  UCC: (props) => <UCC {...props} />,
  Box: (props) => <Box {...props} />,
  h1: (props) => <PageTitle text={props.children} />,
  FlowChart,
  Standard_of_Review,
  del: (props) => <Term text={props.children} />,
  input: (props) => <Checkbox {...props} />,
  BinaryTree: (props) => <BinaryTree {...props} />,
  TangledTree: (props) => <TangledTree {...props} />,
  Plot: (props) => <Plot {...props} />,
  BubblePack,
  Stack: (props) => <Stack {...props} />,
  Queue: (props) => <Queue {...props} />,
  CircularQueue: (props) => <CircularQueue {...props} />,
  DoublyLinkedList: (props) => <DoublyLinkedList {...props} />,
  LinkedList: (props) => <LinkedList {...props} />,
  CircularList: (props) => <CircularList {...props} />,
  HTree: (props) => <HTree {...props} />,
  Tree: (props) => <Tree {...props} />,
  Sequence: (props) => <Sequence {...props} />,
  Plot3D: (props) => <Plot3D {...props} />,
  Matrix: (props) => <Matrix {...props} />,
  Metadata: (props) => (
    <Header
      title={props.title}
      description={props.description}
      keywords={props.keywords}
    />
  ),
};

export default MDXComponents;
