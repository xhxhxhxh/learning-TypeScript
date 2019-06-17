"use strict";
// interface Alarm {
//     alert()
// }
// interface Light {
//     lightOn();
//     lightOff();
// }
// class Car implements Alarm, Light {
//     alert() {
//         console.log('哒哒哒')
//     }
//     lightOn() {
//         console.log('灯开了')
//     }
//     lightOff() {
//         console.log('灯关了')
//     }
// }
// let a = new Car()
// a.alert()
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('哒哒哒');
    };
    Car.prototype.lightOn = function () {
        console.log('灯开了');
    };
    Car.prototype.lightOff = function () {
        console.log('灯关了');
    };
    return Car;
}());
var a = new Car();
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
