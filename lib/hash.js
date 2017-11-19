"use strict"
function hash(){
  this.table = [];
  this.key = simpleKey;
  this.insert = simpleInsert;
  this.hash = simpleHash;
}

function simpleKey(name) {

  for(var key in name){
    var k = name[key];

  }

 return 1;
}

function simpleInsert() {

}

function simpleHash(){
  
}

module.exports = hash;
