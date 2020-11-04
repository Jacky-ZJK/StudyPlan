var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** 衍生
 * ReadonlyArray<T>
 * readonly 与 const 的比较
 * 额外的属性检测，解决方法有三种
*/
function createSquare(config) {
    // if (config.propName) {
    //   return "无法识别的参数";
    // }
    console.log(config);
    var newSquare = { color: "white", width: 100 };
    console.log(config.color, config.width);
    return newSquare;
}
// let config = {color: 'red', widthd: 50};
// console.log(config as SquareConfig);
console.log(createSquare({ color: 'red', widthd: 50 }));
var mySearch;
mySearch = function (src, sub) {
    return sub.indexOf(src) > -1;
};
console.log(mySearch("hell", "hello world"));
var myArray;
myArray = ["hell", 123, true];
console.log(myArray[0], myArray[1], myArray[2]);
function createClock(ctor, h, m) {
    return new ctor(h, m);
}
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
        console.log(this.currentTime);
    };
    return Clock;
}());
var myClock = createClock(Clock, 10, 20);
myClock.setTime(new Date());
function mySquare(config) {
    console.log(config.color, config.width, config.heigh);
}
mySquare({ color: "red", width: 180, heigh: 180 });
function getCounter() {
    var counter = function (start) { return start; };
    counter.interval = 123;
    counter.reset = function () { return 321; };
    return counter;
}
var c = getCounter();
console.log(c(10), c.reset(), c.interval);
/**
 * 接口继承类
 *
 * 作用：只允许某个类或其子类实现接口，因为接口中包含父类中的成员
 */
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () {
        console.log(this, "select");
    };
    return Button;
}(Control));
var button = new Button();
button.select();
