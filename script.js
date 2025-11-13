async function getPosts(route) {
  const res = await fetch(`https://dummyjson.com/posts/${route}`);
  const response = await res.json();
  console.log(response);
}

getPosts(1);
