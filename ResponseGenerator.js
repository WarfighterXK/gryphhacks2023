const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: "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"
})
const openai = new OpenAIApi(configuration)

const completion = openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Hello world"
})
console.log(completion.data.choices[0].text)
