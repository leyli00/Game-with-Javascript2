let nine_map = new Map([
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9]
])


const zero = 0;

let tens_arr = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];


let startBtn = document.querySelector(".start-btn");
let gamePage = document.querySelector(".game-page");
let startPage = document.querySelector(".start-page");
let inputs = document.querySelectorAll(".answer");

startBtn.addEventListener("click", getGamePage);

function getGamePage(){
    startPage.style.visibility = "hidden"
    gamePage.style.visibility = "visible";
}

let randomDigit = Math.ceil(Math.random()*6);
let digitMult = Math.pow(10, randomDigit-1);

function randomNumber(){
    let rndNumber = (digitMult * Math.ceil(Math.random() * 9)) + (Math.ceil(Math.random() * digitMult));
    console.log("Eleman: " + rndNumber);
    return rndNumber;
}

function repeatRnd(number, results = []){
    const randomValue = randomNumber(number);
    results.push(randomValue);

    if(number > 1){
        repeatRnd(number - 1, results);
    }

    return results;
}

function convertQuestionText(){
    let question = result[1];
    console.log(question);

    let digits = question.toString().split('');
    let realDigits = digits.map(Number);
    console.log(realDigits.length);

    // if(realDigits.length == 6){
    //     nine_map.values() = realDigits[5];
    //     console.log("hi")
    // }
    

}

const result = repeatRnd(4);
convertQuestionText();
console.log(nine_map.values());












