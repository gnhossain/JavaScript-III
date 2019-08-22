/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
    in the global scope, the value of "this" will be the Global Object;

* 2. Implicit Binding
    Whenever a function is called with a dot, the object before that dot is "this".

* 3. New Binding
    When a constructor function is used, "this" refers to the specific instance of the object that is created and returned the new keyword.

* 4. Explicit Binding
     "this" is explicitly defined, when JavaScript’s call or apply method is used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {

    console.log("Hello" +  name)
    console.log(this); 

}
  sayName("Judy");

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Gul');

// Principle 3

// code example for New Binding

function Friend(greeting){
      this.greeting = greeting;
    }
    
    let myFriend = new Friend('Hello!');
    
    console.log(myFriend.greeting); 

// Principle 4

// code example for Explicit Binding


let person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  let person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  console.log(person1.fullName.call(person2));