const frmName = document.getElementById("frmName");
const frmLastName = document.getElementById("frmLastName");
const frmEmail = document.getElementById("frmEmail");
const frmPass = document.getElementById("frmPass");
const form = document.querySelector("form");


form.addEventListener("submit", event=> {

   event.preventDefault();

   validateInputs();

});


const validateInputs = () => {

    console.log("made it to validation");

    const nameValue = frmName.value.trim();
    const lastnameValue = frmLastName.value.trim();
    const emailValue = frmEmail.value.trim();
    const passwordValue = frmPass.value.trim();

    if(nameValue === "") {
        setError(frmName, "First Name cannot be empty");
    }

    if(lastnameValue === "") {
        setError(frmLastName, "Last Name cannot be empty");
    }

    if(emailValue === "") {
        setError(frmEmail, "Email cannot be empty");
    }

    if(passwordValue === "") {
        setError(frmPass, "Password cannot be empty");
    }
};


const setError = (element, message) =>{

    const textErrorFirstName = document.getElementById("fname");
    const imgErrorFirstName = document.getElementById("imgFirstName");

    const textErrorLastName = document.getElementById("lname");
    const imgErrorLastName = document.getElementById("imgLastName");

    const textErrorEmail = document.getElementById("email");
    const imgErrorEmail = document.getElementById("imgEmail");

    const textErrorPassword = document.getElementById("password");
    const imgErrorPassword = document.getElementById("imgPassword");

    if(element.name === "firstName"){

        console.log(element.name);
        console.log("made it to message");
        textErrorFirstName.innerText = message;
        textErrorFirstName.style.display ="inline"
        imgErrorFirstName.style.display = "inline"
        element.style.border= "2px solid var(--primary-color-red)"
        element.placeholder = "";

    }

    if(element.name === "lastName"){

        console.log(element.name);
        console.log("made it to message");
        textErrorLastName.innerText = message;
        textErrorLastName.style.display ="inline"
        imgErrorLastName.style.display = "inline"
        element.style.border= "2px solid var(--primary-color-red)"
        element.placeholder = "";
    }

    if(element.name === "Email"){

        console.log(element.name);
        console.log("made it to message");
        textErrorEmail.innerText = message;
        textErrorEmail.style.display ="inline"
        imgErrorEmail.style.display = "inline"
        element.style.border= "2px solid var(--primary-color-red)"
        element.placeholder = "";
    }

    if(element.name === "Password"){

        console.log(element.name);
        console.log("made it to message");
        textErrorPassword.innerText = message;
        textErrorPassword.style.display ="inline"
        imgErrorPassword.style.display = "inline"
        element.style.border= "2px solid var(--primary-color-red)"
        element.placeholder = "";
    }

}



