// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';


function appendar(data) {
    const h2 = document.getElementById('jokeContainer');
    h2.innerText = data.joke;
    appendChild(h2);
}
   

const fetchJoke = () => {
  fetch(API_URL,{ method: 'GET', headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data => appendar(data));
};

window.onload = () => fetchJoke();