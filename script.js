function startGame() {

    let player1 = document.getElementById("player1").value.trim();
    let player2 = document.getElementById("player2").value.trim();

    let error = document.getElementById("error");


    // Check Player 1 name
    if (player1 === "") {

        error.innerText = "Please enter Player 1 name.";

        return;
    }


    // Check Player 2 name
    if (player2 === "") {

        error.innerText = "Please enter Player 2 name.";

        return;
    }


    // Same names check
    if (player1.toLowerCase() === player2.toLowerCase()) {

        error.innerText = "Players ke names different hone chahiye.";

        return;
    }


    // Save names
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);


    // Start game
    window.location.href = "game.html";
}
