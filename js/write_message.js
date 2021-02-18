function onClickWriteMessage () {
  sendToModal(sanitizeMessage())
  openModal()
}

function sanitizeMessage (deny = ['script', 'a']) {
  let text = document.querySelector('textarea').value
  // TODO: Sanitize HTML in text (to prevent XSS)
  deny.forEach(tag => {
    text = text.replaceAll(`<${tag}>`, '')
    text = text.replaceAll(`</${tag}>`, '')
  })
  // End of my sanitizing HTML
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
