/**
 * @param {string} userInput - Число
 * @returns {string} Строка с перечислением кратных трём
 * @description Формирование строки с перечислением чисел
 * от 1 до userInput, кратных трём, через запятую с пробелом
 */
export function getMultiplesOfThree(userInput) {
  if (userInput === null) {
    throw new Error("Пользователь отменил ввод");
  }
  if (isNaN(userInput)) {
    throw new Error("Некорректные входные данные");
  }

  let result = "";

  let i = 1;
  while (i <= userInput) {
    if (i % 3 === 0) {
      if (result) {
        result += ", ";
      }
      result += i;
    }
    i++;
  }
  return result;
}
