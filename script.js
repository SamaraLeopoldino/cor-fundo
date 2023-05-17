
const container = document.querySelector(".container");
const colorPicker = document.getElementById("colorPicker");
const defaultColor = "#fff";


container.style.backgroundColor = defaultColor;


function onChangeBg() {
  container.style.backgroundColor = colorPicker.value;
}
