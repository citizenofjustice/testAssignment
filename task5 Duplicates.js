// Написать метод, который определяет, какие элементы присутствуют в двух экземплярах
// в каждом из массивов (= в двух и более, причем в каждом). На вход подаются два массива.
// На выходе массив с необходимыми совпадениями.

// Пример: // [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
// На выходе [1, 17]

const arr1 = [7, 17, 1, 9, 7, 7, 7, 1, 17, 56, 56, 23];
const arr2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

// функция для нахождения повторяющихся элементов в массиве
const findRepeat = (array) => {
  // объявляем коллекцию уникальных значений
  let repeatSet = new Set();

  // итерируем массив и ищем повторяющиеся значения в нем
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] === array[i]) {
        // если значение повторяется добавляем его в множество
        repeatSet.add(array[j]);
      }
    }
  }
  // объявляем массив для добавления найденных значений
  const duplicates = [];

  // итеририруем объект и добавляем его элементы в массив
  for (let element of repeatSet) {
    duplicates.push(element);
  }

  return duplicates;
};

// функция для поиска одинаковых значений в двух массивах
const findSameValues = (array1, array2) => {
  // находим дубли в первом массиве
  const duplicates1 = findRepeat(array1);

  // если дублей нет, то не зачем их искать во втором, выдаем сообщение что дубли не найдены
  if (duplicates1.length === 0) return "Дубликатов в массиве не найдено";

  // находим дубли во втором массиве
  const duplicates2 = findRepeat(array2);

  // объединяем массивы в один
  const concatArray = duplicates1.concat(duplicates2);

  // используем уже имеющуюся функцию для поиска дублей
  const sameValues = findRepeat(concatArray);

  return sameValues;
};

// выводим результат поиска дублей в массивах в консоль
console.log(findSameValues(arr1, arr2));