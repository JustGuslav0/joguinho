const personagem = document.getElementById('personagem');
const inimigo = document.getElementById('inimigo');
const vidaCountElement = document.getElementById('vidaCount');
const ladrao = document.getElementById('ladrao');
const tiro = document.getElementById('tiro');
const kenny = document.getElementById('kenny');

let posicaoHorizontal = 0;
let posicaoVertical = 0;
const step = 10;


//ATIRAR ====== INICIO
function atirar() {
  const tiro = document.createElement('div');
  tiro.classList.add('tiro');
  tiro.id = 'tiro'; 
  document.body.appendChild(tiro);

  const personagemRect = personagem.getBoundingClientRect();
  tiro.style.left = (personagemRect.left + personagemRect.width / 2) + 'px';
  tiro.style.top = (personagemRect.top + personagemRect.height / 2) + 'px';

  const tiroInterval = setInterval(() => {
    const tiroRect = tiro.getBoundingClientRect();
    if (tiroRect.top < window.innerHeight) {
      tiro.style.top = (parseInt(tiro.style.top) || 0) - 5 + 'px';
      checkCollisionTI(tiro);
        checkCollisionLA(tiro);
        checkCollisionDOIS(tiro);
    } else {
      clearInterval(tiroInterval);
      document.body.removeChild(tiro);
    }
  }, 10);
}
  
//ATIRAR ====== FIM


//mover personagem ========= comeco
function updatePersonagemPosition() {
  personagem.style.left = posicaoHorizontal + 'px';
  personagem.style.top = posicaoVertical + 'px';
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      posicaoHorizontal -= step;
      break;
    case 'ArrowRight':
      posicaoHorizontal += step;
      break;
    case ' ':
        atirar();
        break;
  }

  updatePersonagemPosition();
});
//mover personagem =========== fim

//inimigo ========= comeca 
let inimigoPositionX = window.innerWidth; // Inimigo começa na extremidade direita

function moverInimigo() {
  inimigo.style.left = inimigoPositionX + 'px';
  inimigoPositionX -= 2; // Movimento para a esquerda

  // Reposicionar o inimigo quando ele sair da tela
  if (inimigoPositionX < -50) {
    inimigoPositionX = window.innerWidth;
  }
}

setInterval(moverInimigo, 10);

// inimigo ========  fim 


//ladrao comeca 
let ladraoPositionX = window.innerWidth; // ladrao começa na extremidade direita

function moverladrao() {
  ladrao.style.right = ladraoPositionX + 'px';
  ladraoPositionX -= 2; // Movimento para a esquerda

  // Reposicionar o ladrao quando ele sair da tela
  if (ladraoPositionX < -50) {
    ladraoPositionX = window.innerWidth;
  }
}

setInterval(moverladrao, 10);
//ladrao termina

//ladrao 2 comeca

let kennyPositionX = window.innerWidth; // kenny começa na extremidade direita

function moverkenny() {
  kenny.style.left = kennyPositionX + 'px';
  kennyPositionX -= 3; // Movimento para a esquerda

  // Reposicionar o kenny quando ele sair da tela
  if (kennyPositionX < -50) {
    kennyPositionX = window.innerWidth;
  }
}

setInterval(moverkenny, 10);
//ladrao termina

// vida comeca =========
let vidaCount = 3;

function updateVidaCount() {
  vidaCountElement.textContent = vidaCount;
}

function subtrairVida() {
  vidaCount--;
  updateVidaCount();

  if (vidaCount <= 0) {
    window.location.href='perdeu.html';
    resetGame();
  }
}

function addVida() {
    vidaCount++;
    updateVidaCount();

    if (vidaCount >= 10){
       window.location.href='telinhaDoisCartman.html';
    }
  }

function resetGame() {
  vidaCount = 3;
  updateLifeCount();
  character.style.left = '0px';
  character.style.top = '0px';
}
// vida acaba =========

//colisao ===================

function checkCollisionLA(tiro) {
  const tiroRect = tiro.getBoundingClientRect();
  const ladraoRect = ladrao.getBoundingClientRect();
  tropecoRect= ladraoRect; 

  if (
    tiroRect.left < tropecoRect.right &&
    tiroRect.right > tropecoRect.left &&
    tiroRect.top < tropecoRect.bottom &&
    tiroRect.bottom > tropecoRect.top
      ) {

      document.body.removeChild(tiro);
    subtrairVida(); 
  }
}


function checkCollisionTI(tiro) {
    const tiroRect = tiro.getBoundingClientRect();
    const inimigoRect = inimigo.getBoundingClientRect();
    tropecoRect= inimigoRect; 
  
    if (
      tiroRect.left < tropecoRect.right &&
      tiroRect.right > tropecoRect.left &&
      tiroRect.top < tropecoRect.bottom &&
      tiroRect.bottom > tropecoRect.top
        ) {

        document.body.removeChild(tiro);
      addVida(); 
    }
  }

  function checkCollisionDOIS(tiro) {
    const tiroRect = tiro.getBoundingClientRect();
    const kennyRect = kenny.getBoundingClientRect();
    tropecoRect= kennyRect; 
  
    if (
      tiroRect.left < tropecoRect.right &&
      tiroRect.right > tropecoRect.left &&
      tiroRect.top < tropecoRect.bottom &&
      tiroRect.bottom > tropecoRect.top
        ) {
  
        document.body.removeChild(tiro);
      subtrairVida(); 
    }
  }
  //colisao =================================