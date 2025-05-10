<!-- Question 1: What is constructor? -->

In JavaScript, a constructor is a special function used to create and initialize objects.
You usually define it using a regular function or a class.

Here’s the basic idea:

When you call a constructor with new, it creates a new object.

this inside the constructor refers to that new object.

You can add properties and methods to the object inside the constructor.

Example using a function:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Alice', 25);
console.log(person1.name); // Alice
console.log(person1.age);  // 25

Example using a class (modern way):

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person2 = new Person('Bob', 30);
console.log(person2.name); // Bob
console.log(person2.age);  // 30
:

🔹 Constructor = a blueprint for creating objects easily.

You have:

let vehicle = {
  wheels: '4',
  fuelType: 'Gasoline',
  color: 'Green'
};

let carProps = {
  type: {
    value: 'Volkswagen'
  },
  model: {
    value: 'Golf'
  }
};

var car = Object.create(vehicle, carProps);
console.log(car);


What is happening here:
vehicle is an object with some default properties (wheels, fuelType, color).
carProps defines extra properties (type, model) that you want car to have in addition to what it inherits from vehicle.

Object.create(vehicle, carProps) creates a new object:

It inherits from vehicle (meaning if a property is not found on car, JavaScript will look at vehicle).
It adds the properties in carProps as own properties on car.

When you console.log(car), you will see:t
{
  type: "Volkswagen",
  model: "Golf"
}

But under the hood, car will still inherit from vehicle!

If you do:

console.log(car.wheels);   // 4   (inherited from vehicle)
console.log(car.fuelType); // Gasoline (inherited from vehicle)
console.log(car.color);    // Green (inherited from vehicle)
console.log(car.type);     // Volkswagen (own property)
console.log(car.model);    // Golf (own property)
✅ Summary:

car has its own type and model.

If you try to access wheels, fuelType, or color, it falls back to the vehicle prototype.


<!-- ------------------------------------------ ---------------------------------------------------------------->

<!-- Question 2: Call, Apply, Bind in JavaScript-->

🔹 Call
    call() immediately invokes the function.

You pass the this value (context) and arguments one by one.

Example:

function greet(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}

const employee = { firstName: "John", lastName: "Doe" };

greet.call(employee, "Hello", "How are you?");
Output:
Hello John Doe, How are you?

✅ Tip: Call for Comma-separated arguments

<!--  -->

🔹 Apply
apply() immediately invokes the function.

You pass the this value and arguments as an array.

Example:

greet.apply(employee, ["Hi", "Good Morning!"]);
Output:
Hi John Doe, Good Morning!

✅ Tip: Apply for Array of arguments

<!--  -->

+ Bind
bind() does NOT invoke the function immediately.

Instead, it returns a new function where this is permanently set.

Example:

const greetJohn = greet.bind(employee);
greetJohn("Hey", "What's up?");
Output:
Hey John Doe, What's up?

✅ Tip: Bind for a new function with locked context.

<!--  -->

call and apply are quite similar — both immediately invoke a function with a given this context. The only difference is how we pass arguments: call uses comma-separated arguments, while apply uses an array.

On the other hand, bind doesn't execute the function immediately. It creates a brand-new function where this is permanently bound, and I can call it later whenever I want."

<!-- ------------------------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 3: slice() vs splice() in JavaScript -->

🔹 slice() Method

    Purpose: Returns a shallow copy (a new array) of selected elements from the original array.

Syntax: array.slice(start, end)

start: starting index (inclusive).

end: ending index (exclusive).

Important: It does not modify the original array (immutable).

Supports negative indexes to count from the end.

Examples:

let arr = [1, 2, 3, 4, 5];

arr.slice(0, 2);     // [1, 2]
arr.slice(2, 3);     // [3]
arr.slice(4);        // [5]
arr.slice(-3, -1);   // [3, 4]

<!--  -->

🔹 splice() Method
    
    Purpose: Used to add, remove, or replace elements in an array.

