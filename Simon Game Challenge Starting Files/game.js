let gamePattern = [];
let userClickedPattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

let level = 0;
let started = false;

document.addEventListener('keydown', function(event) {
    // game has started
    if (!started) {
        $('#level-title').text(`Level ${level}`);
        nextSequence()
        started = true;
    }
})

$('.btn').click(function() {
    let userChosenColor = $(this).attr('id');

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
})

function nextSequence() {
    level++;
    document.querySelector('h1').textContent = `Level ${level}`;

    // get random number from 0 to 3
    let randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColour) {
    let activeButton = document.querySelector(`.${currentColour}`);
    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 200);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        playSound("wrong");

        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");

        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);


        startOver();
    }

    console.log(userClickedPattern);
    console.log(gamePattern);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}