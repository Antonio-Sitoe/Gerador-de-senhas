import GerarSenha from "./gerarSenha.js";

const btn = document.querySelector(".gerar-senha");
const resposta = document.querySelector(".senha-gerada");
const inputs = document.querySelectorAll("form input");

const qtd = document.querySelector(".caracteres");

export default function formGeraSEnha() {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    resposta.innerHTML = gera();
  });
}

function gera() {
  return (
    GerarSenha(
      qtd.value,
      inputs[0].checked,
      inputs[1].checked,
      inputs[2].checked,
      inputs[3].checked
    ) || "Nada selecionado"
  );
}
