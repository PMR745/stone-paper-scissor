var stoneimg = './stone.jpg'
var img = document.createElement('img');
var img2 = document.createElement('img');
var user = document.getElementsByClassName('user')[0];
var user_input = document.getElementsByClassName('user_input')[0];
var comp_input = document.getElementsByClassName('comp_input')[0];
var comp = document.getElementsByClassName('comp')[0];
var stone = document.getElementById('stone');
var paper = document.getElementById('paper');
var scissor = document.getElementById('scissor');
var usersc = document.getElementsByClassName('usersc')[0];
var compsc = document.getElementsByClassName('compsc')[0];
var win_music = new Audio("win.mp3");
var score_music = new Audio("score.wav");
var cscore_music = new Audio("compscore.wav");
var loss_music = new Audio("loss.wav");
var arr = ["stone.jpg", "paper.jpg", "scissor.jpg"];
var user_score = 0;
var comp_score = 0;

const options = [
    {
        id: "stone",
        url: './stone.jpg'
    },
    {
        id: "paper",
        url: './paper.jpg',
    },
    {
        id: "scissor",
        url: './scissor.jpg',
    }
]


stone.addEventListener('click', () => {
    img.src = stoneimg;
    repeat_code();

})

paper.addEventListener('click', () => {
    img.src = "paper.jpg";
    repeat_code();
})

scissor.addEventListener('click', () => {
    img.src = "scissor.jpg";
    repeat_code();

})

function comp_play() {

    var arrtell = options[Math.floor(Math.random() * arr.length)];
    img2.src = arrtell.url;
    comp_input.appendChild(img2);

}

function get_final_index(url) {
    let array_url = url.split("/");
    return array_url[array_url.length - 1];
}

function game() {
    // console.log(img.src == './stone.jpg', img.src, img2.src, img.src == stoneimg && img2.src === "file:///P:/Coding/HTML,%20CSS%20&%20Javascript/Projects/Stone%20Paper%20Scisor/paperc.jpg");
    let user_choice = get_final_index(img.src);
    let comp_choice = get_final_index(img2.src);


    if (user_choice === get_final_index(options[0].url) && comp_choice === get_final_index(options[1].url)) {
        console.log("computer wins");
        cscore_music.play();
        comp_score++;
    }

    if (user_choice === get_final_index(options[0].url) && comp_choice === get_final_index(options[2].url)) {
        score_music.play();
        user_score++;
    }


    if (user_choice === get_final_index(options[1].url) && comp_choice === get_final_index(options[2].url)) {
        cscore_music.play();
        comp_score++;
    }
    if (user_choice === get_final_index(options[1].url) && comp_choice === get_final_index(options[0].url)) {
        score_music.play();
        user_score++;
    }



    if (user_choice === get_final_index(options[2].url) && comp_choice === get_final_index(options[0].url)) {
        cscore_music.play();
        comp_score++;
    }
    if (user_choice === get_final_index(options[2].url) && comp_choice === get_final_index(options[1].url)) {
        user_score++;
        score_music.play();
    }

    compsc.innerHTML = "Score: " + comp_score;
    usersc.innerHTML = "Score: " + user_score;



}

function logic() {
    if (comp_score === 10 || user_score === 10) {
        console.log("win");

        if (comp_score === 10) {
            loss_music.play();
            score_music.pause();
            cscore_music.pause();
            setTimeout(() => {
                alert("You Lost!");
                location.reload();
            }, 1200);


        }
        if (user_score === 10) {
            win_music.play();
            score_music.pause();
            cscore_music.pause();
            setTimeout(() => {
                alert("You Won!");
                location.reload();
            }, 3000);

        }
    }


}


function repeat_code() {
    user_input.appendChild(img);
    cscore_music.pause();
    score_music.pause();
    comp_play();
    game();
    logic();
}