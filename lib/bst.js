"use strict"
function node(value){
  this.value = value;
  this.left  = null;
  this.right = null;
}

function bst(){
  this.root = null;
  //this.insert = null;
}

node.prototype.left = function(value) {
  this.left = new node(value);
  return this.left;
}

node.prototype.right = function(value){
  this.right = new node(value);
  return this.right;
}

node.prototype.show = function(){
  return this.value;
}

bst.prototype.insert = function(value){
  var n = new node(value);
  if(this.root === null){
    this.root = n;
  }else{
    var current = this.root;
    var parent;
    while(true){
      parent = current;
      if(value < current.value){
        current = current.left;
        if ( current === null){
          parent.left = n;
          break;
        }
      }else{
        current = current.right;
        if(current === null){
          parent.right = n;
          break;
        }
      }

    }

  }
}

bst.prototype.inOrder = function(node){
  if(!(node === null)){
    this.inOrder(node.left);
    console.log(node.show() + " ");
    this.inOrder(node.right);
  }
}

module.exports = bst;
