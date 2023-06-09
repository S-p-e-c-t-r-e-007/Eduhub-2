const registerform = document.getElementById("registration-form");
const submitbtn = document.getElementById("submit-btn");


class user {
    constructor(username, password) {
        this.username = username,
            this.password = password;
    }
}
/* 
submitbtn.addEventListener("click", registeruser); */




function registeruser(event) {
    event.preventDefault()
    const username = document.getElementById("reg-username-input").value;
    const password = document.getElementById("reg-password-input").value;
    const confrmpassword = document.getElementById("confirm-reg-password-input").value;


    if (password === confrmpassword) {

        const newuser = new user(username, password) || [];
        localStorage.setItem("userinfo", JSON.stringify(newuser)) || [];
        window.location.href = "index.html";
    } else {
        alert("password does not match with confirm password")
    }
    console.log(username, password, confrmpassword);
}



const loginform = document.getElementById("login-form");
loginform.addEventListener("submit", loginfunc);
 
function loginfunc(e) {
    e.preventDefault()

    const username = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;

    authusr = JSON.parse(localStorage.getItem("userinfo", user));

    if (username === authusr.username && password === authusr.password) {
        window.location.href = "homepage.html"
    } else {
        alert("check username and password!")
    }


    console.log(authusr.password);
}

