const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const container3 = document.querySelector(".container-3");
//const body = document.querySelector("body");

const menu1 = document.querySelector(".presentation");
const menu2 = document.querySelector(".cor-palette");
let listaDeCores = [];

const quantidade = 3;
function randomColors() {
  for (let i = 0; i < quantidade; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    console.log(randomHex);
    listaDeCores.push(randomHex);
  }
}
randomColors();
console.log(listaDeCores);

function addColors(element, position) {
  element.style.backgroundColor = listaDeCores[position];
}
addColors(container1, 0);
addColors(container2, 1);
addColors(container3, 2);
//addColors(body, 3);

//setTimeout(() => location.reload(), 2500);
