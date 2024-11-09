let promise = new Promise((resoluve , reject)=>{
    resoluve("Hi resoluve ")
})
promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
})