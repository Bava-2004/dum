function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const male = document.getElementById('male').checked;
    const female = document.getElementById('female').checked;
    const nosay = document.getElementById('nosay').checked;
    const cpassword = document.getElementById('cpassword').value.trim();

    let isValid = true;

    if (username === '') {
        alert('Username is required.');
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        isValid = false;
    }
    if(cpassword!=password){
        alert('Passwords doesnt match' );
        isValid = false;
    }

    if (!male && !female && !nosay) {
        alert('Please select a gender.');
        isValid = false;
    }
    return isValid;
}