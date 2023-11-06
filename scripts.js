window.addEventListener("load", (event) => {
  var form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    var emailAddress = document.getElementById("email").value;

    var message = document.getElementsByClassName("message");

    if (emailAddress === "") {
      message[0].innerText = "Please enter a valid email address.";
      emailAddress = "";
    } else {
      message[0].innerText =
        "Thank you! Your email address " +
        emailAddress +
        " has been added to our mailing list!";
      emailAddress = "";
    }
  });
});
