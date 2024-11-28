// добавил комментарии, разделил для лучшей читаемости
function calculateWeeklyPay(overtime: boolean): number {
  const tenthRate: number = getTenthRate();
  const tenthsWorked: number = getTenthsWorked();

  const straightTime: number = Math.min(400, tenthsWorked);
  const overTime: number = Math.max(0, tenthsWorked - straightTime);

  // оплата за обычное время
  const straightPay: number = straightTime * tenthRate;

  const overtimeRate: number = overtime ? 1.5 : tenthRate;
  // оплата за переработки
  const overtimePay: number = Math.round(overTime * overtimeRate);
  
  
  return straightPay + overtimePay;
}
