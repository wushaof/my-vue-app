let isDone: boolean = true
let list: number[] = [1,2]

let list1: Array<number|string> = [1,2, 't']

let x: [number, string]
x = [9, '5']

enum Color { Red = 1, Blue = 2, Yello = 4}
let c: Color = Color.Red

let colorName: string = Color[4]

let notType: any = 4

let list2: any[] = [1,'r']

function warnUser(): void {
  console.log('This is my warning message')
}

let unusa: void = undefined

let someVal: any = 'this is value'
let strLen: number = (<string>someVal).length
let strleng: number = (someVal as string).length

function f([first, second]: [number, number]) {}

type C = {a: number, b?: number}
function f1({a, b}: C): void {}

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}
let po: Point = { x: 1, y: 5 }

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// 字符串索引签名
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// 函数类型, 函数的参数名不需要与接口里定义的名字相匹配, 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

// 索引类型
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
// 只读索引
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

// 继承类
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
// 函数，对象
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

// 使用类
class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

