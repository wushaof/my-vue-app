// 命名空间
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
  export let suffix = "";
  export let prefix = "Hello, ";
}

// console.log(buildLabel("Sam Smith"));

class C {
  constructor() {
      /** @type {number | undefined} */
      this.prop = undefined;
      /** @type {number | undefined} */
      this.count;
  }
}

let c = new C();
c.prop = 0;          // OK
c.count = "string";  // Error: string is not assignable to number|undefined

// JSDoc var-args参数声明
/** @param {...number} args */
function sum(/* numbers */) {
  var total = 0
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

/** @type{Array} */
var x = [];

x.push(1);        // OK
x.push("string"); // OK, x is of type Array<any>

/** @type{Array.<number>} */
var y = [];

y.push(1);        // OK
y.push("string"); // Error, string is not assignable to number