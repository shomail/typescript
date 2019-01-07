"use strict";
//Generic class
//it's a convention to use 'U' with 'T' if you use multiple types in generic
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        //here we are casting them to numbers with +
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 4;
console.log(simpleMath.calculate());
