function AddNewWeField() {
  //console.log("Adding A new file");
   let newNode= document.createElement('textarea');
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",2);
   newNode.setAttribute("placeholder","Enter here");
 
   let WEob= document.getElementById('WE');
   let weAddButtonob= document.getElementById('weAddButton');
 
   WEob.insertBefore(newNode, weAddButtonob);
 }
 //Education and Qualification
 function AddNewEqField() {
    let newNode= document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
  
    let Eqob= document.getElementById('eq');
    let eqAddButtonob= document.getElementById('eqAddButton');
  
    Eqob.insertBefore(newNode, eqAddButtonob);
  }
 
 //Interests And Hobbies
 function AddNewIhField() {
    let newNode= document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("ihField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here");
  
    let Ihob= document.getElementById('ih');
    let ihAddButtonob= document.getElementById('ihAddButton');
  
    Ihob.insertBefore(newNode, ihAddButtonob);
  }
 
  //References
  function AddNewRefField() {
    let newNode= document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("refField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
  
    let refob= document.getElementById('ref');
    let refAddButtonob= document.getElementById('refAddButton');
  
    refob.insertBefore(newNode, refAddButtonob);
  }

//CV generation
function generateCV(){
  //var data = document.getElementById('nameField').value;
  //window.nameT1.href="format1.html?data="+data
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
  let wes = document.getElementsByClassName('weField')
  let str =''
  for(let e of wes)
  {
      str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById('weT').innerHTML = str;

  //academic qualifications
  let aqs = document.getElementsByClassName('eqField')
  let str1 =''
  for(let e of aqs)
  {
      str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById('aqT').innerHTML = str1;

  //hobbies
  let ihs = document.getElementsByClassName('ihField')
  let str2 =''
  for(let e of ihs)
  {
      str2 = str2 + `<li> ${e.value} </li>`;
  }
  document.getElementById('ihT').innerHTML = str2;

  //document.getElementById('cv-form').style.display = 'none'
  //document.getElementById('cv-template').style.display = 'block'
} 

function printCV(){
  window.print();
}