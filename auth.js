function register() {
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const address = document.getElementById("address").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !mobile || !email || !address || !password) {
        alert("Please fill all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    const user = {
        name: name,
        mobile: mobile,
        email: email,
        address: address,
        password: password
    };

    localStorage.setItem("farmerUser", JSON.stringify(user));
    localStorage.setItem("farmerName", name);

    alert("Registration successful!");

    window.location.href = "login.html";
}


function login() {
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }

    const savedUser = localStorage.getItem("farmerUser");

    if (!savedUser) {
        alert("Please register first.");
        return;
    }

    const user = JSON.parse(savedUser);

    if (email === user.email && password === user.password) {

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("farmerName", user.name);

        window.location.href = "dashboard.html";

    } else {
        alert("Invalid email or password.");
    }
}


function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}


function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}