function computerPlay(){
    let words = ['rock', 'paper', 'scissors'];
    let word = words[Math.floor((Math.random() * words.length))];
    return word
}

function playerSelection(){
    var input = window.prompt('Choose: paper,rock or scissors.');
    return input;
}
let start = 0

function playRound(x,y){
    userInput = x;
    computerInput = y;
    
    if (x === y)
    {start}
    else if ((x == 'rock' && y=='paper') || (x == 'paper' && y=='scissors') || (x == 'scissors' && y=='rock'))
    {
    start --}
    else if((x =='rock' && y =='scissors')||(x =='paper' && y =='rock')||(x =='scissors' && y =='paper'))
    {
    start++}
    console.log(userInput,computerInput, start)
    return (start);    
}

function game(rounds){
    let score
    for (let i = 0; i < rounds; i++){
        let x = playRound(playerSelection(),computerPlay())
        score = +x}

    if (score == 0)
    {console.log("draw!")}
    else if (score > 0)
    {console.log("u won badmanting!")}
    else if (score < 0)
    {console.log("bomboclath u lost!")}
    }


game(5)