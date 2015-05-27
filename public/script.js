function lookupPID(){
	
    var pid = document.getElementById("PID_form");

    if (pid.elements[0]) {
    	alert(pid.elements[0].value);
    }

}