Syntax: array.splice(start, deleteCount, item1, item2, ...)

start: index where changes begin.

deleteCount: how many elements to remove.

item1, item2...: items to insert.

Important: It modifies the original array (mutable).

Examples:

let arr = [1, 2, 3, 4, 5];

arr.splice(0, 2);                   // [1, 2], arr becomes [3, 4, 5]
arr.splice(3);                      // [4, 5], arr becomes [1, 2, 3]
arr.splice(3, 1, "a", "b", "c");     // [4], arr becomes [1, 2, 3, "a", "b", "c", 5]

<!--  -->

The slice() method is used when I want to create a new array by copying selected elements from an existing array.

It doesn’t modify the original array — it’s immutable.
I just provide a start index and an optional end index, and it returns a shallow copy of that portion. Also, it supports negative indexes to count from the end.

On the other hand, splice() is used when I actually want to modify the array itself.

With splice(), I can remove, add, or replace elements. It changes the original array directly and returns an array containing the removed elements.

A simple way I remember it is:
slice is for copying and picking without touching the original,
splice is for editing and changing the original array."

<!-- -------------------------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 4: Difference between == and === in JavaScript -->

🔹 == (Loose Equality or Abstract Equality)
    Purpose: Compares values after type conversion if necessary.

Behavior: If types differ, JavaScript tries to convert and then compares.

Example:

1 == "1";       // true
0 == false;     // true
null == undefined; // true

<!--  -->

🔹 === (Strict Equality)
    Purpose: Compares both value and type without type conversion.

Behavior: Returns true only if both value and type are identical.

Example:

1 === "1";      // false
0 === false;    // false
null === undefined; // false

<!--  -->

🔥 Important Observations
NaN == NaN and NaN === NaN both return false.

Different arrays or objects are never equal ([] == [] is false).

null == undefined is true, but null === undefined is false.

<!--  -->

== is called the loose equality operator. It compares two values after performing type conversion if needed. So if the types are different, JavaScript tries to coerce one type into another before comparison.

On the other hand, === is strict equality. It compares both the type and the value exactly as they are, without doing any conversion.

Because of this, === is generally safer and recommended for comparisons to avoid unexpected bugs.

<!-- -------------------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 5: Lambda Expressions (Arrow Functions) in JavaScript -->

🔹 What are Arrow Functions?

    Arrow functions are a concise way to write function expressions in JavaScript.

Introduced in ES6 (ECMAScript 2015).

They are anonymous (no name) and often used for short, one-liner functions.

<!--  -->

🔹 Key Features
Shorter syntax compared to regular functions.

No own this: They inherit this from their parent scope.

Cannot be used as constructors (no new keyword usage).

No own arguments, super, or new.target.

<!--  -->

🔹 Syntax Examples

const add = (a, b) => a + b;         // Multiple parameters
const multiplyByTen = a => a * 10;    // Single parameter (no parentheses needed)
const logMessage = () => console.log("Hello!");  // No parameters
const returnObject = () => ({ name: "John" }); // Return object (need parentheses)

🎯 When to Use Arrow Functions
For small utilities and callbacks (e.g., in array methods like map, filter, reduce).

When you need to preserve this context (like inside event handlers, promises, etc.).

⚡ Important to Remember
Don't use arrow functions for methods inside classes/objects when you need your own this.

Don't use them when you need to create a constructor function.

<!-- --------------------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 6: let Keyword and let vs var in JavaScript -->

🔹 Purpose of let
    let is used to declare variables that are block-scoped (i.e., limited to the {} block where they are defined).

Introduced in ES6 (2015) to fix issues with var, which was function-scoped and caused confusion.

Variables declared with let are hoisted, but not initialized. (Accessing them before declaration results in a ReferenceError.)

🔹 Example of let Scope

let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); // 30

✅ Notice: The counter inside the if block is different from the outer counter because of block scope.

<!--  -->

🔹 Example Showing Difference

