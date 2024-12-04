let random_img = ["rock", "paper", "scissors"];

let start_btn = document.querySelector(".start_btn");
let triplets = document.querySelector(".triplets");
let triplet = document.querySelectorAll(".triplet");

start_btn.addEventListener("click", startGame);

function startGame(){
    visibileTriplets();
}

function visibileTriplets(){
    triplets.style.visibility = "visible";
}

const userImg = document.getElementById('user-img');

triplet.forEach(content => {
    content.addEventListener('click', () => {

        const img = content.querySelector('img');
        const part = img.src.indexOf("images/") ;
        const path = img.src.substring(part);

        userImg.src = path;
        userImg.style.visibility  = "visible";
        triplets.style.visibility = "hidden";
        computerRandom();
        computeScores();
        
    })
})

const computerImg = document.getElementById("computer-img");

function randomValue(){
    return random_img[Math.floor(Math.random() * random_img.length)];
}

function computerRandom(){
    computerImg.src = "images/" + randomValue() + ".png";
    computerImg.style.visibility = "visible";
}

const user_score = document.getElementById("u_score");
const computer_score = document.getElementById("c_score");

const incrementUserBy = (value) => {
    let curr_score = parseInt(user_score.innerText, 10);
    user_score.innerText = curr_score + value;
}

const incrementComputerBy = (value) => {
    let curr_score = parseInt(computer_score.innerText, 10);
    computer_score.innerText = curr_score + value;
}

function computeScores(){
    if( userImg.getAttribute("src") ===  computerImg.getAttribute("src")){
        user_score;
        computer_score;
    }
    else if((userImg.getAttribute("src") === "images/rock.png" && computerImg.getAttribute("src") === "images/scissors.png") || (userImg.getAttribute("src") === "images/paper.png" && computerImg.getAttribute("src") === "images/rock.png") || (userImg.getAttribute("src") === "images/scissors.png" && computerImg.getAttribute("src") === "images/paper.png")){
        incrementUserBy(1);
        incrementCounterBy(1);

    }
    else if((userImg.getAttribute("src") === "images/rock.png" && computerImg.getAttribute("src") === "images/paper.png") || (userImg.getAttribute("src") === "images/paper.png" && computerImg.getAttribute("src") === "images/scissors.png") || (userImg.getAttribute("src") === "images/scissors.png" && computerImg.getAttribute("src") === "images/rock.png")){
        incrementComputerBy(1);
        incrementCounterBy(1);
    }
    endGame();
}

function endGame(){

    if((computer_score.innerText == 3)) {
        start_btn.disabled = true;
        computerImg.src = "";
        computerImg.style.cssText = "background-image: url(https://media.giphy.com/media/F3r1GthXl008utMOxP/giphy.gif)";
        computerImg.style.backgroundSize = "contain";
        computerImg.style.visibility = "visible";

        userImg.src = "";
        userImg.style.cssText = "background-image: url(https://media.giphy.com/media/jWcypagX0tNtiup1pg/giphy.gif)";
        userImg.style.backgroundSize = "contain";
        userImg.style.visibility = "visible";
        restartBtn();
      
    }
    else if( (user_score.innerText == 3)){

        start_btn.disabled = true;
        computerImg.src = "";
        computerImg.style.cssText = "background-image: url(https://media.giphy.com/media/jWcypagX0tNtiup1pg/giphy.gif)";
        computerImg.style.backgroundSize = "contain";
        computerImg.style.visibility = "visible";

        userImg.src = "";
        userImg.style.cssText = "background-image: url(https://media.giphy.com/media/F3r1GthXl008utMOxP/giphy.gif)";
        userImg.style.backgroundSize = "contain";
        userImg.style.visibility = "visible";
        
        restartBtn();
    }

}

const round = document.getElementById("round");
    
const incrementCounterBy = (value) =>{
    let curr_count = parseInt(round.innerText, 10)
    round.innerText= curr_count + value; 
}

function restartBtn(){
    start_btn.innerText = "Restart";
    start_btn.disabled = false;
}

