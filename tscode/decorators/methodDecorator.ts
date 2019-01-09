//Method & property decorator

//method decorator gets these three args
function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  };
}

//property decorator
function overwriteable(value: boolean) {
  return function(target: any, propName: string): void {
    console.log(`${propName} changed`);
  };
}

class Slack {
  @overwriteable(false)
  username: string = '';

  constructor(name: string) {
    this.username = name;
  }

  @editable(false)
  sendMessage() {
    console.log(`${this.username} sends new message`);
  }

  editUserName(name: string) {
    this.username = name;
  }
}

//we can edit the sendMessage function easily after class instantiated
//we will create a method decorator to make method editable or non editable

const slack = new Slack('shomail');
slack.sendMessage();
slack.editUserName('shomail tahir');
slack.sendMessage();
// slack.sendMessage = () => console.log('hello message'); //now it will produce error

//Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log(`Target: ${target}, methodName: ${methodName}, paramIndex: ${paramIndex}`);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printCourseStudents(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(`Total students in ${this.name} are: 20000`);
    } else {
      console.log(`Full time students in ${this.name} are: 1000`);
    }
  }
}

const course = new Course('Intro to Programming 101');

course.printCourseStudents('none', true);
course.printCourseStudents('none', false);
