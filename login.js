let Emails = [
    { user: "menna@gmail.com", password: "12345678" },
    { user: "sama@gmail.com", password: "142536789" },
    { user: "omar@gmail.com", password: "87654321" },
    { user: "mariam@gmail.com", password: "01022969" },
    { user: "sara@gmail.com", password: "01015555" },
];

let login = document.getElementById("username");
let pass = document.getElementById("password");
let form = document.getElementById("form");

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    let isValid = false;

    for (let i = 0; i < Emails.length; i++) {
        if (login.value === Emails[i].user && pass.value === Emails[i].password) {
            isValid = true;
            break; 
        }
    }

    if (isValid) {
        window.location.href = "main.html";
    } else {
        alert("Invalid username or password");
    }
});
