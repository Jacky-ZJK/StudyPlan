function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayName = function () {
  console.log(this.name)
}

function Student (name, age) {
  Person.call(this, name, age)
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

let s = new Student('Jacky', 18)

console.log(Object.create(Person.prototype).__proto__);
