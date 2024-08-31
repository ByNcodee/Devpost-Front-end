function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

var toggled_menu = document.getElementById("toggled_menu_container");

toggled_menu.style.display = "none";


function toggle_navigation() {
 
 
 if(toggled_menu.style.display == "block")
 {
 	enableScrolling()
 	toggled_menu.style.display = "none";

 }
 else {

 	toggled_menu.style.display = "block";
 	disableScrolling()
 }


}