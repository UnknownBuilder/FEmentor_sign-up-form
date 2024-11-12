const frmElement = document.getElementById("myform");
const frmLastName = document.getElementById("frmLastName");
const frmEmail = document.getElementById("frmEmail");
const frmPass = document.getElementById("frmPass");
const form = document.querySelector("form");
const frmName = document.getElementById("frmName");

console.log(frmEmail);

frmElement.addEventListener("submit", event=>{

    event.preventDefault();
    console.log("hello");
    
});
