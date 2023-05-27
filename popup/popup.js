console.log("This extension has been successfully launched!")

const currentTaskInput = document.getElementById("task-input")
currentTaskInput.addEventListener("change", handleInput)

const submitButton = document.getElementById("task-submit-button")
submitButton.addEventListener("click", handleClicked)

let currentValue

function handleInput() {
  currentValue = currentTaskInput.value
  console.log(currentValue)
}

function handleClicked() {
  submitButton.innerHTML = "hi"
  console.log("clicked the button")
}
