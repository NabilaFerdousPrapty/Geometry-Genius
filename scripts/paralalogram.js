// function CalculateParallelogramArea(){
//     // const base=document.getElementById('parallelogram-base');
//   const base=  getParallelogramBase()
//    console.log(base);

// }
// function getParallelogramBase(){

//     // const inputField=document.getElementById(inputFieldId);
//     // console.log(inputField);
//     const baseInput=document.getElementById('parallelogram-base');
//     const baseText=baseInput.value;
//     const base=parseFloat(baseText);
//     return base;

// }
function CalculateParallelogramArea() {
  const base = getInputValueById("parallelogram-base");
  // console.log('base value',base);
  const height = getInputValueById("parallelogram-height");

 

  // console.log('base value',base);
  // console.log('height value',height);
  const area = base * height;
  console.log(area);
  setInnerTextById("parallelogram-area", area);
  // const Area0fParallelogram=getElementById('parallelogram-area');
  // Area0fParallelogram.inn
}
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  // console.log(inputField);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  // console.log(inputValue);
  return inputValue;
}
function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
