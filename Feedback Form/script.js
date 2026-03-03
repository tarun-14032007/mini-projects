function validateForm() {

    var name = document.getElementById("name").value;
    var reg = document.getElementById("regno").value;
    var course = document.getElementById("course").value;
    var comments = document.getElementById("comments").value;
    var rating = document.getElementsByName("rating");

    var ratingSelected = false;

    clearErrors();

    if(name == "") {
        document.getElementById("nameError").innerHTML = "Enter name";
        document.getElementById("name").focus();
        return;
    }

    if(reg == "") {
        document.getElementById("regError").innerHTML = "Enter register number";
        document.getElementById("regno").focus();
        return;
    }

    if(course == "") {
        document.getElementById("courseError").innerHTML = "Select course";
        document.getElementById("course").focus();
        return;
    }

    for(var i = 0; i < rating.length; i++) {
        if(rating[i].checked) {
            ratingSelected = true;
        }
    }

    if(!ratingSelected) {
        document.getElementById("ratingError").innerHTML = "Select rating";
        rating[0].focus();
        return;
    }

    if(comments == "") {
        document.getElementById("commentError").innerHTML = "Enter comments";
        document.getElementById("comments").focus();
        return;
    }

    document.getElementById("successMessage").innerHTML = 
        "Feedback submitted successfully!";
}

function clearErrors() {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("regError").innerHTML = "";
    document.getElementById("courseError").innerHTML = "";
    document.getElementById("ratingError").innerHTML = "";
    document.getElementById("commentError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";
}