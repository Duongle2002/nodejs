function getUserId(){
    setTimeout(() => {
        let UserId = 10
    }, 0);
    fi(Us)
}

function getPostId(UserId){
    setTimeout(() => {
        return PostId = 111
    }, 0);
}
function getComnent(PostId){
    setTimeout(() => {
        return "sjdhjkdh"
    }, 0);t
}
console.log(getUserId())
// let promise = new Promise((resolve , reject)=>{
//     resolve("Hi resoluve ")
// })

// promise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)



async function abc() {
    let UserId = await getUserId();
    let PostId = await getPostId(UserId);
    let Comment = await getComnent(PostId);
    return Comment;
}

abc().then((data)=>{
    console.log(data);
});

Promise.all([getUserId(), getPostId(), getComnent()].then
    (value)=>{
    console.log("all",value);
})