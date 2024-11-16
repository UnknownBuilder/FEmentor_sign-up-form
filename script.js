const form = document.getElementById("myform");
const formCluster = document.getElementsByClassName("form-cluster");
const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener("submit", event => {

    event.preventDefault();
    runValidation();
});

function runValidation() {

    let errorCount = 0;

    Array.from(formCluster).forEach( cluster => {

        const inputForm = cluster.querySelector("input");
        const errorImg = cluster.querySelector("img");
        const errorText = cluster.querySelector("div");

        if(inputForm.value == "") {

            inputForm.style.border = "2px solid var(--primary-color-red)";
            errorText.innerHTML = `${inputForm.placeholder} cannot be blank`;
            errorImg.style.display = "inline";
            errorCount += 1;
        };

        if(!re.test(inputForm.value) && inputForm.name == "Email") {

            inputForm.style.border = "2px solid var(--primary-color-red)";
            errorText.innerHTML = "Looks like this is not a valid email";
            errorImg.style.display = "inline";
            errorCount += 1;
        };
    });

    if(errorCount == 0){

        form.submit();
    }
    
    errorCount = 0;
};

form.addEventListener("input", event => {

    const elementTag = event.target
    const validtyState = elementTag.validity.valid;
    const elementArray = Array.from(elementTag.parentElement.children);

    if(validtyState == true){

        elementArray[0].style.border = "1px solid var(--secondary-color-grayish)";
        elementArray[1].style.display = "none";
        elementArray[2].innerHTML = "";
    };
});



