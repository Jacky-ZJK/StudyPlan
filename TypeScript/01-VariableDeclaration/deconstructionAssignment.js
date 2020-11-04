var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    console.log(Reflect.ownKeys(s));
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/**解构赋值 */
// let [a, b]: [number, number] = [1, "asd"]; //err
var _a = [1, 2], a = _a[0], b = _a[1];
console.log(a, b);
var _b = { o: 100, h: 12, k: 13, j: 14 }, o = _b.o, j = __rest(_b, ["o"]);
console.log(o, j);
