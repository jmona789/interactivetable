var removeRowBtns = document.getElementsByClassName("removeRowBtn");
var tableRows = document.getElementsByTagName("tr");
var table = document.getElementsByTagName("table")[0];
var newRowNum = 4

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

  var newRow = table.insertRow(document.getElementsByTagName("tr").length - 1);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  cell1.innerHTML = inputsArray[0].value;
  cell2.innerHTML = inputsArray[1].value;
  cell3.innerHTML = inputsArray[2].value;
  cell4.innerHTML = '<button class="btn btn-danger removeRowBtn" inputtype="button" rawLink="r'+newRowNum+'" value="Delete">X</button>';
  document.getElementById("firstNameForm").reset();
  document.getElementById("lastNameForm").reset();
  document.getElementById("emailForm").reset();
  var removeRowBtns = document.getElementsByClassName("removeRowBtn");
  for(var i = 0; i < removeRowBtns.length; i++) {
   removeRowBtns[i].addEventListener("click", function(e) {
      var raw = document.getElementById(e.target.getAttribute("rawLink"));
      raw.parentNode.removeChild(raw);
    });
  }
  newRow.id = "r" + newRowNum
  newRowNum += 1

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
