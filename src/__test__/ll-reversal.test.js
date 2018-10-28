'use strict';

const listReversal = require('../ll-reversal');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty!');
    }

    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }

      currentNode = currentNode.next;
    }
    return null;
  }

  remove(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty!');
    }

    if (this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

const practiceList = new LinkedList();


for (let i = 0; i < 6; i++) {
  practiceList.insertAtHead(`${i}`);
}


describe('#balanced-tree.js', () => {
  test('expect to return reverse list', () => {
    const arrayMethod = listReversal.listReverseArray(practiceList);
    expect(console.log(arrayMethod)).toEqual(1);
  });
  test('expect to return false when tree is unbalanced', () => {
    const arrayMethod = listReversal.listReverseRecursion(practiceList);
    expect(arrayMethod).toEqual(1);
  });
  test('expect to return undefined if tree is empty', () => {
    const arrayMethod = listReversal.listReverseString(practiceList);
    expect(console.log(arrayMethod)).toEqual(1);
  });
});
