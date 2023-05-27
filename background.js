// TODO: needs to be changed - raises an error because I have not specified a tab.
var port = chrome.tabs.connect({ name: "portConnection" })

chrome.tabs.query({}, tabs => {
  tabs.forEach(() => {
    console.log("Getting content...")
    port.postMessage({ action: "getContent" })
  })
})

// Setting up listener.
port.onMessage.addListener(function (request) {
  console.log("Listening service-worker...")

  switch (request.action) {
    case "logContent":
      console.log(request.content)
  }
})
