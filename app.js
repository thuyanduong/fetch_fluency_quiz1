const fetch = require('node-fetch');


function getPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json())
  //.then(data => data)
}

function getUsers(){
  return fetch(`https://jsonplaceholder.typicode.com/users/`)
  .then(response => response.json())
  .then(users => users.map(user => user.name))
}

function getAddresses(){
  return fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => users.map(user => `${user.address.street}, ${user.address.suite}, ${user.address.city}`))
}

function shortestPost() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    posts.sort((a, b) => a.body.length - b.body.length)
    return posts[0]
  })
}

function numCompleted() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(todos => {
    return todos.filter(todo => todo.completed).length
  })
}

function searchPosts(searchWord){
  return fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    return posts.filter(post => {
      return post.body.split(" ").includes(searchWord)
    })
  })
}

// document.getElementById("form").addEventListener("submit" ,renderName);
function renderName(e) {
  e.preventDefault()
  fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(response => response.json())
  .then(users => {
    let div = document.querySelector("#info")
    div.innerHTML = ''
    const foundUser = users.find(user => user.name === document.getElementById("full-name").value)
    if(foundUser){
      let table = document.createElement("table")
      let header = document.createElement("tr")
      let row = document.createElement("tr")
      table.append(header)
      table.append(row)
      let headerInnerHTML = ""
      let rowInnerHTML = ""
      for(key in foundUser){
        if(typeof foundUser[key] === "string"){
          headerInnerHTML += `<td>${key}</td>`
        }
      }
      for(key in foundUser){
        if(typeof foundUser[key] === "string"){
          rowInnerHTML += `<td>${foundUser[key]}</td>`
        }
      }
      header.innerHTML = headerInnerHTML
      row.innerHTML = rowInnerHTML
      div.append(table)
    } else {
      div.append("User Not Found")
    }
    document.getElementById("form").reset()
  })
}


module.exports = {
  getPost,
  getUsers,
  getAddresses,
  shortestPost,
  numCompleted,
  searchPosts,
};
