
function awaitElement(...elementSelectors) {
  return new Promise((resolve) => {
    let interval = setInterval(() => {
      let ready = elementSelectors.map(
        selector => document.querySelector(selector)
      ).every(element => !!element)
      if (ready) {
        clearInterval(interval)
        resolve()
      }
    }, 100)
  })
}

function delay(delay) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

function setInputValue(input, value) {
  input.focus()
  input.value = value
  input.blur()
}

function sendMessage(message) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage(null, message, {}, resolve)
  })
}
