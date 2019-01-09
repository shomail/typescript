//a decorator is a function
//here we attach this decorator to the class
//decorators attached to class gets one argument by ts and it's the constructor of the class
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

//this is how we attach functions as decorators
//to get rid of experimental support error, set experimentalDecorators in config
@logged
class Bill {
  constructor() {
    console.log('Hi');
  }
}

const bill = new Bill();

//Factory example

function logging(value: boolean): Function {
  return value ? logged : () => 0;
}

@logging(true)
class Sport {}
