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

// 接口之间的继承
interface Alarm {
    alert();
}

interface LightableAlarm extends Alarm {
    lightOn();
    lightOff();
}
class Car implements Alarm {
        alert() {
            console.log('哒哒哒')
        }
        lightOn() {
            console.log('灯开了')
        }
        lightOff() {
            console.log('灯关了')
        }
    }
let a = new Car()

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;