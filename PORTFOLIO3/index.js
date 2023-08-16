// const darkTheme = function() {
//     document.querySelector("body").style.backgroundColor="black"
//     document.querySelector(".dark-theme").textContent="Light Theme"
//     document.querySelector(".header").style.backgroundColor="#2e282a"
// }
// const lightTheme = function(){
//     document.querySelector("body").style.backgroundColor="white"
//     document.querySelector(".dark-theme").textContent="Dark Theme"
//     document.querySelector(".header").style.backgroundColor="#f86624"
// }
let log =document.getElementById("logbtn")
let loginmodal =document.getElementById("login")
let headerbar=document.getElementsByTagName("header")
let mainbox=document.querySelector("home")

log.onClick=showLogin
function showLogin(){
    headerbar.style.display="none"
    mainbox.style.display="none"
    loginmodal.style.display="block"
}
document.getElementById("closeb").addEventListener('click',hideLogin)
function hideLogin(){
      headerbar.style.display="block"
    mainbox.style.display="block"
    loginmodal.style.display="none"
}