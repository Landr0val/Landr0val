let input = document.getElementById("welcome");
let input2 = document.querySelector(".query");

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      let url = "https://www.startpage.com/rvd/search?query="+input2.value;
      window.open(url);
      input.value = ""
    }
  }); 