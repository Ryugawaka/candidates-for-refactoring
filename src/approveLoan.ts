// улучшил читаемость условие, убрал дублирование лишнего кода
const {age, employmentStatus, criminalRecord} = user
const isAgeValid = age >= 18 && age <= 65
if (
  isAgeValid &&
  employmentStatus === 'employed' &&
  !criminalRecord 
) {
  approveLoan();
}
