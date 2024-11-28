//  добавил возвращаемое значение, типизация
const rollMany = (n: number, pins: number): number[] => {
  for (let rollCount = 0; rollCount < n; rollCount++) {
    console.log(pins);
  }
  return new Array(n).fill(pins)
};
