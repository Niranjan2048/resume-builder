function AddNewWeField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control"); 
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementsById('we');
    let weAddButtonOb = document.getElementsById('weAddButton');

    weOb.insertBefore(newNode,weAddButtonOb);
}

function AddNewEqField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",2);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb = document.getElementsById("eq");
    let aqAddButtonOb = document.getElementsById("eqAddButton");

    aq0b.insertBefore(newNode,aqAddButton0b);
}

function AddNewIhField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ihField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let aqOb = document.getElementsById("ih");
    let aqAddButtonOb = document.getElementsById("ihAddButton");

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
    //instagram
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;
    //linkedin
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;
    //e-mail
    document.getElementById('mailT').innerHTML = document.getElementById('mailField').value;
    //github
    document.getElementById('gitT').innerHTML = document.getElementById('gitField').value;


    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    //work experience
    let we = document.getElementsByClassName('weField')
    let str =''
    for(let e of wes)
    {
        str = str + '<li>${e.value}</li>';
    }
    document.getElementById('weT').innerHTML = str;

    //academic qualifications
    let eq = document.getElementsByClassName('eqField')
    let str1 =''
    for(let e of aqs)
    {
        str1 = str1 + '<li>${e.value}</li>';
    }
    document.getElementById('aqT').innerHTML = str1;

    //hobbies
    let ih = document.getElementsByClassName('ihField')
    let str2 =''
    for(let e of ihs)
    {
        str2 = str2 + '<li>${e.value}</li>';
    }
    document.getElementById('ihT').innerHTML = str2;

    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-template').style.display = 'block'
} 

function printCV(){
    window.print();
}