var attempt = 3;

function checkLogin() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var correctUser = "admin";
    var correctPass = "1234";

    if(user == correctUser && pass == correctPass) {

        document.getElementById("message").innerHTML = "Login Successful!";
        document.getElementById("message").style.color = "green";

    } else {

        attempt--;

        document.getElementById("message").innerHTML = "Invalid Username or Password";
        document.getElementById("message").style.color = "red";

        document.getElementById("attempts").innerHTML =
            "Attempts remaining: " + attempt;

        if(attempt == 0) {

            document.getElementById("loginBtn").disabled = true;
            alert("You have used all 3 attempts. Login disabled.");
        }
    }
}