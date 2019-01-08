function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

function logged(constructorFn: Function) {
  console.log('Plant say hi!');
}

@logged
@printable
class Plant {
  name = 'Green plant';
}

const plant = new Plant();
(<any>plant).print();
