function sum(x: number, y: number): number {
    return x + y
}
console.log(sum(1,2))

// 函数表达式
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 接口形式
interface searchFun {
    (x: number, y: number): boolean
}
let search: searchFun = 
    function sum(x: number, y: number) {
        return true
    } 


function buildName(firstName: string = '123', lastName: string) {
    if (firstName) {
        return firstName + ' ' + lastName;
    } else {
        return lastName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName(undefined, 'Tom');
