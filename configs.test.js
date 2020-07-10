index=0;
//these hooks are scoped to this file only


beforeEach(()=>{
 index++;
 console.log("before each",index);  
 expect(true).toBeTruthy();
})
afterEach(()=>{
//  index--;
  console.log("after each",index);
  expect(true).toBeTruthy();
})
beforeAll(()=>{
 index++;
 console.log("before all",index);
 expect(true).toBeTruthy();

})
afterAll(()=>{
//  index--;
 console.log("after all",index);
 expect(true).toBeTruthy();
})
test("configs",()=>{
     expect(true).toBeTruthy();
})

