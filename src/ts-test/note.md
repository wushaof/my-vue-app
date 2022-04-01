arguments
1. 在严格模式下，剩余参数、默认参数和解构赋值参数的存在不会改变 arguments对象的行为（反之亦然）
2. 当非严格模式中的函数有包含剩余参数、默认参数和解构赋值，那么arguments对象中的值不会跟踪参数的值（反之亦然）

Array
push => 数组长度
shift => 头部删除的元素
pop => 尾部删除的元素

箭头函数
不能用构造函数，会报错

this绑定优先级为
显式绑定 > 隐式绑定 > 默认绑定
new绑定 > 隐式绑定 > 默认绑定
显式绑定和new绑定 同时存在会报错

原型链
实例之后的对象调用__proto__指针指向的 等于被实例的构造函数的prototype！
test01.__proto__ = Test.prototype  // true
每个对象都有一个 proto 的属性，指向该对象的原型。实例后通过对 proto 属性的访问 去对 prototype对象进行访问；原型链是由原型对象组成的，每个对象都有__proto__属性，指向创建该对象的构造函数的原型 ，然后通过__proto__属性将对象链接起来，组成一个原型链，用来实现继承和共享属性！

var zhangsan = new lisi.constructor('张三', 20) // 使用constructor来实例化！！！
new lisi.constructor() === new User()  // true

Set
1. 虽然这两个值具有相同的键值对，但是set是对内存(memory)中不同对象进行引用，通过判断是否使用memory中相同对象来确认二者是否相同，这就和{a:1} === {a:1}为false是一样的原因。

事件机制
js 事件触发分为三个阶段
1. Capturing ：捕获阶段
2. Target：目标阶段
3. Bubbling：冒泡阶段

标签模板
1. 标签模板其实不是模板，而是函数调用的一种特殊方式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。
2. 换句话说，标签模板就是让字符串模板跟在函数名后面，该函数来处理字符串模板

链式调用
class LazyMan {
    constructor(name) {
        console.log(name);
        this.callBacks=[];
        setTimeout(() => this.next(), 0)
    }

    eat(meal){
        this.callBacks.push(()=>{
            console.log(`i am earing ${meal}`)
        })
        return this;
    }

    _sleep(seconds) {
        return new Promise((rs) => {
            setTimeout(() => rs(), seconds*1000)
        })
    }
    
    sleepFirst(seconds){
        this.callBacks.unshift(() => this._sleep(seconds))
        return this;
    }
    
    sleep(seconds){
        this.callBacks.push(() => this._sleep(seconds))
        return this;
    }

    async next(){
        let fun;
        while(fun = this.callBacks.shift()) {
            await fun()
        }
    }
    
};
new LazyMan('tom').eat('lunch').eat('dinner').sleepFirst(2).sleep(3).eat('junk')