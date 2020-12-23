const modifyId = document.getElementById("modify-id");
const modifyProperty = document.getElementById("modify-property");
const modifyVal = document.getElementById("modify-value");
const applyProperty = () => {
  const modifyIdValue = modifyId.value;
  const modifyPropertyValue = modifyProperty.value;
  const modifyValValue = modifyVal.value;
  if (modifyPropertyValue && modifyIdValue && modifyValValue) {
    const elementToModify = document.getElementById(modifyIdValue);
    if (elementToModify) {
      elementToModify.setAttribute(
        "style",
        modifyPropertyValue + ":" + modifyValValue
      );
    } else {
      console.log("No element Present by that Id");
    }
  }
};
