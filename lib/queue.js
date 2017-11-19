function queue(){
 this.arrq = [];
 this.enqueue = simpleEnqueue;
 this.dequeue = simpleDequeue;
}

function simpleEnqueue(obj){
 this.arrq[this.arrq.length] = obj;
 return obj;
}

function simpleDequeue(obj){
 for(var i = 0; i < this.arrq.length; i++){
  if( obj === this.arrq[i]){
    this.arrq[i] = null;
    break;
  }
 }
// refactor
for(var i = 0; i < this.arrq.length; i++){
 this.arrq[i] = this.arrq[i + 1];
}

}

module.exports = queue;
