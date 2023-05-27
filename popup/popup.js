console.log("This extension has been successfully launched!")

const currentTaskInput = document.getElementById("task-input")
currentTaskInput.addEventListener("change", handleInput)

const submitButton = document.getElementById("task-submit-button")
submitButton.addEventListener("click", handleClicked)

const body = document.getElementById("body")

let currentValue

function handleInput() {
  currentValue = currentTaskInput.value
  console.log(currentValue)
}

function handleClicked() {
  submitButton.innerHTML = "hi"
  console.log("Clicked the button")

  // const defResponse = window.parent.defResponse
  console.log("Before getting defResponse.")
  const testDefRepsonse = localStorage.getItem("defResponse")
  console.log(testDefRepsonse)
  // console.log(defResponse)
  body.innerHTML = testDefRepsonse
  console.log("Response generated.")
}