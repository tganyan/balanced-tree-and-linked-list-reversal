'use strict';

const binaryTree = module.exports = {};

binaryTree.calculateHeightHelper = (root) => {
  if (root === null) {
    return -1;
  }
  if (root.left === null && root.right === null) {
    return 0;
  }

  const leftChildHeight = binaryTree.calculateHeightHelper(root.left);
  const rightChildHeight = binaryTree.calculateHeightHelper(root.right);
  const highestValue = Math.max(leftChildHeight, rightChildHeight);
  return highestValue + 1;
};

binaryTree.isTreeBalanced = (root) => {
  if (root.root === null) {
    return undefined;
  }

  const leftHeight = binaryTree.calculateHeightHelper(root.root.left);
  const rightHeight = binaryTree.calculateHeightHelper(root.root.right);

  if (leftHeight >= rightHeight) {
    if (leftHeight - rightHeight === 1 || leftHeight - rightHeight === 0) {
      return true;
    }
    return false;
  }

  if (rightHeight >= leftHeight) {
    if (rightHeight - leftHeight === 1 || rightHeight - leftHeight === 0) {
      return true;
    }
    return false;
  }
  return false;
};
