const inputTag = document.getElementById("tag");
const inputContent = document.getElementById("content");
const outputDiv = document.getElementById("output");
const scriptOutput = document.getElementById("script-output");
const idInput = document.getElementById("id-input");
const createNewElement = () => {
  const inputTagValue = inputTag.value;
  const inputContentValue = inputContent.value;
  const idInputValue = idInput.value;
  if (inputTagValue && inputContentValue && idInputValue) {
    const newElement = document.createElement(inputTagValue);
    newElement.innerText = inputContentValue;
    newElement.id = idInputValue;
    outputDiv.append(newElement);
  } else {
    console.log("Information filled in incompletely");
  }
};
const printScript = () => {
  //   console.log(outputDiv);
  console.log(document.body.innerHTML);
  scriptOutput.innerText = document.body.innerHTML;
};
const addBorder = () => {
  outputDiv.style.border = "green 2px solid";
};
