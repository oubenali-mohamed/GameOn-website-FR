const icon = document.getElementById('icon')
icon.addEventListener('click', function (e) {
  e.preventDefault()
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
})

// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}
// close modal form
const closeModal = document.getElementById('close')
closeModal.addEventListener('click', function () {
  modalbg.style.display = 'none'
})

// regex validation input
const nameRegex = /^[a-zA-Z][a-zéèç]/
const emailRegex = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z]+[.]{1}[a-z]{2,6}$/
const quantityRegex = /^[0-9]{1,2}$/

// span pour affichage erreur
const erreurPrenom = document.getElementById('erreurPrenom')
const erreurNom = document.getElementById('erreurNom')
const erreurEmail = document.getElementById('erreurEmail')
const erreurDate = document.getElementById('erreurDate')
const erreurQuantity = document.getElementById('erreurQuantity')
const erreurVille = document.getElementById('erreurVille')
const erreurCondition = document.getElementById('erreurCondition')

// contenu de l'erreur
const prenomErreur =
  'Veuillez entrer 2 caractères ou plus pour le champ du prénom '
const nomErreur = 'Veuillez entrer 2 caractères ou plus pour le champ du nom '
const emailErreur = ' Veuiilez entrer une adresse email valide'
const birthdateErreur = 'Vous devez entrer votre date de naissance'
const quantityErreur = 'Veuillez saisir une valeur entre 0 et 99'
const locationErreur = 'veuillez coher une case'
const conditionErreur = "veuillez accepter les conditions d'utilisations"

// message validation formulaire
const msgValidation = document.getElementById('formValid')

//vérification des champs de saisi
const formValid = document.getElementById('button')
formValid.addEventListener('click', function (e) {
  e.preventDefault()
  // récupération valeur des inputs
  let prenom = document.getElementById('first').value
  let nom = document.getElementById('last').value
  let email = document.getElementById('email').value
  let birthdate = document.getElementById('birthdate').value
  let quantity = document.getElementById('quantity').value
  let location = document.getElementsByName('location')
  let condition = document.getElementById('checkbox1').checked

  if (!nameRegex.test(prenom)) {
    erreurPrenom.innerHTML = prenomErreur
  } else {
    erreurPrenom.style.display = 'none'
  }

  if (!nameRegex.test(nom)) {
    erreurNom.innerHTML = nomErreur
  } else {
    erreurNom.style.display = 'none'
  }

  if (!emailRegex.test(email)) {
    erreurEmail.innerHTML = emailErreur
  } else {
    erreurEmail.style.display = 'none'
  }

  if (!birthdate) {
    erreurDate.innerHTML = birthdateErreur
  } else {
    erreurDate.style.display = 'none'
  }

  if (!quantityRegex.test(quantity)) {
    erreurQuantity.innerHTML = quantityErreur
  } else {
    erreurQuantity.style.display = 'none'
  }

  for (i = 0; i < location.length; i++) {
    if (!location[i].checked) {
      erreurVille.innerHTML = locationErreur
    } else {
      erreurVille.style.display = 'none'
    }
  }

  if (!condition) {
    erreurCondition.innerHTML = conditionErreur
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
    msgValidation.innerHTML = 'Merci pour votre inscription.'
    msgValidation.style.height = '714px'
    msgValidation.style.lineHeight = '30em'
    msgValidation.style.textAlign = 'center'
  }
})

//validatation des inputs à la perte du focus
const validPrenom = document.getElementById('first')
validPrenom.addEventListener('change', function () {
  if (!nameRegex.test(validPrenom.value)) {
    erreurPrenom.innerHTML = prenomErreur
  } else {
    erreurPrenom.style.display = 'none'
  }
})
const validNom = document.getElementById('last')
validNom.addEventListener('change', function () {
  if (!nameRegex.test(validNom.value)) {
    erreurNom.innerHTML = nomErreur
  } else {
    erreurNom.style.display = 'none'
  }
})
const validEmail = document.getElementById('email')
validEmail.addEventListener('change', function () {
  if (!emailRegex.test(validEmail.value)) {
    erreurEmail.innerHTML = emailErreur
  } else {
    erreurEmail.style.display = 'none'
  }
})
const validBirthdate = document.getElementById('birthdate')
validBirthdate.addEventListener('change', function () {
  if (!validBirthdate.value) {
    erreurDate.innerHTML = birthdateErreur
  } else {
    erreurDate.style.display = 'none'
  }
})
const validQuantity = document.getElementById('quantity')
validQuantity.addEventListener('change', function () {
  if (!quantityRegex.test(validQuantity.value)) {
    erreurQuantity.innerHTML = quantityErreur
  } else {
    erreurQuantity.style.display = 'none'
  }
})
/* function inputValide() {
  let prenom = document.getElementById('first').value
  let nom = document.getElementById('last').value
  let email = document.getElementById('email').value
  let birthdate = document.getElementById('birthdate').value
  let quantity = document.getElementById('quantity').value

  if (!nameRegex.test(prenom)) {
    erreurPrenom.innerHTML = prenomErreur
  } else {
    erreurPrenom.style.display = 'none'
  }
  if (!nom) {
    erreurNom.innerHTML = nomErreur
  } else if (nom && nameRegex.test(nom)) {
    erreurNom.style.display = 'none'
  }
  if (!email) {
    erreurEmail.innerHTML = emailErreur
  } else if (email && emailRegex.test(email)) {
    erreurEmail.style.display = 'none'
  }
  if (!birthdate) {
    erreurDate.innerHTML = birthdateErreur
  } else if (birthdate) {
    erreurDate.style.display = 'none'
  }
  if (!quantity) {
    erreurQuantity.innerHTML = quantityErreur
  } else if (quantity && quantityRegex.test(quantity)) {
    erreurQuantity.style.display = 'none'
  }
} */
