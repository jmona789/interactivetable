var removeRowBtns = document.getElementsByClassName("removeRowBtn")
var tableRows = document.getElementsByTagName("tr")

for(var i = 0; i < removeRowBtns.length; i++) {
removeRowBtns[i].addEventListener("click", function() {
  tableRows[i].parentNode.removeChild(tableRows[i]);
    });
}