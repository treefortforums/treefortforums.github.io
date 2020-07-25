function donorCheck() {
	var user = ["undies", "audiogen", "j ruth", "meliai", "tumbling.dice"]
	var dname = document.forms["info"]["donorName"].value;
	var dname = dname.toLowerCase();
	var i = 0;
    for (i; i <= user.length; i++) {
		if (dname == user[i]) {
			return true;
		} else if (i >= user.length) {	
			alert ("Please enter a valid username");
			document.forms["info"]["donorName"].parentNode.className = "form-group has-error";
			document.forms["info"]["donorName"].focus();
			event.preventDefault();
		}	
	}
}

function recipCheck() {
	var user = ["undies", "audiogen", "j ruth", "meliai", "tumbling.dice"]
	var rname = document.forms["info"]["recipName"].value;
	var rname = rname.toLowerCase();
	var i = 0;
    for (i; i <= user.length; i++) {
		if (rname == user[i]) {
			return true;
		} else if (i >= user.length) {	
			alert ("Please enter a valid username");
			document.forms["info"]["recipName"].parentNode.className = "form-group has-error";
			document.forms["info"]["recipName"].focus();
			event.preventDefault();
		}	
	}
}

function nameCheck() {
	var name = ["music", "art", "photography", "poetry"]
	var pname = document.forms["info"]["post"].value;
	var pname = pname.toLowerCase();
	var i = 0;
    for (i; i <= name.length; i++) {
		if (pname == name[i]) {
			return true;
		} else if (i >= name.length) {	
			alert ("Please enter a valid post name");
			document.forms["info"]["post"].parentNode.className = "form-group has-error";
			document.forms["info"]["post"].focus();
			event.preventDefault();
		}	
	}
}