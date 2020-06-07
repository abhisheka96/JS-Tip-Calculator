
//calculate the tip

function calculateTip(){
	var billAmt = document.getElementById("billamt").value;
	var serviceQual = document.getElementById("service-qual").value;
	var numOfPeople = document.getElementById("peopleamt").value;

	// validate inputs

	if (billAmt === "" || serviceQual == 0 || numOfPeople == 0) {
		alert("Please enter the values");
		return false;
	}

	//check to see if this input is empty or less than or equal to 1
 
  	if (numOfPeople === "" || numOfPeople <= 1) {
    	numOfPeople = 1;
    	document.getElementById("each").style.display = "none";
  		}
  		else {
    	document.getElementById("each").style.display = "block";
  	}

  	//calculating tip

  	var total = (billAmt * serviceQual) / numOfPeople;
  	//round to two decimal places
  	total = Math.round(total*100) / 100;
  	//next line allows us to have 2 digits afetr the decimal
  	total = total.toFixed(2);

  	//display the tip

  	document.getElementById("total-tip").style.display = "block";
  	document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";