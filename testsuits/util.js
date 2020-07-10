const addToNumbers=(x,y)=>{
    if (!!x == false || !!y == false) return x || y;
    return x+y;
}
const multiply=(x,y)=>{
    if(!!x==false|| !!y==false) return x || y;
    return x*y;
}

const concat=(str1,str2)=>{
    if(!str1 || !str2) return str1 || str2;
    return str1+str2;
}

module.exports={
    addToNumbers,multiply,concat
}
