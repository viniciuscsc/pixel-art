const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
body.appendChild(h1);

const paletaDeCor = document.createElement('section');
paletaDeCor.id = 'color-palette';
body.appendChild(paletaDeCor);

for (let index = 0; index < 4; index += 1) {
  const divCor = document.createElement('div');
  divCor.className = 'color';
  divCor.style.border = 'black solid 1px';
  divCor.style.display = 'inline-block';
  divCor.style.height = '50px';
  divCor.style.width = '50px';
  divCor.style.marginRight = '5px';
  switch (index) {
    case 0:
      divCor.className = 'color selected';
      divCor.style.backgroundColor = 'black';
      break;
    case 1:
      divCor.style.backgroundColor = 'red';
      break;
    case 2:
      divCor.style.backgroundColor = 'blue';
      break;
    case 3:
      divCor.style.backgroundColor = 'green';
      break;
  }
  body.appendChild(divCor);
}

const botaoCoresAleatorias = document.createElement('button');
botaoCoresAleatorias.id = 'button-random-color';
botaoCoresAleatorias.innerText = 'Cores aleatórias';
botaoCoresAleatorias.style.display = 'block';
botaoCoresAleatorias.style.marginTop = '15px';
botaoCoresAleatorias.style.marginBottom = '30px';
body.appendChild(botaoCoresAleatorias);

const quadroDePixels = document.createElement('section');
quadroDePixels.id = 'pixel-board';
quadroDePixels.style.height = '210px';
quadroDePixels.style.width = '210px';
quadroDePixels.style.display = 'flex';
quadroDePixels.style.flexWrap = 'wrap';
body.appendChild(quadroDePixels);

for (let index = 0; index < 25; index += 1) {
  const divPixel = document.createElement('div');
  divPixel.className = 'pixel';
  divPixel.style.height = '40px';
  divPixel.style.width = '40px';
  divPixel.style.border = 'black solid 1px';
  divPixel.style.backgroundColor = 'white';
  quadroDePixels.appendChild(divPixel);
}

function geraCorAleatoria() {
  const caracteresPossiveis = '0123456789ABCDEF';
  let cor = '#';

  for (let index = 0; index < 6; index += 1) {
    const novoCaractere = caracteresPossiveis[Math.floor(Math.random() * 16)];
    cor += novoCaractere;
  }

  return cor;
}

function gravaUltimaPaleta(value) {
  localStorage.setItem('colorPalette', JSON.stringify(value));
}

function geraNovaPaleta() {
  const caixaDeCor = document.getElementsByClassName('color');
  const paleta = [];

  for (let index = 1; index < 4; index += 1) {
    const caixaAtual = caixaDeCor[index];
    const corAleatoria = geraCorAleatoria();
    caixaAtual.style.backgroundColor = corAleatoria;
    paleta.push(corAleatoria);
  }

  gravaUltimaPaleta(paleta);
}

botaoCoresAleatorias.addEventListener('click', geraNovaPaleta);

function recuperaUltimaPaleta() {
  const ultimaPaleta = JSON.parse(localStorage.getItem('colorPalette'));
  const caixaDeCor = document.getElementsByClassName('color');

  for (let index = 1; index < 4; index += 1) {
    const caixaAtual = caixaDeCor[index];
    const corRecuperada = ultimaPaleta[index - 1];
    caixaAtual.style.backgroundColor = corRecuperada;
  }
}

if (localStorage.getItem('colorPalette') !== null) {
  recuperaUltimaPaleta();
}

function selecionaCor() {
  const caixaDeCor = document.getElementsByClassName('color');

  for (let index = 0; index < 4; index += 1) {
    const caixaAtual = caixaDeCor[index];
    caixaAtual.className = 'color';
  }

  event.target.className = 'color selected';  
}

const caixaDeCor = document.getElementsByClassName('color');

for (let index = 0; index < 4; index += 1) {
  const caixaAtual = caixaDeCor[index];
  caixaAtual.addEventListener('click', selecionaCor);
}

function pintaPixel() {
  const caixaDeCor = document.getElementsByClassName('color');

  for (let index = 0; index < 4; index += 1) {
    const caixaAtual = caixaDeCor[index];
    
    if(caixaAtual.className.includes('selected')) {
      event.target.style.backgroundColor = caixaAtual.style.backgroundColor;
    }
  }
}

const quadroPixels = document.getElementsByClassName('pixel');

for (let index = 0; index < quadroPixels.length; index += 1) {
  const pixelAtual = quadroPixels[index];
  pixelAtual.addEventListener('click', pintaPixel);
}
