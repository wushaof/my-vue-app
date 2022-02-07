// 上下文类型
// 如果上下文类型表达式包含了明确的类型信息，上下文的类型被忽略。
window.onmousedown = function(mouseEvent: any) {
  console.log(mouseEvent.button);  //<- Now, no error is given
};

// 类型兼容性
let x1 = (a: number) => 0;
let y1 = (b: number, s: string) => 0;

y1 = x1; // OK
// x1 = y1; // Error

// 下面来看看如何处理返回值类型，创建两个仅是返回值类型不同的函数：
// 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
let x2 = () => ({name: 'Alice'});
let y2 = () => ({name: 'Alice', location: 'Seattle'});

x2 = y2; // OK
// y2 = x2; // Error, because x() lacks a location property

function invokeLater(args: any[], callback: (...args: any[]) => void) {
  /* ... Invoke callback with 'args' ... */
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));

// 枚举
// 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。比如，
enum Status { Ready, Waiting };
enum Color { Red1, Blue1, Green };

let status1 = Status.Ready;
// status = Color.Green;  // Error


// 类
// 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。 比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。
// class Animal {
//   feet1: number;
//   constructor(name: string, numFeet: number) { }
// }

// class Size {
//   feet1: number;
//   constructor(numFeet: number) { }
// }

// let a22: Animal;
// let s22: Size;

// a22 = s22;  // OK
// s22 = a22;  // OK