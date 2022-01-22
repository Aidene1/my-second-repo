

//example one


const getAllUserEmails = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData = await response.json()
    const userEmails = userData.map(user => {
        return user.email;
    });
    console.log(userEmails);
}
getAllUserEmails();
 


//example two

 const getDadJoke = async() => {
    const response = await fetch("https://icanhazdadjoke.com/",{
        method: "GET",
        headers:{
            accept:"application/json"
        }
    }
    )
    const dadJokeData = await response.json();
    console.log(dadJokeData);
    
}
getDadJoke();