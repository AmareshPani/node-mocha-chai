--> npm install
--> set your method in test/appTest.js
--> npm run test
-------- Example ------------
--- hash.enqueue takes 'pani' and returns 'pani' if not test fails
it('App should return 1 entry', function(){
  assert.equal( hash.enqueue('pani'), 'pani')
});


---------- Step to push to git
Install Git-plus
==> ctrl + shift + p (search)
==> search git-plus => git init
==> git add
==> git add + commit (add comment, ctrl + s)
==> crrl + shift + p
==> git run <- enter
==> before this (create the repo from git and copy the url then>>)
==> remote add origin https://github.com/AmareshPani/node-mocha-chai.git (remove git from front)
