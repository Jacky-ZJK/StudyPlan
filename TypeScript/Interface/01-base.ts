interface SquareConfig {
  color: string;
  width?: number;
  readonly x?: number;
  [propName: string]: any;
}
/** 衍生 
 * ReadonlyArray<T>
 * readonly 与 const 的比较
 * 额外的属性检测，解决方法有三种
*/

function createSquare(config: SquareConfig): any {
  // if (config.propName) {
  //   return "无法识别的参数";
  // }
  console.log(config);
  let newSquare = {color: "white", width: 100};
  console.log(config.color, config.width);
  return newSquare;
}

// let config = {color: 'red', widthd: 50};
// console.log(config as SquareConfig);
console.log(createSquare({color: 'red', widthd: 50}));


/**
 * 函数类型接口
*/

interface SearchFun {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFun;
mySearch = function (src: string, sub: string) {
  return sub.indexOf(src) > -1;
}

console.log(mySearch("hell", "hello world"));

/**
 * 可索引的类型接口
 */

interface AnyArray {
  [index: number]: any;
}

let myArray: AnyArray;
myArray = ["hell", 123, true];
console.log(myArray[0], myArray[1], myArray[2]);

/**
 * 类类型接口
 */

interface ClockConstructor {
  new (h: number, m: number): ClockInterface;
}

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

function createClock(ctor: ClockConstructor, h: number, m: number): ClockInterface {
  return new ctor(h, m);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date): void {
      this.currentTime = d;
      console.log(this.currentTime);
  }
  constructor(h: number, m: number) {
    this.currentTime = new Date();
  }
}

let myClock: Clock = createClock(Clock, 10, 20);
myClock.setTime(new Date());

/**
 * 继承接口
 */
interface Shape1 {
  color: string;
}
interface Shape2 {
  heigh: number;
}
interface Square extends Shape1, Shape2 {
  width: number;
}
function mySquare(config: Square): void {
  console.log(config.color, config.width, config.heigh);
}
mySquare({color: "red", width: 180, heigh: 180});

/**
 * 混合类型
 */
interface Counter {
  (start: number): number;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number): number { return start;};
    counter.interval = 123;
    counter.reset = function (): number { return 321 };
    return counter;
}
let c = getCounter();
console.log(c(10), c.reset(), c.interval)

/**
 * 接口继承类
 * 
 * 作用：只允许某个类或其子类实现接口，因为接口中包含父类中的成员
 */
class Control {
  private state: any;
  public  foo: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select(): void {
    console.log(this, "select")
  }
}
let button: Button = new Button();
button.select();
