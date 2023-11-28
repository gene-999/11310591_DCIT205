
function showList() {
  var list = document.getElementsByClassName("myList")[0];
   if (list.style.display === "none") { 
    if (window.innerWidth >= 769) {
    list.style.display = "none";     
    } else {
      list.style.display = "block";
    }
  }  else {
    list.style.display = "none";
  } 
   
  }



