async function getRandomJoke(){
    try{
        const response = await fetch("https://icanhazdadjoke.com",{
            headers:{
                'Accept':'application/json'
            }
        });

        if(!response.ok){
            throw new Error(`http error : ${response.status}`);
        }
        console.log(response);
        const data=await response.json();
        console.log(data);
        const jokeContainer = document.getElementById('jokeContainer');
        jokeContainer.innerHTML = data.joke;
    }catch(error){
        console.log(`error fetched ${error}`);
        jokeContainer.innerHTML =`failed to fetch joke due to ${error}`;
    }
}
