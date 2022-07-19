

var form=document.querySelector("form")

var userData=JSON.parse(localStorage.getItem("userData"))
form.addEventListener("submit",function(event){
    event.preventDefault()


var data={
email:form.email.value,
password:form.password.value,
}

if(userData === null)
{
alert("please create an account first")
}
else if(userData.email===data.email && userData.password===data.password)
{
alert(`${userData.name} ,signin successful`)
let signinStatus="true"
localStorage.setItem("signinStatus",JSON.stringify(signinStatus))

}
else{
alert("user does not exist")
}
})
