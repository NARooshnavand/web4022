console.log("this is the first code in javascript")
var  mdisplay = true;
function myFunction(){
    const element = document.getElementById("ptag");
    const mybox = document.getElementById("mybox");
    // console.log(element);
    if(mdisplay)
    {
        element.style.display = "none";
        mdisplay = false;
    }else{
        element.style.display = "block";
        mdisplay = true;
    }
    mybox.style.left = "300px";

    alert("You clicked on link!")
}