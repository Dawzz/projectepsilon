var emailsubmit = document.getElementById("formsubmit");
emailsubmit.onclick = function() {
	var emailinput = document.getElementById("email").value;
	var position = emailinput.indexOf("@");
	var position2 = emailinput.indexOf(".");
	function validateEmail(emailinput) {
		var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		return re.test(emailinput);
	}
		
	if (emailinput.length <= 2) {
		window.alert("That is not a valid email!");
		return false;
	}
	else {
		
		if (validateEmail(emailinput)) {
			window.alert("Thank you for your email!");
		}
		else {
			window.alert("That is not a valid email!");
			return false;
		}
	}
}