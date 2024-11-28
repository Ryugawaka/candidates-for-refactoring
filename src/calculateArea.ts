enum ShapeType {
  Circle,
  Square,
}
// убрал бесполезную переменную
function calculateArea(shape: ShapeType, radiusOrSide: number): number {
  switch (shape) {
    case ShapeType.Circle:
      return Math.PI * Math.pow(radiusOrSide, 2);
    case ShapeType.Square:
      return Math.pow(radiusOrSide, 2);
  }
}

console.log(calculateArea(ShapeType.Circle, 5)); // Output: 78.54
