//Generic class
//it's a convention to use 'U' with 'T' if you use multiple types in generic
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue!: T;
  multiplyValue!: U;
  calculate(): number {
    //here we are casting them to numbers with +
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 4;
console.log(simpleMath.calculate());