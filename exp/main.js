import { config } from "dotenv"
import readline from "readline"
import { Configuration, OpenAIApi} from "openai"




config()

console.log(process.env.API_KEY)


const user = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

uderInterface.prompt()
userInterface


const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
    }))


openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: 'Hi'}]
}).then(res => {
    console.log(res)
})
