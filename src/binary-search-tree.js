const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    const addNode = (node, data) => {
      if (!node) {
        return new Node(data);
      }
  
      if (data === node.data) {
        return node;
      }
  
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data)
      }
      return node;
    }

    this.rootNode = addNode(this.rootNode, data);
  }

  has(data) {
    const searchNode = (node, data) => {
      if (!node) {
        return false;
      }
  
      if (data === node.data) {
        return true;
      }

      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }

    return searchNode(this.rootNode, data);
  }

  find(data) {
    const findNode = (node, data) => {
      if (!node) {
        return null;
      }
  
      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }

    return findNode(this.rootNode, data);
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    const findMin = node => {
      if (!node) {
        return null;
      }

      if (!node.left) {
        return node.data;
      }

      if (node.left) {
        return findMin(node.left);
      }
    }

    return findMin(this.rootNode);
  }

  max() {
    const findMax = node => {
      if (!node) {
        return null;
      }
  
      if (!node.right) {
        return node.data;
      }

      if (node.right) {
        return findMax(node.right);
      }
    }

    return findMax(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree
};