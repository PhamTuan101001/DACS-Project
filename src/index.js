var btnlogin = document.querySelector(".all .header .btnlogin")
var btnsignin = document.querySelector(".all .header .btnsignin")
var modal_login = document.querySelector(".modal_login")
var modal_signin = document.querySelector(".modal_signin")
btnlogin.addEventListener("click", () =>{
    modal_login.classList.toggle("login")
})
btnsignin.addEventListener("click", ()=>{
    modal_signin.classList.toggle("signin")
})