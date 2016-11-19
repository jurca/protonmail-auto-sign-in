
(() => {
  let usernameInput = document.querySelector('[name="username"]')
  let accountPasswordInput = document.querySelector('[name="password"]')
  let inboxPasswordInput = document.querySelector('[name="key"]')

  usernameInput.value = localStorage.getItem(STORAGE_KEY.username)

  for (let input of [usernameInput, accountPasswordInput, inboxPasswordInput]) {
    for (let event of ['keypress', 'blur']) {
      input.addEventListener(event, save)
    }
  }

  function save() {
    let storageKey
    switch (this) {
      case usernameInput:
        storageKey = STORAGE_KEY.username
        break
      case accountPasswordInput:
        storageKey = STORAGE_KEY.accountPassword
        if (!this.value) {
          return
        }
        break
      case inboxPasswordInput:
        storageKey = STORAGE_KEY.inboxPassword
        if (!this.value) {
          return
        }
        break
      default:
        throw new Error('Unknown element')
    }

    localStorage.setItem(storageKey, this.value)
  }
})()
