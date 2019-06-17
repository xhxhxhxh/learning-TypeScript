"use strict";
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
// 函数表达式
var mySum = function (x, y) {
    return x + y;
};
var search = function sum(x, y) {
    return true;
};
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = '123'; }
    if (firstName) {
        return firstName + ' ' + lastName;
    }
    else {
        return lastName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName(undefined, 'Tom');
