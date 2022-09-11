function geraCorAleatoria() {
  const caracteresPossiveis = '0123456789ABCDEF';
  let cor = '#';
  
  for (let index = 0; index < 6; index += 1) {
    const novoCaractere = caracteresPossiveis[Math.floor(Math.random() * 16)];
    cor += novoCaractere;
  }
  
  return cor;
}

function geraNovaPaleta() {
  const caixaDeCor = document.getElementsByClassName('color');
  let paleta = [];

  for (let index = 1; index < 4; index += 1) {
    const caixaAtual = caixaDeCor[index];
    const corAleatoria = geraCorAleatoria();
    caixaAtual.style.backgroundColor = corAleatoria;
    paleta.push(corAleatoria);
  }

  gravaUltimaPaleta(paleta);
}

const botaoCoresAleatorias = document.getElementById('button-random-color');
botaoCoresAleatorias.addEventListener('click', geraNovaPaleta);

function gravaUltimaPaleta(value) {
  localStorage.setItem('colorPalette', JSON.stringify(value));
}

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
