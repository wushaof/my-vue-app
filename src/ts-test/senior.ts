// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
// interface Bird {
//   fly();
//   layEggs();
// }

// interface Fish {
//   swim();
//   layEggs();
// }

// function getSmallPet(): Fish | Bird {
//   // ...
// }

// let pet = getSmallPet();
// pet.layEggs(); // okay
// pet.swim();    // errors


// 以下会报错
// let pet = getSmallPet();

// 每一个成员访问都会报错
// if (pet.swim) {
//     pet.swim();
// }
// else if (pet.fly) {
//     pet.fly();
// }

// 为了让这段代码工作，我们要使用类型断言：
// let pet = getSmallPet();

// if ((<Fish>pet).swim) {
//     (<Fish>pet).swim();
// }
// else {
//     (<Bird>pet).fly();
// }

// 用户自定义的类型保护
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (<Fish>pet).swim !== undefined;
// }

// typeof 类型保护
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
      return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// typeof类型保护*只有两种形式能被识别
// typeof v === "typename", "typename"必须是 "number"， "string"， "boolean"或 "symbol"

// instanceof类型保护
// 默认情况下，类型检查器认为 null与 undefined可以赋值给任何类型。 null与 undefined是所有其它类型的一个有效值。

// 可选参数和可选属性, 使用了 --strictNullChecks，可选参数会被自动地加上 | undefined:
function f(x: number, y?: number) {
  return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
// f(1, null); // error, 'null' is not assignable to 'number | undefined'

// 如果编译器不能够去除 null或 undefined，你可以使用类型断言手动去除。
// 语法是添加!后缀： identifier!从 identifier的类型里去除了 null和 undefined：


// 类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}

type Container<T> = { value: T };

type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
}

// 然而，类型别名不能出现在声明右侧的任何地方。
// type Yikes = Array<Yikes>; // error

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

// 数字字面量类型
function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
  // ...
}

// 可辨识联合
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
type Shape1 = Square | Rectangle | Circle;
function area(s: Shape1) {
  switch (s.kind) {
      case "square": return s.size * s.size;
      case "rectangle": return s.height * s.width;
      case "circle": return Math.PI * s.radius ** 2;
  }
}

// keyof T， 索引类型查询操作符, 对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合。 例如
// let personProps: keyof Person; // 'name' | 'age'
// keyof Person是完全可以与 'name' | 'age'互相替换的
// 第二个操作符是 T[K]， 索引访问操作符,eg
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]; // o[name] is of type T[K]
}

// 映射类型
type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };

type Readonly1<T> = {
  readonly [P in keyof T]: T[P];
}
type Partial1<T> = {
  [P in keyof T]?: T[P];
}

type Nullable<T> = { [P in keyof T]: T[P] | null }
type Partial12<T> = { [P in keyof T]?: T[P] }

type Proxy<T> = {
  get(): T;
  set(value: T): void;
}
// type Proxify<T> = {
//   [P in keyof T]: Proxy<T[P]>;
// }
// function proxify<T>(o: T): Proxify<T> {
//  // ... wrap proxies ...
// }
// let proxyProps = proxify(props);
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
    // console.log(pet); // "species"
}
for (let pet of pets) {
    // console.log(pet); // "Cat", "Dog", "Hamster"
}