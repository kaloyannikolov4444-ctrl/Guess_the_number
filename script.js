let secretNumber = Math.floor(Math.random() * 100) + 1;

function Clicked() {

    let guess = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");
    let checkButton = document.getElementById("checkButton");
    let replayButton = document.getElementById("replay");

    if (guess === secretNumber) {

        result.textContent = "🎉 You found it!";

        checkButton.style.display = "none";
        replayButton.style.display = "block";

    } else if (guess > secretNumber) {

        result.textContent = "⬇️ Too big!";

    } else {

        result.textContent = "⬆️ Too small!";
    }
}

function Replay() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById("guess").value = "";
    document.getElementById("result").textContent = "";

    document.getElementById("checkButton").style.display = "block";
    document.getElementById("replay").style.display = "none";
}