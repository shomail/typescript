function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

function loggedIn(constructorFn: Function) {
  console.log('Plant logged in system!');
}

@loggedIn
@printable
class Plant {
  name = 'Green plant';
}

const plant = new Plant();
(<any>plant).print();
