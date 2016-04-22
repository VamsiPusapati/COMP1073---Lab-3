"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    if (document.getElementById("aboutPage") != null) {
        console.log("About Page");
		var about;
		about = document.getElementById("about");
		document.getElementById("about").innerHTML = "I Create & Design the Websites by the process of collecting ideas,and implementing them,guided by certain principles for a specific purpose.Web design is a similar process of creation,with the intention to create the Websites which usually includes a concerted focus on performance, aesthetics, user experience and interaction, social media engagement and web presence optimization for presenting the content on electronic web pages.";

    } else if (document.getElementById("projectsPage") != null) {
        console.log("Projects Page");
		var info;
		info = document.getElementById("info");
		document.getElementById("info").innerHTML = "As a Fresher, I dont have any of my projects to show up online.So I would like to show my recent Project which I Built as a mini Project in the college using my Design skills which I gained in the previous semester.";
    
	} else if (document.getElementById("connectPage") != null) {
        console.log("Connect Page");
        //declare variables and create a reference to form elements
        var name = document.getElementById("name");
		var email = document.getElementById("email");
        var message = document.getElementById("message");
        var submitButton = document.getElementById("submitButton");
        submitButton.pre


        submitButton.addEventListener("click", function (event) {
            event.preventDefault();
			console.log("Name: " + name.value);
            console.log("Email: " + email.value);
            console.log("Message: " + message.value);
        });


    } // end else if
	
})();

