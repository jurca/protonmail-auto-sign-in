
awaitElement('#username', '#password', '#login_btn').then(() => {
  return sendMessage('fetch credentials')
}).then((credentials) => {
  setInputValue(document.querySelector('#username'), credentials.username)
  setInputValue(
    document.querySelector('#password'),
    credentials.accountPassword
  )
  return credentials
}).then((credentials) => {
  // we have to do this asynchronously to let angular update the validation
  // status of the login form
  return delay(250).then(() => credentials)
}).then((credentials) => {
  document.querySelector('#login_btn').click()
  return credentials
}).then((credentials) => {
  return awaitElement('#password', '#unlock_btn').then(() => credentials)
}).then((credentials) => {
  setInputValue(document.querySelector('#password'), credentials.inboxPassword)
  return delay(250)
}).then(() => {
  document.querySelector('#unlock_btn').click()
})
