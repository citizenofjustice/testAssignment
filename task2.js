// Написать метод/функцию, который/которая на вход принимает число (float),
// а на выходе получает число, округленное до пятерок.
// Пример: // 27 => 25, 27.8 => 30, 41.7 => 40.

const roundByFive = (floatNumber) => {
  const result = Math.round(floatNumber / 5) * 5;
  return result;
};

const result1 = roundByFive(41.7);
const result2 = roundByFive(68.8);
const result3 = roundByFive(-20.7);
const result4 = roundByFive(-22.592);

console.log(`${result1} , ${result2} , ${result3} , ${result4}`);
