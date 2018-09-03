window.onload = function() {

	// get the button and assign it to variable submit
	var submit = document.getElementById("submitButton");


	// when the user clicked the button
	submit.onclick = function() {
		// get all of the users input and assign it to the variables
		// for the Personal Info

		var name = document.getElementById("nameInfo").value;
		var age = document.getElementById("ageInfo").value;
		var contact = document.getElementById("contactNo").value;
		var position = document.getElementById("forPosition");
		// for the option in the dropDown menu of position
		var positionValue = position.options[position.selectedIndex].text;

		// for the salary report

		var hours = document.getElementById("hoursInfo").value;
		var rate = document.getElementById("rateInfo").value;
		var bonus = document.getElementById("bonusInfo").value;
		var overTime = document.getElementById("overtimeInfo").value;

		// convert the strings to int

		var hoursInt = parseInt(hours);
		var rateInt = parseInt(rate);
		var bonusInt = parseInt(bonus);
		var OTInt = parseInt(overTime);

		// for the computation

		var salary = (hoursInt * rateInt) + bonusInt;
		var hoursInWork = hoursInt + OTInt;

		// for the printing
		// Personal Info

		document.getElementById("resultName").innerHTML = name;
		document.getElementById("resultAge").innerHTML = age;
		document.getElementById("resultContact").innerHTML = contact;
		document.getElementById("resultPosition").innerHTML = positionValue;

		// salary report
		document.getElementById("resultSalary").innerHTML = salary;
		document.getElementById("resultTotalWork").innerHTML = hoursInWork;
		document.getElementById("resultBonus").innerHTML = bonusInt;
		document.getElementById("resultOvertime").innerHTML = OTInt;

	}

}