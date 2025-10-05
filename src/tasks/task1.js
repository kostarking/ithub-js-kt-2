/**
 * @param {string} word - Исходное слово
 * @param {string} ignoredCharacted - Игнорируемый символ
 * @returns {string} Новая строка без указанного символа
 * @description Формирование новой строки без указанного символа
 */
export function processWord(word, ignoredCharacted) {
  if (word === null) {
    throw new Error("Некорректное слово");
  }

  if (ignoredCharacted === null) {
    throw new Error("Не указан игнорируемый символ");
  }

  if (!/^[а-яА-Яa-zA-Z]*$/.test(word)) {
    throw new Error("Слово содержит небуквенные символы");
  }

  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() !== ignoredCharacted.toLowerCase()) {
      result += word[i];
    }
  }

  return result;
}
