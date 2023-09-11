import analyzer from "./analyzer.js";

//Llamar elementos del DOM (selectores del DOM)
const btnReset = document.getElementById("reset-button");
const textArea = document.querySelector("textarea[name='user-input']");

//Funciones asociadas a los eventos
function restablecer() {
  textArea.value = "";

  //Palabras Reset
  const wordLi = document.querySelector('[data-testid="word-count"]');
  wordLi.textContent = `Palabras: 0`;
  //Caracteres Reset
  const characterCountLi = document.querySelector(
    '[data-testid="character-count"]'
  );
  characterCountLi.textContent = `Caracteres: 0`;
  //Caracteres sin espacios y signos de puntuación Reset
  const characterNoSpacesLi = document.querySelector(
    '[data-testid="character-no-spaces-count"]'
  );
  characterNoSpacesLi.textContent = `Caracteres (sin espacios y signos de puntuación): 0`;
  //Números Reset
  const numberCountLi = document.querySelector('[data-testid="number-count"]');
  numberCountLi.textContent = `Números: 0`;
  //Suma números Reset
  const numberSumLi = document.querySelector('[data-testid="number-sum"]');
  numberSumLi.textContent = `Suma de números: 0`;
  //Longitud media de palabras Reset
  const wordLengthAverageLi = document.querySelector(
    '[data-testid="word-length-average"]'
  );
  wordLengthAverageLi.textContent = `Longitud media de palabras: 0`;
}

function actualizarContador() {
  //Contar palabras
  const contarPalabras = analyzer.getWordCount(textArea.value);
  const wordCountLi = document.querySelector('[data-testid="word-count"]');
  wordCountLi.textContent = `Palabras: ${contarPalabras}`;

  //Contar caracteres
  const contarCaracteres = analyzer.getCharacterCount(textArea.value);
  const characterCountLi = document.querySelector(
    '[data-testid="character-count"]'
  );
  characterCountLi.textContent = `Caracteres: ${contarCaracteres}`;

  //Contar caracteres sin espacios y signos de puntuación
  const contarCaracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(
    textArea.value
  );
  const characterNoSpacesLi = document.querySelector(
    '[data-testid="character-no-spaces-count"]'
  );
  characterNoSpacesLi.textContent = `Caracteres (sin espacios y signos de puntuación): ${contarCaracteresSinEspacios}`;

  //Contar números
  const contarNumeros = analyzer.getNumberCount(textArea.value);
  const numberCountLi = document.querySelector('[data-testid="number-count"]');
  numberCountLi.textContent = `Números: ${contarNumeros}`;

  //Contar suma total de los números
  const contarTotalNumeros = analyzer.getNumberSum(textArea.value);
  const numberSumLi = document.querySelector('[data-testid="number-sum"]');
  numberSumLi.textContent = `Suma de números: ${contarTotalNumeros}`;

  //Contar la longitud media de las palabras
  const longitudMediaPalabras = analyzer.getAverageWordLength(textArea.value);
  const wordLengthAverageLi = document.querySelector(
    '[data-testid="word-length-average"]'
  );
  wordLengthAverageLi.textContent = `Longitud media de palabras: ${longitudMediaPalabras}`;
}

//Eventos del DOM

btnReset.addEventListener("click", restablecer);
textArea.addEventListener("keyup", actualizarContador);
