// public
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('jack');
console.log(a.name);
a.name = 'tom';
console.log(a.name);
