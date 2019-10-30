const buttons = document.querySelectorAll('button');
const getTextButton = buttons[0];
const getJSONButton = buttons[1];
const getAPIButton = buttons[2];

getTextButton.addEventListener('click', getText);
getJSONButton.addEventListener('click', getJSON);
getAPIButton.addEventListener('click', getFromAPI);

// Get local text file data
function getText() {
  fetch('test.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('output').innerHTML = `<p>${data}</p>`;
  })
  .catch(error => console.log(error));
}

// Get local JSON file data
function getJSON() {
  fetch('posts.json')
  .then(response => response.json())
  .then(data => {
    const outputElem = document.getElementById('output');
    let outputData = '';

    outputElem.innerHTML = '<ul></ul>';

    data.forEach(post => {
      outputData += `<li>${post.title}</li>`;
    });

    outputElem.querySelector('ul').innerHTML = outputData;
  })
  .catch(error => console.log(error));
}

// Get from external API
function getFromAPI() {
  fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(data => {
    const outputElem = document.getElementById('output');
    let outputData = '';

    outputElem.innerHTML = '<ul></ul>';

    data.forEach(user => {
      outputData += `<li>${user.login}</li>`;
    });

    outputElem.querySelector('ul').innerHTML = outputData;
  })
  .catch(error => console.log(error));
}