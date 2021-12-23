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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}

// regex validation input
const nameRegex = /^[a-zA-Z][a-zéèç]/
const emailRegex = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z]+[.]{1}[a-z]{2,10}$/
const quantityRegex = /^[0-9]{1,2}$/

// affichage erreur
const erreurPrenom = document.getElementById('erreurPrenom')
const erreurNom = document.getElementById('erreurNom')
const erreurEmail = document.getElementById('erreurEmail')
const erreurDate = document.getElementById('erreurDate')
const erreurQuantity = document.getElementById('erreurQuantity')
const erreurVille = document.getElementById('erreurVille')
const erreurCondition = document.getElementById('erreurCondition')

// message validation formulaire
const msgValidation = document.getElementById('formulaire')

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
    erreurPrenom.innerHTML =
      'Veuillez entrer 2 caractères ou plus pour le champ du prénom '
  } else {
    erreurPrenom.style.display = 'none'
  }

  if (!nameRegex.test(nom)) {
    erreurNom.innerHTML =
      'Veuillez entrer 2 caractères ou plus pour le champ du nom '
  } else {
    erreurNom.style.display = 'none'
  }

  if (!emailRegex.test(email)) {
    erreurEmail.innerHTML = ' Veuiilez entrer une adresse email valide'
  } else {
    erreurEmail.style.display = 'none'
  }

  if (!birthdate) {
    erreurDate.innerHTML = 'Vous devez entrer votre date de naissance'
  } else {
    erreurDate.style.display = 'none'
  }

  if (!quantityRegex.test(quantity)) {
    erreurQuantity.innerHTML = 'Veuillez saisir une valeur entre 0 et 99'
  } else {
    erreurQuantity.style.display = 'none'
  }

  //console.log(location)
  for (i = 0; i < location.length; i++) {
    if (!location[i].checked) {
      erreurVille.innerHTML = 'veuillez coher une case'
    } else {
      erreurVille.style.display = 'none'
    }
  }

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
    msgValidation.innerHTML = 'Merci ! Votre réservation a été reçue.'
  }
})

function inputValide() {
  let prenom = document.getElementById('first').value
  let nom = document.getElementById('last').value
  let email = document.getElementById('email').value
  let birthdate = document.getElementById('birthdate').value
  let quantity = document.getElementById('quantity').value

  if (!prenom) {
    document.getElementById('erreurPrenom').innerHTML =
      'Veuillez entrer 2 caractères ou plus pour le champ du prénom'
  } else if (prenom && nameRegex.test(prenom)) {
    document.getElementById('erreurPrenom').innerHTML = ''
  }
  if (!nom) {
    document.getElementById('erreurNom').innerHTML =
      'Veuillez entrer 2 caractères ou plus pour le champ du nom'
  } else if (nom && nameRegex.test(nom)) {
    document.getElementById('erreurNom').innerHTML = ''
  }
  if (!email) {
    document.getElementById('erreurEmail').innerHTML =
      'Veuiilez entrer une adresse email valide'
  } else if (email && emailRegex.test(email)) {
    document.getElementById('erreurEmail').innerHTML = ''
  }
  if (!birthdate) {
    document.getElementById('erreurDate').innerHTML =
      'Vous devez entrer votre date de naissance'
  } else if (birthdate) {
    document.getElementById('erreurDate').innerHTML = ''
  }
  if (!quantity) {
    document.getElementById('erreurQuantity').innerHTML =
      'Veuillez saisir une valeur entre 0 et 99'
  } else if (quantity && quantityRegex.test(quantity)) {
    document.getElementById('erreurQuantity').innerHTML = ''
  }
}

const closeModal = document.getElementById('close')
closeModal.addEventListener('click', function () {
  window.location.href = 'index.html'
})
