"use strict";
//Method & property decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//method decorator gets these three args
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
//property decorator
function overwriteable(value) {
    return function (target, propName) {
        console.log(propName + " changed");
    };
}
var Slack = /** @class */ (function () {
    function Slack(name) {
        this.username = '';
        this.username = name;
    }
    Slack.prototype.sendMessage = function () {
        console.log(this.username + " sends new message");
    };
    Slack.prototype.editUserName = function (name) {
        this.username = name;
    };
    __decorate([
        overwriteable(false)
    ], Slack.prototype, "username", void 0);
    __decorate([
        editable(false)
    ], Slack.prototype, "sendMessage", null);
    return Slack;
}());
//we can edit the sendMessage function easily after class instantiated
//we will create a method decorator to make method editable or non editable
var slack = new Slack('shomail');
slack.sendMessage();
slack.editUserName('shomail tahir');
slack.sendMessage();
// slack.sendMessage = () => console.log('hello message'); //now it will produce error
//Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: " + target + ", methodName: " + methodName + ", paramIndex: " + paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printCourseStudents = function (mode, printAll) {
        if (printAll) {
            console.log("Total students in " + this.name + " are: 20000");
        }
        else {
            console.log("Full time students in " + this.name + " are: 1000");
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printCourseStudents", null);
    return Course;
}());
var course = new Course('Intro to Programming 101');
course.printCourseStudents('none', true);
course.printCourseStudents('none', false);
