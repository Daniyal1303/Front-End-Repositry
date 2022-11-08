const jokeEl = document.getElementById('joke');
const get_joke= document.getElementById('get_joke');

get_joke.addEventListener('click' , generateJoke);

generateJoke();

async function generateJoke() {
     //Call the Icanhaz API
     const jokeRes = await fetch('https://icanhazdadjoke.com/', {
          headers: {
               accept:'application/json'
          }
     });
    
     const joke = await jokeRes.json();

     console.log(joke);
 
     //Set Random Joke
     jokeEl.innerHTML = joke.joke;
}