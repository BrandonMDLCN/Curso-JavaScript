
let getUser = function getUsers(){
    fetch('https://gomezmig03.github.io/MotivationalAPI/en.json')
    .then(response => {
        return response.json();
    })
    .then(phrase => {
        let random = randomIntegero(0, phrase.length);
        console.log(random)
        return phrase[random];
    })
    .then(phraseNum =>{
        console.log(phraseNum)
    })
    .catch(error=>{
        console.log('Error fetching users:',error)
    });
}

getUser()

let randomIntegero = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
}