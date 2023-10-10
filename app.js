const mainContainer = document.querySelector(".container");
const btnRefresh = document.querySelector(".refresh-btn");

let quantidade = 32;
//const color = 0xffffff; // gera esse número 16777215

function randomColor() {
  // Essa parte do código evita que os blocos fiquem se somando toda vez que eu chamar a função.
  mainContainer.innerHTML = "";
  for (let i = 0; i < quantidade; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    console.log(randomHex);

    let box = document.createElement("li");
    box.classList.add("elementLi");
    box.innerHTML = `<div class="box-element" style="background: ${randomHex}"></div>
    <span class="texto-hex">${randomHex}</span>`;
    mainContainer.appendChild(box);
    // Função que copia o nome da cor.
    box.addEventListener("click", () => copiandoCor(box, randomHex));

    
  }
}
randomColor();

// Ciar função que possibilitar o usuário a copiar o nome da cor.
function copiandoCor(elem, randomHex) {
  const textoColor = elem.querySelector(".texto-hex");
  navigator.clipboard
    .writeText(randomHex)
    .then(() => {
      textoColor.innerText = "Copied";
      setTimeout(() => (textoColor.innerText = randomHex), 1000);
    })
    .catch(() => alert("Não foi possível copiar!"));
}

btnRefresh.addEventListener("click", randomColor);
