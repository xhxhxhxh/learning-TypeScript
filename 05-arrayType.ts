let arr: (number | string)[] = [1,2,3]
arr.push('1')

// 接口中
interface NumberArray {
    [index: number]: number | string
}
let arr2: NumberArray = [1,2,3,'1']