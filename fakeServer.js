class Server{
    constructor(){
        this.data=[];
    }
    get(index) {
        return new Promise((resolve,reject)=>{
            if(index>=this.data.length){
                reject(new Error("not found"));
            }
            setTimeout(()=>{
              resolve(this.data[index])
            },2000)
        })
    }
    put(data){
       return new Promise((resolve,reject)=>{
           setTimeout(()=>{
               this.data[this.data.length] = {
                   data,
                   timestamp:Date.now()
               };
               resolve(this.data[this.data.length-1]);
           },2000)
       })
    }
    delete(index){
        return new Promise((resolve,reject)=>{
            if(index>=this.data.length){
                reject(new Error("not found"));
            }
            setTimeout(()=>{
                this.data.splice(index,1);
                resolve("done")
            },2000)
        })
    }
}

module.exports={Server};
