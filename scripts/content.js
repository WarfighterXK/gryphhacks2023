console.log("Content script is running.")

// Set up port.
// var port = chrome.runtime.connect({ name: "portConnection" })

// Set up listener
// port.onMessage.addListener(function (request) {
//   console.log("Listening content script...")

//   switch (request.action) {
//     case "getContent":
//       content = getContent()
//       port.postMessage({ action: "logContent", content: content })
//       return
//   }
// })

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

/**
 * Watch for title changes.
 */
// Doesn't seem to detect changes in title for some reason.
// var title = document.getElementsByTagName("title")[0]
// console.log(title)
// var paragraphs = document.getElementsByTagName("paragraph")[0] // is "paragraph" a tag name sites use? - returns array, make sure you loop or get first element
// if (title) {
//   document.addEventListener("DOMSubtreeModified", () => {async() => {
//     const response = chrome.runtime.sendMessage({action: "updateTitles"})
//     console.log(response.message)
//   }})
// }
