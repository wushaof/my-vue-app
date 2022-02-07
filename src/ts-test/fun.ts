let myAdd: (x: number, y: number) => number = function (x, y) {
  return  x + y
}

// 剩余参数
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName

// 箭头函数能保存函数创建时的 this值，而不是调用时的值：
// this参数在回调函数里
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}
// 重载
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };

// 