document.getElementById('button').addEventListener('click', function (){
    document.getElementById('button').innerText = 'get another quote';

    function fetchSimpsonsQuotesJSON() {
        const url = `https://simpsons-quotes-api.herokuapp.com/quotes/`;
        fetch(url)
          .then(function(response) {
            return response.json();
            
          })
          .then(function(simpson) {
            console.log('data decoded from JSON:', simpson);
      
            // Build a block of HTML
            const simpsonsHtml = `
              <p><strong>"${simpson[0].quote}"</strong></p>
              <p><strong>By: ${simpson[0].character}</strong></p>
              <img src="${simpson[0].image}" />
            `;
            document.querySelector('#simpsons').innerHTML = simpsonsHtml;
          });
      }
      
     fetchSimpsonsQuotesJSON();
})

