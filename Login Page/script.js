var attempt = 3;

function checkLogin() {

    if (attempt <= 0) {
        return;
    }

    var user = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value.trim();

    var correctUser = "admin";
    var correctPass = "1234";

    var message = document.getElementById("message");
    var attemptsText = document.getElementById("attempts");
    var button = document.getElementById("loginBtn");

    if (user === "" || pass === "") {
        message.innerHTML = "Please enter Username and Password";
        message.style.color = "red";
        return;
    }

    if (user === correctUser && pass === correctPass) {

        message.innerHTML = "Login Successful!";
        message.style.color = "green";
        attemptsText.innerHTML = "";
        button.disabled = true;

    } else {

        attempt--;

        message.innerHTML = "Invalid Username or Password";
        message.style.color = "red";

        if (attempt > 0) {
            attemptsText.innerHTML = "Attempts remaining: " + attempt;
        } else {
            attemptsText.innerHTML = "Attempts remaining: 0";
            button.disabled = true;
            alert("You have used all 3 attempts. Login disabled.");
        }
    }
}