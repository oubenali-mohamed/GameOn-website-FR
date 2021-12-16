function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}

const formValid = document.getElementById('button')
formValid.addEventListener('click', function (e) {
  e.preventDefault()

  let nameRegex = /^[a-zA-Z][a-zéèç]/

  let prenom = document.getElementById('first').value
  let erreurPrenom = document.getElementById('erreurPrenom')
  if (!nameRegex.test(prenom)) {
    erreurPrenom.innerHTML =
      'Veuillez entrer 2 caractères ou plus pour le champ du prénom '
  } else {
    erreurPrenom.style.display = 'none'
  }

  let nom = document.getElementById('last').value
  let erreurNom = document.getElementById('erreurNom')
  if (!nameRegex.test(nom)) {
    erreurNom.innerHTML =
      'Veuillez entrer 2 caractères ou plus pour le champ du nom '
  } else {
    erreurNom.style.display = 'none'
  }

  let email = document.getElementById('email').value
  let emailRegex = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z]+[.]{1}[a-z]{2,10}$/
  let erreurEmail = document.getElementById('erreurEmail')
  if (!emailRegex.test(email)) {
    erreurEmail.innerHTML = ' Veuiilez entrer une adresse email valide'
  } else {
    erreurEmail.style.display = 'none'
  }

  let birthdate = document.getElementById('birthdate').value
  let erreurDate = document.getElementById('erreurDate')
  if (!birthdate) {
    erreurDate.innerHTML = 'Vous devez entrer votre date de naissance'
  } else {
    erreurDate.style.display = 'none'
  }

  let quantity = document.getElementById('quantity').value
  let quantityRegex = /^[0-9]{1,2}$/
  let erreurQuantity = document.getElementById('erreurQuantity')
  if (!quantityRegex.test(quantity)) {
    erreurQuantity.innerHTML = 'Veuillez saisir une valeur entre 0 et 99'
  } else {
    erreurQuantity.style.display = 'none'
  }

  let location = document.getElementsByName('location')
  //console.log(location)
  for (i = 0; i < location.length; i++) {
    if (!location[i].checked) {
      document.getElementById('erreurVille').innerHTML =
        'veuillez coher une case'
    } else {
      document.getElementById('erreurVille').style.display = 'none'
    }
  }

  let condition = document.getElementById('checkbox1').checked
  let erreurCondition = document.getElementById('erreurCondition')
  if (!condition) {
    erreurCondition.innerHTML =
      "veuillez accepter les conditions d'utilisations"
  } else {
    erreurCondition.style.display = 'none'
  }

  if (
    prenom &&
    nom &&
    email &&
    birthdate &&
    quantity &&
    location &&
    condition
  ) {
    document.getElementById('formulaire').innerHTML =
      'Merci ! Votre réservation a été reçue.'
  }
})

const closeModal = document.getElementById('close')
closeModal.addEventListener('click', function (e) {
  e.preventDefault()
  window.location.href = 'index.html'
})
