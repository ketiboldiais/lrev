import {isObjectLiteral} from "../../utils/isObjectLiteral/isObjectLiteral";

export const generateNodes = (data, edges) => {
  let nodes = {};
  let _source, _target;
  edges.forEach(function (link) {
    if (isObjectLiteral(link.source)) {
      _source = {id: link.source.id, ...link.source};
    } else {
      _source = {id: link.source};
    }
    if (isObjectLiteral(link.target)) {
      _target = {id: link.target.id, ...link.target};
    } else {
      _target = {id: link.target};
    }
    link.source = nodes[link.source] || (nodes[link.source] = _source);
    link.target = nodes[link.target] || (nodes[link.target] = _target);
  });
  data.forEach(function (element) {
    if (element.link.length === 1) {
      nodes[element.link[0]] = {
        id: element.link[0],
      };
    }
  });
  return nodes;
};
