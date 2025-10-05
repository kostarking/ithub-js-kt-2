/**
 * @param {string} word - Слово для проверки
 * @returns {boolean} - Итог проверки
 * @description Проверка слова на палиндром
 */
export function isPalindrome(word) {
  if (word === null) {
    throw new Error("Пользователь отменил ввод");
  }
  if (word.includes(" ")) {
    throw new Error("Введено несколько слов");
  }
  if (!/^[а-яА-Яa-zA-Z]*$/.test(word)) {
    throw new Error("Некорректные входные данные");
  }

  let left = 0;
  let right = word.length - 1;
  let result = true;

  while (left < right) {
    if (word[left].toLowerCase() !== word[right].toLowerCase()) {
      result = false;
      break;
    }
    left++;
    right--;
  }

  if (word.length === 1) {
    result = false;
  }
  if (result === true) {
    result = word + " - палиндром";
  } else {
    result = word + " - не палиндром";
  }
  return result;
}
