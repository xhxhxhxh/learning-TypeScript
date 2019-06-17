interface Person {
    name: string;
    age?: number; // 可选属性
    [propName: string]: any
    readonly id: number
}

let Tom: Person = {
    name: 'Tom',
    age: 12,
    gender: 'male',
    id: 1
}
// Tom.id = 2