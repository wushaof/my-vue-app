enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

enum Response1 {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Response1): void {
  // ...
}

respond("Princess Caroline", Response1.No)

enum Enum {
  A
}
let a1 = Enum.A;
let nameOfA = Enum[a1]; // "A"

const enum Enum1 {
  A = 1,
  B = A * 2
}

// 常量枚举
const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
