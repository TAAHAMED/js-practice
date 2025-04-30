function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}.`;
};

function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  return `${this.name} is studying for grade ${this.grade}.`;
};

const person1 = new Person("Adib", 30);
const student1 = new Student("Akshay", 20, "A");

console.log(person1.greet());
console.log(student1.greet());
console.log(student1.study());
