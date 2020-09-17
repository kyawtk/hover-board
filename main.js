let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");
let colors =  ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

let blocksNum = 1500;
for (let i = 0; i < blocksNum; i++) {
  let block = document.createElement("div");
  block.classList.add("block");
  block.addEventListener("mouseover", () => setColortoEl(block));
  block.addEventListener("mouseout", () => removeColorfromEl(block));
  wrapper.appendChild(block);
}

function setColortoEl(element) {
  let color = getrandomcolor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorfromEl(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #111`;
}
function getrandomcolor(){
    return colors[Math.floor(Math.random()*colors.length)];
}