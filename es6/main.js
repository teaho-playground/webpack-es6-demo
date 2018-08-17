import Point from './Point.js';
import Asyn from './Asyn.js';

var body = document.querySelector('body');
body.textContent = 'Good point: ' + new Point(1, 23);


let asyn = new Asyn();



let callback = () => {
    return new Promise((resolve, reject) => {
        setTimeout((time)=>{
            console.log(`waitting for you ${time}`);
            resolve({'msg': 'task done'});
        }, time || 5000)
    })
};


let resFunc = null;

// asyn.callable(() => {resFunc = callback()});

const exec = async function () {
    let result = await callback();
    console.log('result after long time ===>', result);
    return result;
};


console.debug("shit");
console.debug("shit4");
console.debug(exec().then(data => console.debug(data)));
// console.debug(exec());


//online demo
/*const longTimeTask = function (time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`等了 ${time||'xx'} 年，终于回信了`);
            resolve({'msg': 'task done'});
        }, time||1000)
    })
}


const exec1 = async function () {
    let result = await longTimeTask();
    console.log('result after long time ===>', result);
}
// 查看函数内部执行顺序
exec1();
// => 等了 xx 年，终于回信了
// => result after long time ===> Object {msg: "task done"}

//查看函数总体返回值
console.log(exec1());*/


// function testable(target) {
//     target.isTestable = true;
// }
//
// @testable
// class MyTestableClass {}
//
// console.log(MyTestableClass.isTestable)