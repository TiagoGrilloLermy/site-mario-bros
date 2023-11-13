let form = document.querySelector(".contact-us")
let mask = document.querySelector(".mask-form")


    function clickButton(){
        form.style.left = "700px"
        mask.style.visibility = "visible"
    }

    function sumirFormulario(){
        form.style.left = "-320px"
        mask.style.visibility = "hidden"
    }
