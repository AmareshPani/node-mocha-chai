function arr(){
  this.dataStore = [2,4,5];
  this.refactorNull = simpleRefactor;
  this.min = simpleMin;
  this.max = simpleMax;
  this.swap = simpleSwap;
  this.sort = simpleSort;
  this.unshift = simpleUnshift;
  this.pop = simplePop;
}

function simplePop(th) {
  var N = this.dataStore.length;
  //[0,1,2] => [0,1]
  for (var i = N; i >= 0; i--) {
   this.dataStore[i] = this.dataStore[i-1]
  };
  this.dataStore[0] = th;
  console.log(this.dataStore);
  return 101;
}

function simpleUnshift(td) {

  for(var i = this.dataStore.length; i >= 0 ; --i){
    if(i==!this.dataStore.length){
    this.dataStore[i+1] = this.dataStore[i];
   }
  }
  this.dataStore[0] = td;
  console.log(this.dataStore);
}

function simpleSort() {

  for(var i = 0; i < this.dataStore.length; i++){
   var low = this.dataStore[i];
   if(low > this.dataStore[i + 1]){
     this.dataStore[i] = this.dataStore[i + 1];
     this.dataStore[i + 1] = low;
   }
  }

 console.log(this.dataStore);

}

function simpleSwap() {
  for(var i = 0; i < this.dataStore.length; i++){
    this.dataStore[i] = this.dataStore[i + 1];
  }

  console.log(this.dataStore)

}

function simpleRefactor(arr) {
 var arr1 = [];
 var cntr = 0;
 for(var i = 0; i < arr.length; i++){
  if(arr[i] != null){
    arr1[cntr] = arr[i];
    cntr++;
  }
 }

 return arr1;

}

function simpleMin() {
 var min = this.dataStore[0];
 for(var i = 0; i < this.dataStore.length; i++){
   if(min > this.dataStore[i + 1] ){
     min = this.dataStore[i + 1];
   }
 }
 return min;
}

function simpleMax() {
 var max = this.dataStore[0];
 for(var i = 0; i < this.dataStore.length; i++){
   if(max < this.dataStore[i + 1] ){
     min = this.dataStore[i + 1];
   }
 }
 return min;
}

module.exports = arr;
