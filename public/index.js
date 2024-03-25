// Function to show the popup form
function showPopup() {
    document.getElementById("popupForm").style.display = "block";
}

// Function to handle form submission
function handleSubmit() {
    // Get the values entered by the user
    var firstName = document.getElementById("firstNameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    // Print the entered data to the console
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Password: " + password);

    // Close the popup form
    document.getElementById("popupForm").style.display = "none";
    
    // Prevent the default form submission behavior
    return false;
}