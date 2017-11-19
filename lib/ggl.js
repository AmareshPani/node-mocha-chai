"use strict"

function ggl(){
  this.ds = ['Z','B','K','A','K'];
  this.ocr = simpleOcr;
  this.dict = dictionary;
  this.dobj = [];
  this.fact = [9,9,9]; // [56, 140, 40, 70]
  this.fct = simpleFct;
  this.addn = simpleAddn;
}

function simpleAddn() {
  var N = this.fact.length;
  this.fact[N-1] = this.fact[N-1] + 1;
  console.log(this.fact);
  return 1;
}


function simpleFct() {
 var facto = 1;
 var result = [];
 for(var i = 0; i < this.fact.length; i++){

  for(var j = 0; j < this.fact.length; j++){
    if(this.fact[i] === this.fact[j]){
    }else{
      facto = facto * this.fact[j]
    }
  }
  result[result.length] = facto;

  facto = 1;
 }
 console.log(result);
}

function simpleOcr() {
 for(var i = 0; i < this.ds.length; i++){
  if(this.dict(this.ds[i], 1) === true){
    return this.ds[i];
  }
 }
}

function dictionary(key,value) {
  var found = false;
  if(this.dobj[key] === undefined){
    this.dobj[key] = value;
  }else{
    this.dobj[key] = value + 1;
    found = true;
  }

 return found;

}

module.exports = ggl;
