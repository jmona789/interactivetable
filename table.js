var removeRowBtns = document.getElementsByClassName("removeRowBtn");
var tableRows = document.getElementsByTagName("tr");
var table = document.getElementsByTagName("table")[0];

for(var i = 0; i < removeRowBtns.length; i++) {
   removeRowBtns[i].addEventListener("click", function(e) {
      var raw = document.getElementById(e.target.getAttribute("rawLink"));
      raw.parentNode.removeChild(raw);
    });
}

document.getElementById("addRowBtn").addEventListener("click", addRow);

function addRow() {
  var inputsArray = [];

  inputsArray = document.getElementsByClassName("input");

  var row = table.insertRow(document.getElementsByTagName("tr").length - 1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = inputsArray[0].value;
  cell2.innerHTML = inputsArray[1].value;
  cell3.innerHTML = inputsArray[2].value;
  cell4.innerHTML = '<button class="btn btn-danger removeRowBtn" inputtype="button" rawLink="r1" value="Delete">X</button>';
  document.getElementById("firstNameForm").reset();
  document.getElementById("lastNameForm").reset();
  document.getElementById("emailForm").reset();

  /*document.getElementById("newRowFirstName").innerHTML = inputsArray[0].value;
  document.getElementById("newRowLastName").innerHTML = inputsArray[0].value;
  document.getElementById("newRowEmail").innerHTML = inputsArray[0].value;
  document.getElementById("addRowBtn").innerHTML = "X"
  document.getElementById("addRowBtn").className = "btn btn-danger removeRowBtn"*/
  /*for(var i = 0; i < removeRowBtns.length; i++) {
   removeRowBtns[i].addEventListener("click", function(e) {
      var raw = document.getElementById(e.target.getAttribute("rawLink"));
      raw.parentNode.removeChild(raw);
    });
  }
  var row = table.insertRow(document.getElementsByTagName("tr").length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = '<input class="input" placeholder="First Name" type="text" />';
  cell2.innerHTML = '<input class="input" placeholder="Last Name" type="text" />';
  cell3.innerHTML = '<input class="input" placeholder="Email" type="text" />';
  cell4.innerHTML = '<button id="addRowBtn" class="btn btn-primary" inputtype="button" rawLink="r4" value="Add">+</button>';
  //Add Raw link
  /*document.getElementById("addRowBtn").id = "null";
  document.getElementById("newRowFirstName").id ="null";
  document.getElementById("newRowLastName").id ="null";
  document.getElementById("newRowEmail").id ="null";*/
  //document.getElementById("addRowBtn").addEventListener("click", addRow);
}


/*
function deleteRow() {
  var secondsCount = 0;
  if(secondsCount === 0) {
    tableRows[1].parentNode.removeChild(tableRows[1]);
    setTimeout()
  }
}

minus

function setTimeout(3){
  if(secondsCount === 0) {
  //code for agrument that makes function wait that many seconds
  deleteRow();
}

setTimeout()
*/
