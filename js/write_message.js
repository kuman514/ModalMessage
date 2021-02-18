function onClickWriteMessage () {
  sendToModal(sanitizeMessage())
  openModal()
}

function sanitizeMessage () {
  let text = document.querySelector('textarea').value
  text = text.replaceAll(/(<([^>]+)>)/g, '')
  return text
}

function sendToModal (message) {
  let element = document.querySelector('.modal-message')
  element.innerHTML = message
}

function openModal () {
  //document.querySelector('.modal-overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
  document.querySelector('.modal').classList.remove('hidden')
}

function closeModal () {
  document.querySelector('.modal').classList.add('hidden')
  //document.querySelector('.modal-overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
}
