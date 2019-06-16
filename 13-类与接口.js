var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('哒哒哒');
    };
    return Car;
}());
var a = new Car();
a.alert();
