async function myAsyncFunction(id) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments/'+ id    
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data.body)    
}

myAsyncFunction(1)