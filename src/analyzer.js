const analyzer = {
  getWordCount: (text) => {
    const palabras = text.match(/\b[a-z0-9]+\b/gi);
    if (palabras) {
      return palabras.length;
    } else {
      return 0;
    }
  },

  getCharacterCount: (text) => {
    let caracteres = 0;
    for (let i = 0; i < text.length; i++) {
      caracteres++;
    }
    return caracteres;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const cleanText = text.replace(/[^\w]/g, "");
    return cleanText.length;
  },

  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b|\.\d+\b/g);
    if (!numbers) {
      return 0;
    }
    return numbers.length;
  },

  getNumberSum: (text) => {
    const sumaNumeros = text.match(/\b\d+(\.\d+)?\b|\.\d+\b/g);
    if (sumaNumeros) {
      const suma = sumaNumeros.reduce(
        (accumulator, currentValue) => accumulator + parseFloat(currentValue),
        0
      );
      return suma;
    } else {
      return 0;
    }
  },

  getAverageWordLength: (text) => {
    const longitudPalabras = text.split(/\s+/);
    const totalLength = longitudPalabras.reduce(
      (sum, word) => sum + word.length,
      0
    );
    const averageLength = totalLength / longitudPalabras.length;
    return parseFloat(averageLength.toFixed(2));
  },
};

export default analyzer;
