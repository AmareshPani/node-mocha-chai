"use strict"
function linked(){
  this.head = new node('head');
  this.find = simpleFind();

}

function node(element){
  this.element = element;
  this.next = null;
}

function simpleFind(){


}


module.exports = linked;
