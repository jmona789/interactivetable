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

  document.getElementById("newRowFirstName").innerHTML = inputsArray[0].value;
  document.getElementById("newRowLastName").innerHTML = inputsArray[0].value;
  document.getElementById("newRowEmail").innerHTML = inputsArray[0].value;
  document.getElementById("addRowBtn").innerHTML = "X"
  document.getElementById("addRowBtn").className = "btn btn-danger removeRowBtn"
  for(var i = 0; i < removeRowBtns.length; i++) {
   removeRowBtns[i].addEventListener("click", function(e) {
      var raw = document.getElementById(e.target.getAttribute("rawLink"));
      raw.parentNode.removeChild(raw);
    });
  }
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = '<input class="input" placeholder="First Name" type="text" />';
  cell2.innerHTML = '<input class="input" placeholder="Last Name" type="text" />';
  cell3.innerHTML = '<input class="input" placeholder="Email" type="text" />';
  cell4.innerHTML = '<button class="btn btn-primary removeRowBtn" inputtype="button" value="Delete">+</button>';
  //Add Raw link
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
