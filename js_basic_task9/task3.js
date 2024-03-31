function getPostById(postId) {
    return fetch('https://jsonplaceholder.typicode.com/todos/' + postId)
}
getPostById(2)
.then(response => response.json())
.then(data => console.log(data))

