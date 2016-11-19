
awaitElement('#password', '#unlock_btn').then(() => {
  return sendMessage('fetch credentials')
}).then((credentials) => {
  setInputValue(document.querySelector('#password'), credentials.inboxPassword)
  document.querySelector('#unlock_btn').click()
})
