
(() => {

  chrome.runtime.onMessage.addListener(onMessage)

  function onMessage(message, sender, sendResponse) {
    if (message !== 'fetch credentials') {
      console.warn('Unknown message', message, sender)
      return
    }

    sendResponse({
      username: localStorage.getItem(STORAGE_KEY.username),
      accountPassword: localStorage.getItem(STORAGE_KEY.accountPassword),
      inboxPassword: localStorage.getItem(STORAGE_KEY.inboxPassword)
    })
  }

})()
