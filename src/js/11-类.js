"use strict";
// public
// class Animal {
//     public name
//     public constructor(name) {
//         this.name = name
//     }
// }
//  let a = new Animal('jack')
//  console.log(a.name)
//  a.name = 'tom'
//  console.log(a.name)
// private
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('jack');
console.log(a.name);
