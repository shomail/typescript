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

//Generic Map class

class GenMap<T> {
  private map: {[key: string]: T} = {};

  setItem(key: string, item: T) {
    this.map[key] = item;
  }

  getItem(key: string) {
    return this.map[key];
  }

  clear() {
    this.map = {}
  }

  printMap() {
    for(let key in this.map) {
      console.log(`${key} => ${this.map[key]}`)
    }
  }
}

const numMap = new GenMap<number>();
numMap.setItem('cars', 11);
numMap.setItem('bikes', 15);
numMap.setItem('cycles', 26);
numMap.printMap();

const personMap = new GenMap<string>();
personMap.setItem('name', 'sbt');
personMap.setItem('game', 'call of duty'); 
personMap.setItem('score', '250pts'); 
personMap.printMap();