//mockfunctions gives more info about their execution like noofcalls

const mapReduce=jest.fn(x=>x+1);

const fancyForLoop=(items,cb)=>{
    for(item of items){
        cb(item);
    }
}

fancyForLoop([1,2,3],mapReduce);

test("no of calls should be 3",()=>{
    expect(mapReduce.mock.calls.length).toBe(3);
})

//[call_index][arg_index]
test("first arg of first call  should be 1",()=>{ 
    expect(mapReduce.mock.calls[0][0]).toBe(1);
})
test("result of 1 st call should be 2",()=>{
    expect(mapReduce.mock.results[0].value).toBe(2);
})




