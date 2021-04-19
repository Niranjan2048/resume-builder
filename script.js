function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3);
    newNode.setAttribute("placeholder","Enter here");

    let aq0b = document.getElementsById("aq");
    let aqAddButton0b = document.getElementsById("aqAddButton");

    aq0b.insertBefore(newNode,aqAddButton0b);
}

//CV generation
function generateCV(){
    document.getElementById('nameT1').innerHTML = document.getElementById('nameField').value;

    //document.getElementById('nameT2').innerHTML = nameField;

    //contact
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    //address
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

    //facebook
    //document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;

    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;

    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;
}