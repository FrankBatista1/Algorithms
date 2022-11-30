const util = require("util");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current) {
        if (current.val > val) {
          current.left ? (current = current.left) : (current.left = newNode);
        } else if (current.val < val) {
          current.right ? (current = current.right) : (current.right = newNode);
        } else if (current.val === val) {
          return newNode;
        }
      }
    }
    return this;
  }
  find(val) {
    let node = this.root;
    while (node) {
      if (node.val > val) {
        node = node.left;
      } else if (node.val < val) {
        node = node.right;
      } else if (node.val === val) {
        return node;
      }
    }
    return null;
  }
}

const newBST = new BinarySearchTree();

newBST.insert(67);
newBST.insert(2);
newBST.insert(23);
newBST.insert(23);
newBST.insert(3);

newBST.find(2);

console.log(util.inspect(newBST, false, null, true));
