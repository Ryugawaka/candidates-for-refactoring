// убрал ненужный блок условия
function processUserData(user) {
  // Получаем данные пользователя
  const {age} = getUserData(user);

  // Проверяем данные пользователя
  if (age <= 18) {
    // Выводим ошибку
    console.error('User is under 18');
    return;
  } 
  // Обрабатываем данные
  processUser(user);
}
