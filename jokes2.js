document.addEventListener('DOMContentLoaded', function() {
    const jokeBtn = document.getElementById('jokeBtn');
    const jokeDisplay = document.getElementById('jokeDisplay');

    jokeBtn.addEventListener('click', function() {
        // Fetching a random joke from an API
        fetch('https://icanhazdadjoke.com/')
            .then(response => response.json()) // Parsing the JSON response
            .then(data => {
                // Displaying the joke on the webpage
                jokeDisplay.textContent = `${data.setup} ==== ${data.punchline}`;
            })
            .catch(error => {
                // Handling errors
                jokeDisplay.textContent = 'Oops! your jokes does not exists😂.';
                console.error('Error fetching joke:', error);
            });
    });
});
