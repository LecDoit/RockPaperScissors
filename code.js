function computerPlay(){
    let words = ['rock', 'papper', 'scissors'];
    let word = words[Math.floor((Math.random() * words.length))];
    console.log(word)
    return (word)
}

function playerSelection(){
    var input = window.prompt('Choose: paper,rock or scissors.')
    console.log(input)
    return input
}