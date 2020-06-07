"use strict";
/**
 * 函数完整定义
 */
var Add;
Add = function (x, y, z) {
    if (y === void 0) { y = 10; }
    return x + y;
};
/**
 * 默认参数
 *
 * 默认值的参数出现在必须参数前面，用户必须明确的传入undefined值来获得默认值
 */
function Add1(x, y) {
    if (x === void 0) { x = 20; }
    return x + y;
}
Add1(undefined, 10);
/**
 * 剩余参数
 */
function Add2(x, y) {
    if (x === void 0) { x = 20; }
    var z = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        z[_i - 2] = arguments[_i];
    }
    var ret = x + y;
    for (var _a = 0, z_1 = z; _a < z_1.length; _a++) {
        var item = z_1[_a];
        ret += item;
    }
    return ret;
}
console.log(Add2(undefined, 20, 10, 10, 25, 30));
