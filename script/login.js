// Add Event handler to Login Button
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("account-number").value;
    const pin = document.getElementById("pin").value;

    if (accountNumber.length === 11 && parseInt(accountNumber) === 1847982121) {
      if (pin.length === 4 && parseInt(pin) === 1122) {
         window.location.href = "./main.html";
         // window.location.replace("./main.html");
      } else {
         alert("Please Enter Correct PIN Number!");
      }
    } else {
      alert("Please Enter Correct Account Number!");
    }
  });
