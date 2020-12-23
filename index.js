const inputTag = document.getElementById("tag");
const inputContent = document.getElementById("content");
const outputDiv = document.getElementById("output");
const createNewElement = () => {
  const inputTagValue = inputTag.value;
  const inputContentValue = inputContent.value;
  if (inputTagValue && inputContentValue) {
    const newElement = document.createElement(inputTagValue);
    newElement.innerText = inputContentValue;
    outputDiv.append(newElement);
  } else {
    console.log("Information filled in incompletely");
  }
};
