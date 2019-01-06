/// <reference path="namespaceMath.ts" />

//instead of typing all namespace we can create namespace alias with import but it's not es6 import syntax
import CircleMath = MathObj.Circle;
import RectangleMath = MathObj.Rectangle;

console.log(CircleMath.calcCir(10));
console.log(RectangleMath.calcRect(10, 33));
