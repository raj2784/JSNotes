//Dom manipulation
//refer the project guess number

// JS events

//Class in JS

function Employee2(employeeName, email, password) {
  (this.employeeName = employeeName),
    (this.email = email),
    (this.password = password);
}

Employee2.prototype.enryptPassword = function () {
  return `${this.password}#%`;
};

const ben = new Employee2("ben", "ben@gmail.com", "123");

console.log(ben.enryptPassword());

class Employee3 {
  constructor(employeeName, email, password) {
    this.employeeName = employeeName;
    this.email = email;
    this.password = password;
  }

  enryptPassword() {
    return `${this.password}%#`;
  }
}

const james = new Employee3("james", "james@gmail.com", "123");

console.log(james.enryptPassword(), james.email);

// super key word give power to class can use inharited class property

class Employee4 extends Employee3 {
  constructor(employeeName, email, password) {
    super(employeeName, email, password);
  }

  addNewDepartment() {
    console.log(
      `new department was added  by ${this.employeeName} and email is ${this.email} and password is ${this.password}`
    );
  }
}

const vella = new Employee4("vella", "vella@gmail.com", "142");

console.log(vella.employeeName, vella.email, vella.password);

console.log(vella.addNewDepartment());

//_property treated as private fields in JS now days using as #property

class MTechno {
  constructor(empName, empEamil, empPassword) {
    (this.empName = empName),
      (this.empEamil = empEamil),
      (this.empPassword = empPassword);
  }

  get empPassword() {
    return this._empPassword.toUpperCase();
  }

  set empPassword(value) {
    this._empPassword = value;
  }
}

const Donald = new MTechno("donald", "donald@gmail.com", "donald@#@");

console.log(Donald._empPassword);

//Lexical scope

function outer() {
  let stdName = "Rajan";
  function innerOne() {
    let secret = "my123";
    console.log("inner", stdName);
  }
  function innerTwo() {
    console.log("innerTow", stdName);
  }
  innerOne();
  innerTwo();
}

outer();
