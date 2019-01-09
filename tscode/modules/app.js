"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { PI, calcCir } from './Circle';
//also import all functions and assign it to an alias
var Circle = __importStar(require("./Circle"));
var Rectangle_1 = __importDefault(require("./Rectangle"));
console.log(Circle.calcCir(23));
console.log(Circle.PI);
console.log(Rectangle_1.default(10, 44));
