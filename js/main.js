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

    // alert("You clicked on link!")
}
const fName = document.getElementById("fName")
const lName = document.getElementById("lName")
const form = document.getElementById("form")
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log(`Name: ${fName.value}`)
    console.log(lName.value)
} )