console.log("Content script is running.")

// Set up port.
var port = chrome.runtime.connect({ name: "portConnection" })

// Set up listener
port.onMessage.addListener(function (request) {
  console.log("Listening...")

  switch (request.action) {
    case "getContent":
      content = getContent()
      port.postMessage({ action: "logContent", content: content })
      return
  }
})

/**
 * Gets content from the current tab's document. Needs to be modified to get content from a tab. Possibly need to implement in background.js.
 */
function getContent() {
  const article = document.querySelector("article")

  if (article) {
    const text = article.textContent
    const wordMatchRegExp = /[^\s]+/g
    const words = text.matchAll(wordMatchRegExp)
    const wordCount = [...words].length

    console.log(wordCount)
  } else {
    console.log("Cannot find an article.")
  }
}
