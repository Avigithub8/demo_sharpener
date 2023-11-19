const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
create2ndPost()
.then(deletePost)
.then(deletedPost=>console.log(deletedPost.title))
.then(create3rPost)
.then(deletePost)
.then(deletedPost=>console.log(deletedPost.title))
.then(deletePost)
.then(deletedPost=>console.log(deletedPost.title))
.then(deletePost)
.catch(error =>console.error(error));


// deletePost()
// create3rPost()
// deletePost()
// deletePost()
// deletePost()
