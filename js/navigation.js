function toggleMenu() 
{
    var element = document.getElementById("topnav");
    if (element.className === "navcontainer centertext") {
        element.className += " responsive";
    } else {
        element.className = "navcontainer centertext";
    }
}