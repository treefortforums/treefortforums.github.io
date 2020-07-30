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

//validation for creator registration page
function registerCheck() {
	var user = ["undies", "audiogen", "j ruth", "meliai", "tumbling.dice"]  //test array
	var uname = document.forms["register"]["userName"].value;  //Treefort Username entry
	var uname = uname.toLowerCase();
	var i = 0;
    for (i; i <= user.length; i++) {  //checks inputted username against names in array
		if (uname == user[i]) {
			return true;
		} else if (i >= user.length) {	//these lines alert to the error and focus attention on the input area where the error occurred
			alert ("Please enter a valid username");
			document.forms["register"]["userName"].parentNode.className = "form-group has-error";  
			document.forms["register"]["userName"].focus();
			event.preventDefault();  //stops from submitting if there is error.  may not be needed with your code changes
		}	
	}
}