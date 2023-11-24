document.addEventListener('DOMContentLoaded', () => {
  const backgroundAudio = new Audio('musicaAbertura.mp3'); // Substitua com o caminho do seu arquivo de som
  backgroundAudio.loop = true; // Para que o som repita continuamente
  backgroundAudio.play();

  document.addEventListener('keydown',(event) => {
    if (event.key) {
      backgroundAudio.play();
    }
  });
  backgroundAudio.play();
  // Inicia o som de fundo quando a página é carregada

});