// JavaScript for form validation on the login page

// Wait for the DOM content to be loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {
        // Get form fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const robotCheck = document.getElementById("not-robot").checked;

        // Validate fields
        if (!name || !email || !password || !robotCheck) {
            alert("Please fill in all fields and verify that you are not a robot.");
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            alert("Login successful!");
        }
    });
});
