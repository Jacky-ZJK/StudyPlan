"use strict";
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
/**
 * 类的继承
 *
 * 衍生：
 * 类的兼容性问题
 * 修饰符：public,private,protected,readonly,static
 */
var Animal = /** @class */ (function () {
    function Animal(_name) {
        this._name = _name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this._name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(theName) {
        return _super.call(this, theName) || this;
    }
    Dog.prototype.move = function (distanceInMeters) {
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Dog;
}(Animal));
var dog = new Dog("Sammy the Python");
dog.move(15);
/**
 * 存取器
 */
var Employee = /** @class */ (function () {
    function Employee(_fullname) {
        this._fullname = _fullname;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullname;
        },
        set: function (theName) {
            this._fullname = theName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee("mark");
console.log(employee.fullName);
employee.fullName = "jacky";
console.log(employee.fullName);
/**
 * 抽象类
 *
 * abstract特性:不能实例化，可继承，与接口类似
 * abstract与interface区别
 */
var Department = /** @class */ (function () {
    function Department(_name) {
        this._name = _name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this._name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
