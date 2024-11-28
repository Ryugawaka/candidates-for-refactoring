// помимо конструктора можно добавить методы для вывода информации
class Car {
  private make: string;
  private model: string;
  private year: number;
  private color: string;
  private price: number;
  private mileage: number;

  constructor(make: string, model: string, year: number, color: string, price: number, mileage: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.mileage = mileage;
  }
}
