function register() {
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const address = document.getElementById("address").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !mobile || !email || !address || !password) {
        alert("Please fill all fields");
        return;
    }

    if (password.length < 4) {
        alert("Password must be at least 4 characters");
        return;
    }

    const farmer = {
        name: name,
        mobile: mobile,
        email: email,
        address: address,
        password: password
    };

    localStorage.setItem("farmer", JSON.stringify(farmer));
    localStorage.setItem("registered", "true");
    localStorage.setItem("login", "false");

    alert("Registration Successful");
    window.location.href = "login.html";
}

function login() {
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    const farmerData = localStorage.getItem("farmer");

    if (!farmerData) {
        alert("Please register first");
        window.location.href = "register.html";
        return;
    }

    const farmer = JSON.parse(farmerData);

    if (email === farmer.email && password === farmer.password) {
        localStorage.setItem("login", "true");
        localStorage.setItem("currentFarmer", JSON.stringify(farmer));

        alert("Login Successful");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password");
    }
}

function logout() {
    localStorage.setItem("login", "false");
    localStorage.removeItem("currentFarmer");
    window.location.href = "login.html";
}