function userDetails(username) {
  if (username) {
    console.log(salary); // undefined (due to var hoisting)
    console.log(age);    // ReferenceError (due to let temporal dead zone)
    
    let age = 30;
    var salary = 10000;
  }
  console.log(salary); // 10000 (accessible, function scope)
  console.log(age);    // Error: age is not defined (block scope)
}

userDetails("John");
✅ salary declared with var is accessible outside the if block because of function scope.
✅ age declared with let is block-scoped and not accessible outside.

<!-- ---------------------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 7:  Temporal Dead Zone (TDZ) in JavaScript -->

🔹 What is Temporal Dead Zone (TDZ)?
    Temporal Dead Zone refers to the time between entering a block and initializing a let or const variable inside that block.

During the TDZ, the variable exists but cannot be accessed — any attempt to access it will throw a ReferenceError.

This happens only with let and const, NOT with var.

var variables are hoisted and initialized with undefined, but let and const are hoisted without initialization, causing the TDZ.

🔹 Example of TDZ

function somemethod() {
  console.log(counter1); // undefined (because of var hoisting)
  console.log(counter2); // ReferenceError (TDZ for let variable)
  
  var counter1 = 1;
  let counter2 = 2;
}

✅ counter1 is hoisted and initialized as undefined.
✅ counter2 is hoisted but stays in TDZ until the let counter2 = 2; line — so accessing it early throws an error.

<!--  -->

🔹 Important Points about TDZ
    TDZ starts from the beginning of the block until the variable's declaration is encountered.

Helps prevent bugs by ensuring variables are not used before they are properly initialized.

Only let and const are affected — not var.

<!-- ------------------------------------------------------------------------------------------------------------------------------------ -->

<!-- Question 8: 🔹 What is an IIFE?    -->


    IIFE stands for Immediately Invoked Function Expression. It’s a JavaScript function that executes immediately after its definition.

It is wrapped in parentheses to ensure that the function is treated as an expression, not a declaration.

The primary use of an IIFE is to create data privacy and avoid polluting the global scope.

IIFE Syntax:

(function() {
  // logic here
})();

🔹 Why Use IIFE?
    Data Privacy: Variables declared inside an IIFE are not accessible outside the function, ensuring encapsulation.

Avoid Global Scope Pollution: By using IIFE, you ensure that variables declared inside do not leak into the global namespace.

Helps in modular programming by organizing code in small, self-contained blocks.

<!--  -->

🔹 Example of IIFE

(function () {
  var message = "IIFE";
  console.log(message); // Outputs: "IIFE"
})();

console.log(message); // Error: message is not defined
The variable message is only accessible inside the IIFE and cannot be accessed outside, making it a private variable.

<!--  -->

🔹 Alternative Syntax for IIFE
    You can also use the arrow function syntax for IIFE:

(() => {
  var message = "IIFE with arrow function";
  console.log(message); // Outputs: "IIFE with arrow function"
})();

<!--  -->

🧠 How to Explain in Interview (1-Minute Mock Answer)

What is an IIFE (Immediately Invoked Function Expression)?

You can say:

"An IIFE is a function expression in JavaScript that runs immediately after it’s defined. The function is wrapped in parentheses, which turns it into an expression, and then it’s invoked right away with the second set of parentheses.

IIFEs are commonly used to create data privacy because any variables defined inside the IIFE are not accessible outside of it. This helps in avoiding pollution of the global scope.

A simple example would be:

(function() {
  var message = 'IIFE example';
  console.log(message);
})();

console.log(message); // Error: message is not defined

This ensures that the variable message does not leak into the global scope, maintaining encapsulation and data privacy."

<!--  -->

✅ Bonus Tip (Optional):

"While using IIFE is less common with modern JavaScript, it's still useful for creating modules or organizing code in a self-contained manner, especially before ES6 introduced block-scoped variables like let and const."


<!--  -->

