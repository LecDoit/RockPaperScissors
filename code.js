function computerPlay(){
    let words = ['rock', 'paper', 'scissors'];
    let word = words[Math.floor((Math.random() * words.length))];
    console.log(word)
    y = word
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
    
    const containter = document.querySelector('.result');
    const content = document.createElement('p');
    content.textContent = (userInput,computerInput, start);
    // containter.appendChild(content);


    if (x === y)
    {start}
    else if ((x == 'rock' && y=='paper') || (x == 'paper' && y=='scissors') || (x == 'scissors' && y=='rock'))
    {
    start --}
    else if((x =='rock' && y =='scissors')||(x =='paper' && y =='rock')||(x =='scissors' && y =='paper'))
    {
    start++}
    console.log(userInput,computerInput, start)

    const content2 = document.createElement('p1');
    content2.textContent = start
    containter.appendChild(content2);
    return (start);    
}





const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissor = document.querySelector(".Scissor");

function returnRock(){
    console.log("rock")

    return "rock"}

function returnPaper(){
    console.log("paper")
    return "paper"}

function returnSci(){
    console.log("scissors")
    return "scissors"}


// rock.addEventListener('click',returnRock);
paper.addEventListener('click',function(){
    return playRound(returnPaper(),computerPlay());
});
scissor.addEventListener('click',function(){
    return playRound(returnSci(),computerPlay());
});
rock.addEventListener('click',function(){
    return playRound(returnRock(),computerPlay());
});
// rock.addEventListener('click',computerPlay);





// function game(rounds){
//     let score
//     for (let i = 0; i < rounds; i++){
//         let x = playRound(playerSelection(),computerPlay())
//         score = +x}

//     if (score == 0)
//     {console.log("draw!")}
//     else if (score > 0)
//     {console.log("u won badmanting!")}
//     else if (score < 0)
//     {console.log("bomboclath u lost!")}
//     }
// game(5)