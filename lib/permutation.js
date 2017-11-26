"use strict"
function perm(){

}

perm.prototype.permutator = function(inputArr){
  var results = [];

  function permute(arr, memo) {
   var cur, memo = memo || [];

   for (var i = 0; i < arr.length; i++) {
    cur = arr.splice(i, 1);
    if (arr.length === 0) {
      results.push(memo.concat(cur));
    }
    permute(arr.slice(), memo.concat(cur));
    arr.splice(i, 0, cur[0]);
   }

  return results;

  // const permutator = (inputArr) => {
  //   let result = [];
  //
  //   const permute = (arr, m = []) => {
  //     if (arr.length === 0) {
  //       result.push(m)
  //     } else {
  //       for (let i = 0; i < arr.length; i++) {
  //         let curr = arr.slice();
  //         let next = curr.splice(i, 1);
  //         permute(curr.slice(), m.concat(next))
  //      }
  //    }
  //  }
  //
  //  permute(inputArr)
  //
  //  return result;
  // }

 }

 return permute(inputArr);
}
