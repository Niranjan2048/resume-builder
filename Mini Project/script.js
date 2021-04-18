//Work experience
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
 
   let Eqob= document.getElementById('Eq');
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
 
   let Ihob= document.getElementById('Ih');
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