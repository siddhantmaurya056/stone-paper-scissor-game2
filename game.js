// Get player names

let player1 = localStorage.getItem("player1");
let player2 = localStorage.getItem("player2");


// If names don't exist, go back home

if (!player1 || !player2) {

    window.location.href = "index.html";
}


// Game variables

let score1 = 0;

let score2 = 0;

let round = 1;

let currentPlayer = 1;

let player1Choice = "";

let player2Choice = "";


// Display names

document.getElementById("player1Name").innerText = player1;

document.getElementById("player2Name").innerText = player2;


// Main game function

function chooseMove(choice) {

    // Player 1 turn

    if (currentPlayer === 1) {

        player1Choice = choice;

        currentPlayer = 2;

        document.getElementById("turnText").innerText =
            player2 + "'s Turn";

        document.getElementById("instruction").innerText =
            "Player 1 has selected. Choose your move.";

        document.getElementById("result").innerText =
            "🔒 Player 1 choice locked!";

    }


    // Player 2 turn

    else if (currentPlayer === 2) {

        player2Choice = choice;

        currentPlayer = 0;

        showResult();
    }
}


// Find winner

function showResult() {

    let result = "";

    let winner = 0;


    // Draw

    if (player1Choice === player2Choice) {

        result = "🤝 It's a Draw!";

        winner = 0;
    }


    // Player 1 wins

    else if (

        (player1Choice === "stone" &&
            player2Choice === "scissors") ||

        (player1Choice === "paper" &&
            player2Choice === "stone") ||

        (player1Choice === "scissors" &&
            player2Choice === "paper")
    ) {

        result =
            "🎉 " + player1 + " Wins!";

        winner = 1;

        score1++;
    }


    // Player 2 wins

    else {

        result =
            "🎉 " + player2 + " Wins!";

        winner = 2;

        score2++;
    }


    // Update scores

    document.getElementById("score1").innerText =
        score1;

    document.getElementById("score2").innerText =
        score2;


    // Show result

    document.getElementById("result").innerHTML =

        player1 + " → " +
        getEmoji(player1Choice) +

        "<br>" +

        player2 + " → " +
        getEmoji(player2Choice) +

        "<br><br>" +

        result;


    // Check match winner

    if (score1 === 3 || score2 === 3) {

        showMatchWinner();

        return;
    }


    // Show next round button

    document.getElementById("nextRoundBtn")
        .style.display = "inline-block";

    document.getElementById("turnText")
        .innerText = "Round Complete!";

    document.getElementById("instruction")
        .innerText = "Click Next Round";
}


// Next round

function nextRound() {

    round++;

    currentPlayer = 1;

    player1Choice = "";

    player2Choice = "";


    document.getElementById("round")
        .innerText = "Round " + round;


    document.getElementById("turnText")
        .innerText = player1 + "'s Turn";


    document.getElementById("instruction")
        .innerText = "Choose your move";


    document.getElementById("result")
        .innerText = "Choose your move";


    document.getElementById("nextRoundBtn")
        .style.display = "none";
}


// Match winner

function showMatchWinner() {

    let winnerName;


    if (score1 === 3) {

        winnerName = player1;

    } else {

        winnerName = player2;
    }


    document.getElementById("turnText")
        .innerText = "🏆 GAME OVER";


    document.getElementById("instruction")
        .innerText =
        winnerName + " wins the match!";


    document.getElementById("result").innerHTML =

        "🏆 <strong>" +
        winnerName +
        " is the Champion!</strong>" +

        "<br><br>" +

        player1 +
        ": " +
        score1 +

        " &nbsp; - &nbsp; " +

        player2 +
        ": " +
        score2;


    document.getElementById("nextRoundBtn")
        .style.display = "none";
}


// Emoji function

function getEmoji(choice) {

    if (choice === "stone") {

        return "🪨 Stone";
    }

    if (choice === "paper") {

        return "📄 Paper";
    }

    if (choice === "scissors") {

        return "✂️ Scissors";
    }

    return "";
}


// Go back home

function goHome() {

    localStorage.removeItem("player1");

    localStorage.removeItem("player2");

    window.location.href = "index.html";
}
