const assert = require('chai').assert;
//const app = require('../app').myq;
const mq = require('../app').myq;
//const dict = require('../app').dict;

describe('App', function(){
  // it('App should return test1', function(){
  //   assert.equal( app.enqueue('test1'), 'test1')
  // });
  //
  // it('App should return test2', function(){
  //   assert.equal( app.enqueue('test2'), 'test2')
  // });
  //
  // it('App should return array length', function(){
  //   assert.equal( app.arrq.length, 2)
  // });
   // it('App should return ', function(){
   //   assert.equal( arr.refactorNull([2,3,null,5,7,8]), [2,3,5])
   // });

    // it('App should return 1 entry', function(){
    //   assert.equal( arr.min(), 1)
    // });

    it('App should return 1 entry', function(){
      assert.equal( mq.enqueue('pani'), 'pani')
    });


})
