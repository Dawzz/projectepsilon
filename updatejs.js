var emailsubmit = document.getElementById("formsubmit");
emailsubmit.onclick = function() {
	var emailinput = document.getElementById("email").value;
	var position = emailinput.indexOf("@");
	var position2 = emailinput.indexOf(".");
	if (emailinput.length <= 2) {
		window.alert("That is not a valid email!");
	}
	else {
		if (position == -1 || position2 == -1) {
			window.alert("That is not a valid email!");
		}
		else {
			window.alert("Thank you for your email!");
			}
		}
	}
}