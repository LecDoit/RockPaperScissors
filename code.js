function computerPlay(){
    let words = ['rock', 'paper', 'scissors'];
    let word = words[Math.floor((Math.random() * words.length))];
    return word
}

function playerSelection(){
    var input = window.prompt('Choose: paper,rock or scissors.')
    return input
}

function play(x,y){
    userInput = x
    computerInput = y
    let start = 0
    if (x === y)
    { console.log("draw")}
    else if ((x == 'rock' && y=='paper') || (x == 'paper' && y=='scissors') || (x == 'scissors' && y=='rock'))
    {console.log("u loose!")
    start --}
    else if((x =='rock' && y =='scissors')||(x =='paper' && y =='rock')||(x =='scissors' && y =='paper'))
    {console.log("u won badman!")
    start++}
    console.log(userInput,computerInput, start)
    return ((userInput,computerInput, start))

}

play(playerSelection(),computerPlay())

