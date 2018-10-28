'use strict';

const listReversal = module.exports = {};

listReversal.listReverseArray = (list) => {
  const arrayStorage = [];
  let currentNode = list.head;

  if (!list.head) {
    throw new Error('The list is empty');
  }

  while (currentNode.next) {
    arrayStorage.push(currentNode);
    currentNode = currentNode.next;
  }

  list.insertAtHead(arrayStorage[arrayStorage.length - 1]);
  currentNode = list.head;

  for (let i = arrayStorage.length - 2; i > 0; i--) {
    currentNode.next = arrayStorage[i];
    currentNode = currentNode.next;
  }

  return list;
};

listReversal.listReverseRecursion = (list) => {
  const arrayStorage = [];
  let currentNode = list.head;

  if (!list.head) {
    throw new Error('The list is empty');
  }

  (function fillArray(node) {
    let theNode = node;
    arrayStorage.push(node);
    if (theNode.next) {
      theNode = theNode.next;
      fillArray(theNode);
    }
  }(currentNode));

  const arrayIndex = arrayStorage.length - 2;
  list.insertAtHead(arrayStorage[arrayIndex]);
  currentNode = list.head;

  (function rePopulateList(node, startIndex) {
    let index = startIndex;
    index -= 1;
    let theNode = node;
    if (theNode.next) {
      theNode.next = arrayStorage[index];
      theNode = theNode.next;
    }
  }(currentNode, arrayIndex));

  return list;
};

listReversal.listReverseString = (list) => {
  let listString = '';
  let currentNode = list.head;

  if (!list.head) {
    throw new Error('The list is empty');
  }

  while (currentNode.next) {
    listString += currentNode.value;
    currentNode = currentNode.next;
  }
  list.insertAtHead(listString[listString.length - 1]);
  currentNode = list.head;

  for (let i = listString.length - 2; i >= 0; i--) {
    currentNode.next.value = listString[i];
    currentNode = currentNode.next;
  }

  return list;
};
