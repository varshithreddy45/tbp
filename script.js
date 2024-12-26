// Mock credentials
const mockUsername = "varshith";
const mockPassword = "6111";

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Validate credentials
    if (username === mockUsername && password === mockPassword) {
        // Redirect to welcome page
        window.location.href = "dashboard.html";
    } else {
        // Show error message
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.display = "block";
    }
});
