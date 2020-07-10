

describe("increments the value on every test case",()=>{
    let _index=0;
    beforeEach(()=>{
      _index++;
    })
    test("increment to 1",()=>{
      expect(_index).toBe(1);
    })
    test("increment to 2",()=>{
      expect(_index).toBe(2);
    })
    test("increment to 3",()=>{
      expect(_index).toBe(3);
    })
})


