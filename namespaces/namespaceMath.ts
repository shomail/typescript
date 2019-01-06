//you can nest namepsace inside another namespace
namespace MathObj {
  const PI = 3.14;
  export namespace Circle {
    export function calcCir(diameter: number) {
      return diameter * PI;
    }
  }

  export namespace Rectangle {
    export function calcRect(width: number, length: number) {
      return width * length;
    }
  }
}
