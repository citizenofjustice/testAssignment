// Написать метод/функцию, который/которая на вход принимает число (int),
// а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству.
// Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

// функция для подборя нужного окончания
const changeEnding = (number) => {
  // объявляем переменную с исходным значением
  let word = "компьютер";

  // переводим число в строку
  const numStr = number.toString();

  // получаем последний индекс элемента строки
  const lastIndex = numStr.length - 1;

  // условие для проверки на исключение (числа от ...11 до ...14)
  const isException =
    +numStr[lastIndex - 1] === 1 &&
    2 <= +numStr[lastIndex] &&
    +numStr[lastIndex] <= 4;
  // если условие соблюдается, то слово будет в следующем падеже
  if (isException) {
    word = "компьютеров";
  } else {
    // если условие не соблюдается, то проверяем по последней цифре
    // если последняя цифра числа равна 1
    if (+numStr[lastIndex] === 1) {
      // оставляем исходное значение
    } else if (2 <= +numStr[lastIndex] && +numStr[lastIndex] <= 4) {
      // если последняя цифра числа равна от 2 до 4
      word = "компьютера";
    } else if (
      // если последняя цифра числа равна от 5 до 9
      +numStr[lastIndex] === 0 ||
      (5 <= +numStr[lastIndex] && +numStr[lastIndex] <= 9)
    ) {
      word = "компьютеров";
    }
  }
  // объединяем результат в выходную строку
  const output = `${number} ${word}`;
  return output;
};

// функция для подбора случайных целых чисел
function randomIntNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// цикл для проверки
for (let i = 0; i < 10; i++) {
  // случайное целое число в заданом диапазоне
  const rndInt = randomIntNumber(1, 2000);

  // запускаем функцию
  const result = changeEnding(rndInt);

  // выводим в консоль результат
  console.log(result);
}
