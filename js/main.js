console.log("this is the first code in javascript")
var  mdisplay = true;
function myFunction(){
    const element = document.getElementById("ptag");
    // console.log(element);
    if(mdisplay)
    {
        element.style.display = "none";
        mdisplay = false;
    }else{
        element.style.display = "block";
        mdisplay = true;
    }
    alert("You clicked on link!")
}