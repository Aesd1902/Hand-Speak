function signup() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (name && email && password) {
        localStorage.setItem("user", JSON.stringify({ name, email, password }));
        alert("Signup successful! Please login.");
        window.location.href = "login.html";
    } else {
        alert("Please fill in all fields.");
    }
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
        localStorage.setItem("loggedInUser", user.name);
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password.");
    }
}

function displayUser() {
    const userName = localStorage.getItem("loggedInUser");
    if (userName) {
        document.getElementById("welcomeMessage").innerText = `Welcome ${userName}!`;
    } else {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
}