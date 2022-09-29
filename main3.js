   fetch(`https://api.chucknorris.io/jokes/random`)
        .then(res => res.json()) //parse response as JSON
        .then(data =>{
            document.querySelector('p').innerText = data.value;
            })
        .catch(err =>{
            console.log(`error ${err}`)
        })