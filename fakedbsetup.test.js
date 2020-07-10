/*
before each test create a file and record timestamp
after each delete that file
*/
// on each test it should test for the timestamp in the file 
// and the timestamp that is weritten to the file stored globally

const fs=require('fs').promises;
let timestamp = "";
beforeEach(()=>{
  timestamp = Date.now();
  return fs.writeFile("temp.txt",timestamp,{encoding:"utf-8"});
});
afterEach(()=>{ 
   timestamp="";
 return fs.unlink("temp.txt");
})
test("should output timestamp",()=>{
    return expect(fs.readFile("temp.txt",{encoding:"utf-8"})).resolves.toEqual(String(timestamp));
})
