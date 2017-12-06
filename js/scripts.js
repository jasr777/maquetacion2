var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
      
      

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
        panel.style.display="none";
        aux--;
    } else {
      panel.style.display ="block";
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  } 
}
