document.addEventListener('DOMContentLoaded', function () {
    const baseURL = "https://v2.jokeapi.dev";
    const jokeContainer = document.getElementById('joke-container');
    const getJokeBtn = document.getElementById('get-joke-btn');
    const jokeTypeSelect = document.getElementById('joke-type');
    const jokeCategorySelect = document.getElementById('joke-category');
  
    getJokeBtn.addEventListener('click', function () {
      const jokeType = jokeTypeSelect.value;
      const jokeCategory = jokeCategorySelect.value;
      fetch(`${baseURL}/joke/${jokeCategory}?type=${jokeType}`)
        .then(response => response.json())
        .then(data => {
          if (jokeType === 'single') {
            jokeContainer.innerHTML = data.joke;
          } else if (jokeType === 'twopart') {
            jokeContainer.innerHTML = `SETUP:=> ${data.setup}<br>PUNCHLINE:=> ${data.delivery}`;
          }
        })
        .catch(error => {
          console.error('Error fetching joke:', error);
          jokeContainer.innerHTML = 'Failed to fetch joke. Please try again later.';
        });
    });
  });
  
  