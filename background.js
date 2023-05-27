// TODO: needs to be changed - raises an error because I have not specified a tab.
// var port = chrome.tabs.connect({ name: "portConnection" })

// chrome.tabs.query({}, tabs => {
//   tabs.forEach(() => {
//     console.log("Getting content...")
//     port.postMessage({ action: "getContent" })
//   })
// })

console.log('test response generator run')

// try {
//   importScripts('/node_modules/openai/dist/api.js', '/node_modules/openai/dist/configuration.js', '/node_modules/openai/dist/index.js'/*'ResponseGenerator.js' *//*, and so on */);
// } catch (e) {
//   console.log("potato")
//   console.log(e)
//   // console.error(e);
// }

import {Configuration, OpenAIApi} from './node_modules/openai/index.ts'

// import { Configuration, OpenAIApi } from '/node_modules/openai/index.ts';
// import './node_modules/openai/index.ts';
// import './node_modules/openai'
// import { Configuration } from "../node_modules/openai/configuration.ts";
// import { OpenAIApi, Configuration } from "./node_modules/openai/index.ts";

// import { Configuration, OpenAIApi } from "openai";



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = openai.createCompletion({
  model: "gpt-3.5-turbo",
  prompt: "Say this is a test.",
  temperature: 0,
  max_tokens: 7,
});

var defResponse = "Default response"
// export {defResponse}
console.log('testyy')

localStorage.setItem("defResponse", defResponse)

console.log(response.data.choices[0].text)



// // Setting up listener.
// port.onMessage.addListener(function (request) {
//   console.log("Listening service-worker...")

//   switch (request.action) {
//     case "logContent":
//       console.log(request.content)
//   }
// })
