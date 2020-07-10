const {addToNumbers,multiply,concat} =require('./util');


test('should add two numbers', () => {
    const res=addToNumbers(1,2);
    expect(res).toBe(3);
});
test('should add two numbers', () => {
    const res=addToNumbers(null,2);
    expect(res).toBe(2);
});
test('should add two numbers', () => {
    const res=addToNumbers(1);
    expect(res).toBe(1);
});

test("should multiply two numbers", () => {
    const res=multiply(5,10);
    expect(res).toBe(50);
});
test("should multiply two numbers", () => {
    const res=multiply(5);
    console.log("debug",res);
    expect(res).toBe(5);
});

test("should concat two string",()=>{
    const res=concat("hello","world");
    expect(res).toBe("helloworld");
})
test("should concat two string, first arg is null",()=>{
    const res=concat(null,"hello");
    expect(res).toBe("hello");
})
test("should concat two string, second arg is null",()=>{
    const res = concat("hello", null);
    expect(res).toBe("hello");
})
test("should concat two string, second arg is undefined",()=>{
    const res = concat("hello");
    expect(res).toBe("hello");
})