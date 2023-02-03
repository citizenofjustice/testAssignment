// Написать метод/функцию, который/которая на вход принимает целое число,
// а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).

// функция для проверки является ли число простым
const checkIfSimple = (number) => {
  // переменная для вывода результата в строку
  let status;

  // логическая переменная статуса проверки
  let isSimple = true;

  // проверяем является ли число целым
  if (number % 1 === 0) {
    // если число 0 или 1, то оно не является простым
    if (number > 1) {
      // цикл для проверки делителей числа
      for (let i = 2; i < number; i++) {
        // если число находим хоть одно число на которое делится number кроме 1 и его самого
        if (number % i === 0) {
          // меняем логическую переменную останавливаем цикл
          isSimple = false;
          break;
        }
      }
    } else {
      isSimple = false;
    }
  } else {
    // если число оказалось не целым, то оно не является простым
    isSimple = false;
  }

  isSimple ? (status = "является") : (status = "не является");
  const output = `Число ${number} ${status} простым`;
  return output;
};

// проверки
console.log(checkIfSimple(2));
console.log(checkIfSimple(8.5));
console.log(checkIfSimple(9));
console.log(checkIfSimple(28));
console.log(checkIfSimple(601));
