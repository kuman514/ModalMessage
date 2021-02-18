function onClickWriteMessage () {
  let text = document.querySelector('textarea').value
  console.log(`input value: ${text}`)

  // TODO: Sanitize HTML in text (to prevent XSS)


  console.log(`output value: ${text}`)
  return text
}

function sendToModal (message) {
  let element = document.querySelector('.modal-message')
  element.innerHTML = message
}

function openModal () {
  let element = document.querySelector('.modal')
  element.classList.remove('hidden')
}

function closeModal () {
  let element = document.querySelector('.modal')
  element.classList.add('hidden')
}
