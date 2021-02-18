function onClickWriteMessage () {
  let text = document.querySelector('textarea').value
  console.log(`input value: ${text}`)

  // TODO: Sanitize HTML in text (to prevent XSS)

  return text
}
