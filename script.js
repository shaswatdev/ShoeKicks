document.querySelector('.login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const customerName = document.getElementById('customerName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const notRobot = document.getElementById('notRobot').checked;

    if (customerName && email && password && notRobot) {
        alert("Login successful! Welcome to ShoeKicks.");
    } else {
        alert("Please fill out all fields and verify you are not a robot.");
    }
});
