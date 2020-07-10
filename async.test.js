const {Server}=require("./fakeServer");
const fakeServer=new Server();

const fs = require('fs').promises;


test("it should throw error on get data",()=>{
    return expect(fakeServer.get(0)).rejects.toThrow("not found");
}) 
test("it should put data and return the uploaded server data",()=>{
    return expect(fakeServer.put(0)).resolves.toMatchObject({data:0})
}) 

test("it should put data and return",async ()=>{
  const data = await fakeServer.put(110);
  expect(data).toMatchObject({data:110});
})

test("it should throw an error on deleting a non valid indexed data",()=>{
    return expect(fakeServer.delete(9)).rejects.toThrow("not found");
})

test("get the data with id 0",()=>{
  return expect(fakeServer.get(0)).resolves.toMatchObject({data:0});
})


//testing file system actions

test("should check a existence of directory",async ()=>{
    //create a file and check in dir
    // await fs.mkdir("tempdir");
    return expect(fs.readdir(".")).resolves.not.toContain("tempdir");
})


