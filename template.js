document.getElementById("nameT1").innerHTML = localStorage.getItem("name");
document.getElementById("nameT2").innerHTML = localStorage.getItem("name");
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

document.getElementById("skill1").innerhtml = localStorage.getItem("skill1");
var skill1per = localStorage.getItem("skillper1");
var skill1_val.style.width=skill1per*2.5+'px';

document.getElementById("skill2").innerhtml = localStorage.getItem("skill2");
var skill2per = localStorage.getItem("skillper2");
var skill2_val.style.width=skill2per*2.5+'px';

document.getElementById("skill3").innerhtml = localStorage.getItem("skill3");
var skill3per = localStorage.getItem("skillper3");
var skill3_val.style.width=skill3per*2.5+'px';

document.getElementById("skill4").innerhtml = localStorage.getItem("skill4");
var skill4per = localStorage.getItem("skillper4");
var skill4_val.style.width=skill4per*2.5+'px';