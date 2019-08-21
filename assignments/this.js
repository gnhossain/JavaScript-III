/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
    in the global scope, the value of "this" will be the Global Object;

* 2. Implicit Binding
    Whenever a function is called with a dot, the object before that dot is "this".

* 3. New Binding
    When a constructor function is used, "this" refers to the specific instance of the object that is created and returned.

* 4. Explicit Binding
     "this" is explicitly defined, when JavaScript’s call or apply method is used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Gul");

// Principle 2

// code example for Implicit Binding



// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding