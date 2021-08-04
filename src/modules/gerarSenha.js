const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMauscula = () => String.fromCharCode(rand(65, 91));

const geraMinisculas = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.-=+{}!@#$%^&*()_)()*&^+-*//*-}{>?>:":{}|}~`';

const geraSimbolo = () => simbolos[rand(0, simbolos.length)];



export default function GerarSenha(qtd, maisculas, minusculas, numero, simbol) {
  const senhaArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maisculas && senhaArray.push(geraMauscula());
    minusculas && senhaArray.push(geraMinisculas());
    numero && senhaArray.push(geraNumero());
    simbol && senhaArray.push(geraSimbolo());
  }
  return senhaArray.join("").slice(0, qtd);
}
