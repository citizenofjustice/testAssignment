// Написать метод/функцию, который/которая на вход принимает массив городов.
// В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка.
// Пример: // «Москва, Санкт-Петербург, Воронеж.»

const towns = [
  "Norwich",
  "Nuneaton",
  "Oldham",
  "Penzance",
  "Peterborough",
  "Preston",
  "Redcar",
  "Redditch",
  "Rochdale",
  "Rotherham",
];

const toStringOfTowns = (towns) => {
  // объявляем переменную для строки
  let townsStr = "";

  // создаем копию массива, чтобы не менять исходный
  const townsArray = towns;

  // извлекаем последний элемент из копии
  const lastTown = townsArray.pop();

  // проходим по каждому элементу массива и добавляем нужные символы
  townsArray.forEach((town) => {
    townsStr += town + ", ";
  });
  // добавляем последний элемент и точку в строку
  townsStr += lastTown + ".";

  return townsStr;
};

// Заносим результат функии в коснтанту
const result = toStringOfTowns(towns);

// вывод результата в консоль
console.log(result);
