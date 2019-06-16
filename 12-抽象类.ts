abstract class Animal {
    public name
    public constructor(name) {
        this.name = name
    }
    public abstract sayHi();
} 
class Cat extends Animal {
    public sayHi() {
        return '呵呵呵'
    }
}
// let a = new Animal('tom')