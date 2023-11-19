
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function createPost(post) {
    await delay(1000);
    posts.push(post);
  }
  
//   async function updateLastUserActivityTime() {
//     await delay(1000);
//     lastActivityTime = new Date().toISOString();
//     return lastActivityTime;
//   }
  
  async function deletePost() {
    await delay(1000);
    if (posts.length > 0) {
      const deletedPost = posts.pop();
      return deletedPost;
    } else {
      throw new Error("No posts to delete");
    }
  }
  
 
  const posts = [];
  //let lastActivityTime = null;
  

  async function main() {
    try {
    
      await Promise.all([createPost({ title: "Post One", content: "This is the first post" })]);
  
      await Promise.all([createPost({ title: "Post Two", content: "This is the second post" })]);
  
      await Promise.all([createPost({ title: "Post Three", content: "This is the third post" })]);
  
      
    //   const updatedLastActivityTime = await updateLastUserActivityTime();
  
     
    //   console.log("All posts:", posts);
    //   console.log("Last Activity Time:", updatedLastActivityTime);
  
     
      const deletedPost = await deletePost();
      console.log("Deleted Post:", deletedPost);
  
     
      console.log("Remaining Posts:", posts);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  main();
  