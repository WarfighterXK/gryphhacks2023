// const { Configuration, OpenAIApi } = require("openai")

// const configuration = new Configuration({
//   apiKey: "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"
// })
// const openai = new OpenAIApi(configuration)

// const completion = openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "Hello world"
// })
// console.log(completion.data.choices[0].text)

// const response = "Default response"
console.log('test response generator run')

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getResponse() {
  return await openai.createCompletion({
    model: "gpt-3.5-turbo",
    prompt: "Say this is a test and tell me who Scottie Barnes is.",
    temperature: 0,
    max_tokens: 7,
  });
}

const response = getResponse()
// const response = await openai.createCompletion({
//   model: "gpt-3.5-turbo",
//   prompt: "Say this is a test and tell me who Scottie Barnes is.",
//   temperature: 0,
//   max_tokens: 7,
// });

var defResponse = "Default response"
// export {defResponse}

// localStorage.setItem("defResponse", defResponse)

console.log(response.data.choices[0].text)