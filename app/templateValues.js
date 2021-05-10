import print from 'print-js';

document.getElementById("nameT1").innerHTML = localStorage.getItem("name");
document.getElementById("contactT").innerHTML = localStorage.getItem("contact");
document.getElementById("addressT").innerHTML = localStorage.getItem("address");
document.getElementById("mailT").innerHTML = localStorage.getItem("mail");
//document.getElementById("fbT").innerHTML = localStorage.getItem("");
document.getElementById("instaT").innerHTML = localStorage.getItem("insta");
document.getElementById("linkedT").innerHTML = localStorage.getItem("linkedin");
document.getElementById("gitT").innerHTML = localStorage.getItem("github");
document.getElementById("objectiveT").innerHTML = localStorage.getItem("objective");
document.getElementById("weT").innerHTML = localStorage.getItem("work");
document.getElementById("aqT").innerHTML = localStorage.getItem("qualification");
document.getElementById("ihT").innerHTML = localStorage.getItem("hobbie");
document.getElementById("refT").innerHTML = localStorage.getItem("reference");


function printCV()
{
	window.print();
}
// function printCV(){
// 	printJS({
// 		printable: 'cv-template',
// 		type: 'html',
// 		targetStyles: ['*']
// 	  })
//   }