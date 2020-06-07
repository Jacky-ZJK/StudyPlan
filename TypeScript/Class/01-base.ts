/**
 * 类的继承
 * 
 * 衍生：
 * 类的兼容性问题
 * 修饰符：public,private,protected,readonly,static
 */
class Animal {
  constructor(private _name: string) {}
  protected move(distanceInMeters: number = 0): void {
    console.log(`${this._name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  public constructor(theName: string) {
    super(theName); 
  }
  public move(distanceInMeters: number): void {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}
let dog = new Dog("Sammy the Python");
dog.move(15);

/**
 * 存取器
 */
class Employee {
  constructor(private _fullname: string) {}
  get fullName(): string {
    return this._fullname;
  }
  set fullName(theName: string) {
    this._fullname = theName;
  }
}
let employee = new Employee("mark");
console.log(employee.fullName);
employee.fullName = "jacky";
console.log(employee.fullName);

/**
 * 抽象类
 * 
 * abstract特性:不能实例化，可继承，与接口类似
 * abstract与interface区别
 */
abstract class Department {
  protected constructor(private _name: string) {}
  printName(): void {
    console.log('Department name: ' + this._name);
  }
  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor(){
    super("Accounting and Auditing");
  }
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }
  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在