

var form=document.querySelector("form")

form.addEventListener("submit",function(event){

    event.preventDefault()


var data={

    email:form.email.value,
    name:form.name.value,
    password:form.password.value,
}

localStorage.setItem("userData",JSON.stringify(data))

})
