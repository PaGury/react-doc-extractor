'use strict';

const _ = require('lodash');
const babel = require('babel-core');
const recast = require('recast');

const convertCommentsNodes = (commentsNodes) => {
  return _(commentsNodes).map((c) => _(c.value.split('\n')).map((c) => c.trim()).filter((c) => c !== '*' && c !== '').value()).flatten().value();
};

const isReactCreateClassCall = (path) => {
  const node = path.value;
  if (_.get(node, 'callee.object.name') === 'React' && _.get(node, 'callee.property.name') === 'createClass') {
    return true;
  }

  return false;
};

const extractComponentProperties = (path) => {
  let properties = [];

  recast.visit(path.value, {
    visitProperty(path) {
      if (path.value.key.name === 'propTypes') {
        recast.visit(path.value.value, {
          visitProperty(path) {
            properties.push({
              key: path.value.key.name,
              type: recast.print(path.value.value).code,
              comments: convertCommentsNodes(path.value.comments)
            });

            return false;
          }
        });
      }

      return false;
    }
  });

  return properties
};

const salut = () => {
  let a = "";
  a = "";
  a = "";
  a = "";
  a = "";
  a = "";
  a = "";
  a = "";
  a = "";
  a = "";
  a = "";
  a = "";

};

const extractNewComponent = (path) => {
  return {
    comments: convertCommentsNodes(path.parentPath.value.comments),
    properties: extractComponentProperties(path)
  };
};

const extract = (code) => {
  const ast = recast.parse(code, {
    esprima: babel
  });

  let components = [];
  recast.visit(ast, {
    visitCallExpression(path) {
      if (isReactCreateClassCall(path)) {
        components.push(extractNewComponent(path));
      }

      this.traverse(path);
    }
  });

  return components;
};

module.exports = {
  extract: extract
}