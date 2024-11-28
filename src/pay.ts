// поменял метод на forEach для читаемости, сделал более понятное название функции
const payEmployees = () => {
  employees.forEach((e) => {
    if (e.isPayday()) {
      const pay = e.calculatePay();

      e.deliverPay(pay);
    }
  })
};
