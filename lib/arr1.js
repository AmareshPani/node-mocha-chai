'use strict';

function arr1(){
  this.ds = [6,3,1,9,50,1200,4,5,6,7];
  this.bsort = simpleBsort;
  this.qsort = simpleQsort;
  this.tq = tq;
}

function tq() {
  console.log(this.qsort(this.ds));
  return 1;
}

function simpleQsort(arr) {
  if(arr.length == 0){
    return [];
  }

  var left = [];
  var right = [];
  var pivot = arr[0];

  for(var i = 1; i < arr.length; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }

 return simpleQsort(left).concat(pivot, simpleQsort(right));

}


function simpleBsort() {
 var swap = 0;

 var swapped;
 do{
  swapped = false;
  for(var i = 0; i < this.ds.length; i++){

    if(this.ds[i] < this.ds[i+1]){
      swap = this.ds[i];
      this.ds[i] = this.ds[i+1];
      this.ds[i+1] = swap;
      swapped = true;
    }

  }
 }while(swapped)

 console.log(this.ds);
 return 1;
}



module.exports = arr1;
