// TODO: needs to be changed - raises an error because I have not specified a tab.
// var port = chrome.tabs.connect({ name: "portConnection" })

// chrome.tabs.query({}, tabs => {
//   tabs.forEach(() => {
//     console.log("Getting content...")
//     port.postMessage({ action: "getContent" })
//   })
// })

// // Setting up listener.
// port.onMessage.addListener(function (request) {
//   console.log("Listening service-worker...")

//   switch (request.action) {
//     case "logContent":
//       console.log(request.content)
//   }
// })

// Alternate approach
var tabTitles = []

// chrome.tabs.onUpdated.addListener(
//     (tab) => {tabTitles.push(tab.title)
//         console.log("Tab modified.")
//     console.log(tabTitles)}
//   )

//   chrome.tabs.onRemoved.addListener(
//     (tab) => {tabTitles.splice(tabTitles.indexOf(tab.title))
//         console.log("Tab closed.")
//     console.log(tabTitles)}
    
//   )

function updateTitles() {
chrome.tabs.query({}, (tabs)=>{tabs.forEach(tab => {
    tabTitles = []
    tabTitles.push(tab.title)
    console.log("Got existing tab titles.")
    console.log(tabTitles)
});})}

// Another alternate approach
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         console.log(`Received message: ${request.action}`)
//         switch (request.action) {
//             case "updateTitles":
//                 updateTitles()
//                 sendResponse({message: "Updated titles"})
//                 return
//         }
//     })


// ANOTHER ALTERNATE APPROACH!
chrome.tabs.onUpdated.addListener(
    (tab) => {updateTitles()}
  )


// try {
//     importScripts('./node_modules/openai.index.ts' /*, and so on */);
//     // importScripts('./ResponseGenerator.js');
// } catch (e) {
//   console.log("potato")
//   console.log(e)
//   // console.error(e);
// }

// import { getResponse } from "./ResponseGenerator.js";

// import './node_modules/openai/index.ts';
// import './node_modules/openai'
// import { Configuration } from "../node_modules/openai/configuration.ts";
// import { OpenAIApi, Configuration } from "./node_modules/openai/index.ts";

// import { Configuration, OpenAIApi } from "./node_modules/openai/index.ts";
// import { Configuration, OpenAIApi } from "openai";

// const { Configuration, OpenAIApi } = require("openai");


// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = openai.createCompletion({
//   model: "gpt-3.5-turbo",
//   prompt: "Say this is a test.",
//   temperature: 0,
//   max_tokens: 7,
// });

// var defResponse = "Default response"

// localStorage.setItem("defResponse", defResponse)

// console.log(response.data.choices[0].text)




