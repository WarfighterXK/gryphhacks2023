import React from "react"
import { useReducer, useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom/client"

console.log("This extension has been successfully launched!")

function Main() {
  const response = useRef("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [inputValue, setInputValue] = useState("")
  // const initialState = {
  //   isSubmitted: false,
  //   inputValue: ""
  // }

  // function reducer(draft, action) {
  //   switch (action.type) {
  //     case "submitForm":
  //       draft.isSubmitted = true
  //       return
  //     case "updateInput":
  //       draft.inputValue = action.value
  //       return
  //   }
  // }
  // const [state, dispatch] = useReducer(reducer, initialState)
  chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse
  ) {
    console.log(message.data)
    response.current = String(message.data)
    sendResponse({ msg: "Tab titles received." })
  })

  function handleInput(e) {
    // dispatch({ type: "updateInput", value: e.target.value })
    setInputValue(e.target.value)
    console.log(inputValue)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // dispatch({ type: "submitForm" })
    setIsSubmitted(true)
    console.log("Submitted form.")

    // console.log("Before getting defResponse.")
    // const testDefRepsonse = localStorage.getItem("defResponse")
    // console.log(testDefRepsonse)
  }

  // React-ifying code
  return isSubmitted ? (
    <>
      <p>{response.current}</p>
    </>
  ) : (
    <>
      <label htmlFor="current-task">Enter current task: </label>
      <input
        type="text"
        id="task-input"
        name="task-input"
        onChange={handleInput}
      />
      <br />
      <br />
      <input type="submit" id="task-submit-button" onClick={handleSubmit} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Main />)
