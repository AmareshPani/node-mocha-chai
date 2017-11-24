"use strict"
function llist(){
  this.head = new node('head');
  this.find = simpleFind;
  this.insert = simpleInsert;
  this.display = simpleDisplay;
}

function node(element){
  this.element = element;
  this.next = null;
}

function simpleFind(item){
 var currNode = this.head;
 while (currNode.element != item){
   currNode = currNode.next;
 }
 return currNode;
}

function simpleInsert(newItem, Item){
  var newNode = new node(newItem);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function simpleDisplay(){
  var currNode = this.head;
  while(!(currNode.next === null)){
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

module.exports = linked;
