// 类型变量 T 返回值的类型与传入的类型一致
function identity<T>(arg: T): T {
  return arg
}
let myIdentity: <T>(arg: T) => T = identity

// 调用对象字面量返回
let myIden: { <T>(arg: T): T } = identity

// 接口定义
interface GenericIdentityFn {
  <T>(arg: T): T
}
function indetity1<T>(arg: T): T {
  return arg
}
let myId: GenericIdentityFn = indetity1

let output = identity<string>('mystring')

// 类型推断
let output1 = identity('mystring')

function loggerIdentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
function loggIndentity1<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}

// 泛型参数当作整个接口的一个参数
interface GenericIdentityFn1<T> {
  (arg: T): T
}
function idtentity<T>(arg: T): T {
  return arg
}
let myid1: GenericIdentityFn1<number> = identity


// 泛型类，泛型类使用（ <>）括起泛型类型，跟在类名后面
// 1. 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };

// extends实现约束
interface lengthWise {
  length: number
}
function logg<T extends lengthWise>(arg: T): T {
  return arg
}

// 在泛型约束中使用类型参数
function getProperty(obj: T, key: K) {
  return obj[key]
}
let y = { a: 1, b: 2, c: 3, d: 4 }
getProperty(y, "a"); // okay

// 在泛型里使用类类型
// 在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，
function create<T>(c: {new(): T; }): T {
  return new c();
}

// 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!
