"use strict";
//you can nest namepsace inside another namespace
var MathObj;
(function (MathObj) {
    var PI = 3.14;
    var Circle;
    (function (Circle) {
        function calcCir(diameter) {
            return diameter * PI;
        }
        Circle.calcCir = calcCir;
    })(Circle = MathObj.Circle || (MathObj.Circle = {}));
    var Rectangle;
    (function (Rectangle) {
        function calcRect(width, length) {
            return width * length;
        }
        Rectangle.calcRect = calcRect;
    })(Rectangle = MathObj.Rectangle || (MathObj.Rectangle = {}));
})(MathObj || (MathObj = {}));
