const buttonElement = document.getElementById('more')

async function loadData() {
  const response = await fetch('https://api.github.com/users');

  const users = await response.json()
  
  const title = document.createElement('h1')

  const text = document.createTextNode(users.length)
  title.appendChild(text);
  
  buttonElement.appendChild(title);

  return users;
}

loadData()