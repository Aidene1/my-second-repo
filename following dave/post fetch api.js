
 
//lets first look at fetch API

//posting data to an API; method: "POST"


const myJoke = {
    id: 'LRnGeVfiNe', 
    joke: 'Today a man knocked on my door and asked for a sma…local swimming pool. I gave him a glass of water.',
    status:200
};

    const postJoke = async(data) =>{
        const response = await fetch("https://httpbin.org/posts",{
            method: "POST",
            headers:{
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const jsonResponse = await response.json();
        console.log(jsonResponse);

    }
    postJoke(myJoke);