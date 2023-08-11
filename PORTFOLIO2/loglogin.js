document.getElementById("login-button").addEventListener("click", function () {
  // Simulate a loading animation
  document.getElementById("login-button").innerText = "Logging in...";

  // Simulate a delay for the login process
  setTimeout(function () {
    // Replace this with your actual login logic
    alert("Login successful!");
    document.getElementById("login-button").innerText = "Login";
  }, 2000); // Simulated delay of 2 seconds
});
