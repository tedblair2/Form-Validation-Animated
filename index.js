const form=document.querySelector("form"),
eField=form.querySelector(".email"),
eInput=eField.querySelector("input"),
eError=eField.querySelector(".error-txt"),
pField=form.querySelector(".password"),
pInput=pField.querySelector("input"),
pError=pField.querySelector(".error-txt")

form.onsubmit=(e)=>{
    e.preventDefault()
    if(eInput.value==""){
        eError.innerHTML="Email cannot be blank"
        eField.classList.add("shake","error")
    }else{
        checkEmail()
    }
    if(pInput.value==""){
        pField.innerHTML="Password cannot be blank"
        pField.classList.add("shake","error")
    }

    setTimeout(()=>{
        eField.classList.remove("shake")
        pField.classList.remove("shake")
    },500)

    eInput.onkeyup =()=>{
        checkEmail()
    }
    pInput.onkeyup =()=>{
        if(pInput.value=="" || pInput.value.length<6){
            pError.innerHTML="Password has to have at least 6 characters"
            pField.classList.add("error")
        }else{
            pField.classList.remove("error")
        }
    }

    if(!eField.classList.contains("error") && !pField.classList.contains("error")){
        console.log("Form submitted")
    }
}
const checkEmail=()=>{
    let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(!eInput.value.match(pattern)){
        eError.innerHTML=(eInput.value=="") ?"Email cannot be blank" : "Enter valid Email"
        eField.classList.add("error")
    }else{
        eField.classList.remove("error")
    }
}