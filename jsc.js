function calculateTotal() {
    var sub1 = parseInt(document.getElementById("SUBJECT1").value) || 0;
    var sub2 = parseInt(document.getElementById("SUBJECT2").value) || 0;
    var sub3 = parseInt(document.getElementById("SUBJECT3").value) || 0;
    var sub4 = parseInt(document.getElementById("SUBJECT4").value) || 0;
    var sub5 = parseInt(document.getElementById("SUBJECT5").value) || 0;

    if (isValidMark(sub1) && isValidMark(sub2) && isValidMark(sub3) && isValidMark(sub4) && isValidMark(sub5)) {
        return sub1 + sub2 + sub3 + sub4 + sub5;
    } else {
        alert("Marks should be between 1 and 100.");
        return 0;
    }
}

function isValidMark(mark) {
    return mark >= 1 && mark <= 100;
}

function calculateAverage(total) {
    return total / 5;
}

function calculateGrade(average) {
    var sub1 = parseInt(document.getElementById("SUBJECT1").value) || 0;
    var sub2 = parseInt(document.getElementById("SUBJECT2").value) || 0;
    var sub3 = parseInt(document.getElementById("SUBJECT3").value) || 0;
    var sub4 = parseInt(document.getElementById("SUBJECT4").value) || 0;
    var sub5 = parseInt(document.getElementById("SUBJECT5").value) || 0;

    if (isValidMark(sub1) && isValidMark(sub2) && isValidMark(sub3) && isValidMark(sub4) && isValidMark(sub5)) {
        if (sub1 >= 35 && sub2 >= 35 && sub3 >= 35 && sub4 >= 35 && sub5 >= 35) {
            if (average >= 90 && average <= 100) {
                return "A+";
            } else if (average >= 80 && average < 90) {
                return "A";
            } else if (average >= 75 && average < 80) {
                return "B+";
            } else if (average >= 70 && average < 75) {
                return "B";
            } else if (average >= 65 && average < 70) {
                return "C+";
            } else if (average >= 60 && average < 65) {
                return "D+";
            } else {
                return "D";
            }
        } else {
            return "RA";
        }
    } else {
        alert("Marks should be between 1 and 100.");
        return "Invalid";
    }
}


function total() {
    var totalMarks = calculateTotal();
    document.getElementById("total").innerHTML = "Total marks: " + totalMarks;
}

function average() {
    var totalMarks = calculateTotal();
    if (totalMarks > 0) {
        var ave = calculateAverage(totalMarks);
        document.getElementById("average").innerHTML = "Your average marks are: " + ave.toFixed(2);
    }
}

function grade() {
    var totalMarks = calculateTotal();
    if (totalMarks > 0) {
        var ave = calculateAverage(totalMarks);
        var grade = calculateGrade(ave);
        document.getElementById("grade").innerHTML = "Your grade is: " + grade;
    }
}


function login(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "admin" && password === "password") {
        // Successful login
        document.getElementById("loginError").innerHTML = "";
        document.querySelector(".login-container").style.display = "none"; 
        document.getElementById("main").style.display = "block"; 
        document.getElementById("result").style.display = "block"; 
    } else {
       
        document.getElementById("loginError").innerHTML = "Invalid username or password";
    }
}

document.getElementById("loginForm").addEventListener("submit", login);


document.querySelector('.btn1').addEventListener('click', function() {
    if (isLoggedIn()) {
        total();
    }
});
document.querySelector('.btn2').addEventListener('click', function() {
    if (isLoggedIn()) {
        average();
    }
});
document.querySelector('.btn3').addEventListener('click', function() {
    if (isLoggedIn()) {
        grade();
    }
});

function isLoggedIn() {
    var mainElement = document.getElementById("main");
    return mainElement.style.display === "block";
}
