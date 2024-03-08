let userPassword;

do {
    userPassword = prompt("Enter password: ");
    
    if (userPassword.length < 8) {
        console.log("Password must be at least 8 characters long. Please try again.");
    }
} while (userPassword.length < 8);

if (userPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
    console.log("Strong Password");
} else if (userPassword.match(/^(?=.*[a-z])|(?=.*[A-Z])/)) {
    console.log("Weak Password");
} else {
    console.log("Very Weak Password");
}
