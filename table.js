var removeRowBtns = document.getElementsByClassName("removeRowBtn")
var tableRows = document.getElementsByTagName("tr")

for(var i = 0; i < removeRowBtns.length; i++) {
   removeRowBtns[i].addEventListener("click", function(e) {
      var raw = document.getElementById(e.target.getAttribute("rawLink"));
      raw.parentNode.removeChild(raw);
    });
}

