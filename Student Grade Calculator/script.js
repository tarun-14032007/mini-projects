function calculateGrade() {

    var s1 = parseFloat(document.getElementById("m1").value);
    var s2 = parseFloat(document.getElementById("m2").value);
    var s3 = parseFloat(document.getElementById("m3").value);
    var s4 = parseFloat(document.getElementById("m4").value);
    var s5 = parseFloat(document.getElementById("m5").value);

    if(isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4) || isNaN(s5)) {
        alert("Please enter all marks!");
        return;
    }

    if(s1>100 || s2>100 || s3>100 || s4>100 || s5>100 ||
       s1<0 || s2<0 || s3<0 || s4<0 || s5<0) {
        alert("Marks must be between 0 and 100 only!");
        return;
    }

    var total = s1+s2+s3+s4+s5;
    var avg = total/5;
    var grade;
    var gradeColor;

    if(avg >= 75){
        grade="Distinction";
        gradeColor="green";
    }
    else if(avg >= 60){
        grade="First Class";
        gradeColor="blue";
    }
    else if(avg >= 50){
        grade="Pass";
        gradeColor="orange";
    }
    else{
        grade="Fail";
        gradeColor="red";
    }

    document.getElementById("total").innerHTML=total;
    document.getElementById("average").innerHTML=avg.toFixed(2);
    document.getElementById("grade").innerHTML=grade;
    document.getElementById("grade").style.color=gradeColor;
}

function resetForm(){
    document.getElementById("m1").value="";
    document.getElementById("m2").value="";
    document.getElementById("m3").value="";
    document.getElementById("m4").value="";
    document.getElementById("m5").value="";

    document.getElementById("total").innerHTML="-";
    document.getElementById("average").innerHTML="-";
    document.getElementById("grade").innerHTML="-";

    document.getElementById("grade").style.color="black";
}

function hoverEffect(){
    document.getElementById("calcBtn").style.background="#1e3c72";
}

function removeHover(){
    document.getElementById("calcBtn").style.background="#2a5298";
}