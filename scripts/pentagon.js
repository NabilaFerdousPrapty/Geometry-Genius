function calculatePentagonArea() {
  const perimeter = getInputValueById("paentagon-perimeter");
  const apothem = getInputValueById("paentagon-perimeter");
  const area = 0.5 * perimeter * apothem;
  setInnerTextById('pentagon-area',area);
}
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldText = inputField.value;
  const inputValue = parseFloat(inputFieldText);
  return inputValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
