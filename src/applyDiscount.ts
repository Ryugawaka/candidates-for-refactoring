
// добавил проверки на валидность в модуль 1
// Модуль 1
function calculateTotalPrice(items) {

  return Array.isArray(items) ? items.reduce((acc,item ) => {if (item.price) {
    return acc + Number(item.price)
  } return acc}, 0) : new Error('invalid items');
}

// Модуль 2
function applyDiscount(totalPrice, discountPercentage) {
  return totalPrice * (1 - discountPercentage / 100);
}
