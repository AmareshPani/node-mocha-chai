function dict(){
  this.dataStore = [];
  this.insert = simpleInsert;
  this.display = simpleDisplay;
  this.counter = 0;
  this.find = simpleFind;
}

function simpleInsert(key, value) {
  this.dataStore[key] = value;
  this.counter++;
  return this.counter;
}

function simpleDisplay(){
  console.log(this.dataStore);
}

function simpleFind(key) {
  return this.dataStore[key];
}

module.exports = dict;
