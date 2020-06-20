//Navbar animation stuff
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById('navMain').style.top = '0';
	} else {
		document.getElementById('navMain').style.top = '-72px';
	}
	prevScrollpos = currentScrollPos;
};

//Snagging from form
document.getElementById("send").addEventListener("click", validateForm);
      function validateForm() {
        //gets the name
        let name = document.getElementById("contact-name").value;
        //gets the email
        let email = document.getElementById("contact-email").value;
        //gets the message
        let message = document.getElementById("contact-message").value;

        //checks if all fields have been filled before sending message.
        if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
          alert("all fields must be filled");
        } else {
          sendMessage(name, email, message);
        }
      }

      //sends information to firebase
      function sendMessage(name, email, message) {
        console.log('sending message');
        //sends the name, email and message by passing them as url parameters
        var myWindow = window.open(
          "https://us-central1-caseycookdev.cloudfunctions.net/sendMail?name=" +
          name +
          "&email=" +
          email +
          "&message=" +
          message +
          "");

          //manual form reset
          document.getElementById("contact-name").value = '';
          document.getElementById("contact-email").value = '';
          document.getElementById("contact-message").value = '';
      }
