const registerform = document.getElementById("registration-form");
const submitbtn = document.getElementById("submit-btn");


 class user {
    constructor(username, password) {
        this.username = username,
            this.password = password;
    }
}
/* 
registerform.addEventListener("submit", registeruser); */
submitbtn.addEventListener("click", registeruser);

/* const ussrerifr = JSON.parse(localStorage.getItem("userinfo") || []);
ussrerifr.unshift(newusers);
localStorage.setitem("userinfo", JSON.stringify(ussrerifr));
 */

function registeruser(event) {
    event.preventDefault()
    const username = document.getElementById("reg-username-input").value;
    const password = document.getElementById("reg-password-input").value;
    const confrmpassword = document.getElementById("confirm-reg-password-input").value;

    if (password === confrmpassword && username !== "" && password !== "") {

        const newuser = new user(username, password) || [];
        localStorage.setItem("userinfo", JSON.stringify(newuser)) || [];
        window.location.href = "index.html";
    } else {
        alert("password does not match with confirm password")
    }

    /* 
        const newuser = new user(username, password) || [];
        localStorage.setItem("userinfo", JSON.stringify(newuser)) || [];
     */



    console.log(username, password, confrmpassword);
}