var counterModule = (function() {
  // Private variable, not accessible from outside
  let counter = 0;

  // Public methods to interact with the counter
  return {
    increment: function() {
      counter++;
      console.log("Counter value: " + counter);
    },
    decrement: function() {
      counter--;
      console.log("Counter value: " + counter);
    },
    getCounter: function() {
      console.log("Counter value: " + counter);
      return counter;
    }
  };
})();

// Using the module
counterModule.increment(); // Counter value: 1
counterModule.increment(); // Counter value: 2
counterModule.decrement(); // Counter value: 1
counterModule.getCounter(); // Counter value: 1
console.log(counter); // undefined (counter is not accessible from outside)


<!-- -------------------------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 9: Memoization -->

  Memoization is a technique used to improve the performance of a function by caching (storing) the results of expensive function calls and returning the cached result when the same inputs occur again. This helps avoid re-computation and speeds up the function for repeated inputs.

In simple terms:

First time you call the function with a certain input, it calculates the result and stores it.

Next time you call the function with the same input, it returns the result from the cache, instead of recalculating it.


Real-Life Example:
  Imagine you’re trying to add 20 to a number. Each time you call the function with the same number, you don’t want to redo the same math over and over again. Instead, the function remembers the result and just gives it back quickly when you ask for it again.

Code Example of Memoization

const memoizeAddition = () => {
  let cache = {};  // Cache to store results
  return (value) => {
    if (value in cache) {
      console.log("Fetching from cache");
      return cache[value]; // Return cached result if available
    } else {
      console.log("Calculating result");
      let result = value + 20;  // Perform calculation
      cache[value] = result;  // Store the result in cache
      return result;
    }
  };
};

// Returned function from memoizeAddition
const addition = memoizeAddition();
console.log(addition(20)); // Output: 40 (Calculated)
console.log(addition(20)); // Output: 40 (From cache)

<!-- ------------------------------------------------------------------------------------------------------------------------------ -->

<!-- Question 10:  -->

  In JavaScript, modules are a way to break down large codebases into smaller, manageable pieces, making code more maintainable and reusable. A module is essentially a file that contains code, which can be imported and exported between other files. JavaScript modules help in organizing code and preventing naming conflicts.

Key Concepts:
Exporting: The code or data that you want to share with other files can be exported from a module.

Importing: You can bring in the exported code or data from another module into your current file.

Types of Exports:
Named Exports: Allows you to export multiple entities from a module. You can use these entities by importing them by name.

Example:

// math.js (module)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './math';
console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2
Default Exports: Allows you to export a single entity as the default from a module. It is helpful when you want to export a single object or function.

Example:

// car.js (module)
export default function car() {
  console.log("This is a car!");
}

// main.js
import car from './car';
car(); // This is a car!

<!-- ----------------------------------------------------------------------------------------------------------------- -->---------

<!--Question 10  :Promises in JavaScript -->

  A Promise is a special JavaScript object that represents the future result of an asynchronous operation.
  The result can either be:

A resolved value (successful completion) or

A rejected reason (failure, like a network error).

When you create a Promise, it immediately starts the asynchronous task you describe inside it.
The promise can be in one of three states:

Pending (initial state, waiting)

Fulfilled (operation completed successfully)

Rejected (operation failed with an error)


➔ Syntax of Promise
Creating a Promise:

const promise = new Promise(function (resolve, reject) {
  // Your asynchronous operation here
});

Example Usage:

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I'm a Promise!");
  }, 5000);
});

promise.then((value) => console.log(value));


✅ In the example:

After 5 seconds, the Promise will resolve with the value "I'm a Promise!".

.then() is used to handle the resolved value.


➔ Why Do We Need Promises?
Before Promises, JavaScript used callbacks to handle async operations (like API requests).
However, callbacks often led to callback hell — a messy, hard-to-read, pyramid-like code structure.


Promises solve this problem by:

Making code easier to read and maintain.

Allowing us to chain async operations neatly using .then().

Providing better error handling using .catch().


✅ In simple words:

Promises help you manage things that take time, like getting data from a server, in a cleaner and more organized way.

<!-- ------------------------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 11:  -->