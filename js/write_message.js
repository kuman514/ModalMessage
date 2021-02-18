function onClickWriteMessage () {
  sendToModal(sanitizeMessage())
  openModal()
}

function sanitizeMessage () {
  let text = document.querySelector('textarea').value
  text = text.replaceAll(new RegExp(/<*>/, 'g'), '')
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
