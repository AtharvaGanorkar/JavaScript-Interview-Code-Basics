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

<!-- Question 11: What is the purpose of the delete operator?  -->

➡️ Definition:
The delete operator in JavaScript is used to remove a property from an object, along with its value.

➡️ Explanation:
When you want to completely remove a property from an object — not just set it to null or undefined, but actually erase it — you use the delete operator.

After deletion, the property will no longer exist in the object.

➡️ Example:

var user = { firstName: "John", lastName: "Doe", age: 20 };
delete user.age;

console.log(user); 
// Output: { firstName: "John", lastName: "Doe" }

➡️ Interview Ready Answer:
"The delete operator is used to completely remove a property from an object in JavaScript. Once deleted, the property is no longer accessible within the object."

<!-- --------------------------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 12: What is typeof operator? -->

➡️ Definition:
The typeof operator is used to find the type of a JavaScript variable or expression. It returns a string describing the type.

➡️ Explanation:
typeof helps identify if a variable is a string, number, boolean, object, function, etc.
It's very useful for type checking at runtime.

➡️ Example:

typeof "John Abraham"; // "string"
typeof (1 + 2);         // "number"
typeof [1, 2, 3];       // "object" (arrays are objects in JavaScript)

➡️ Interview Ready Answer:
"The typeof operator in JavaScript is used to determine the data type of a variable or an expression. It returns a string such as 'string', 'number', 'object', etc."

<!-- ------------------------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 13:  What is undefined property? -->

➡️ Definition:
undefined means a variable has been declared but not yet assigned any value.

➡️ Explanation:
When you declare a variable without initializing it, JavaScript automatically assigns it a value of undefined.
The typeof an undefined variable also returns undefined.

➡️ Example:

var user; // Value is undefined
console.log(typeof user); // "undefined"

// Explicitly setting a variable to undefined
user = undefined;

➡️ Interview Ready Answer:
"In JavaScript, a variable is undefined when it has been declared but not initialized with a value. The typeof such a variable returns 'undefined'."

<!-- ----------------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 14 : What is null value? -->

➡️ Definition:
null is a special primitive value in JavaScript that represents the intentional absence of any object value.

➡️ Explanation:
null is assigned to a variable to indicate "no value" on purpose. Interestingly, typeof null returns "object" — this is a known quirk in JavaScript.

➡️ Example:

var user = null;
console.log(typeof user); // "object"

➡️ Interview Ready Answer:
"In JavaScript, null represents an intentional absence of any object value. It's used to explicitly indicate that a variable should have 'no value'. However, due to a JavaScript bug, typeof null returns 'object'."

<!-- ----------------------------------------------------------------------------------------------------------------------------------------->

<!-- Question 15 :  What is the difference between an Attribute and a Property? -->

➡️ Definition:
Attributes are the initial values defined in the HTML markup.

Properties are the current state of those elements once the page is loaded and the DOM is created.

➡️ Explanation:
Attributes exist in the HTML.

Properties exist in the DOM object created by the browser from that HTML.

When the browser parses the HTML, it creates a corresponding DOM object and copies the attribute values into properties where appropriate.
However, after that point, attributes and properties can become different.

Changing an attribute does not always change the property, and vice versa.

➡️ Example:
Suppose we have this HTML:

<input type="text" value="Name:">

When the page loads:

const input = document.querySelector("input");

// Access attribute
console.log(input.getAttribute("value")); // "Name:"

// Access property
console.log(input.value); // "Name:"

Now, if the user types "Good morning" into the text field:

console.log(input.getAttribute("value")); // "Name:" (original attribute)
console.log(input.value);                 // "Good morning" (updated property)

If you manually update the attribute:

input.setAttribute("value", "Good evening");

console.log(input.getAttribute("value")); // "Good evening"
console.log(input.value);                 // "Good morning"

Important:
Updating an attribute doesn’t immediately update the property, unless explicitly done, and vice versa.

➡️ Interview Ready Answer:
"Attributes are what we define in the HTML markup, while properties are the current values stored in DOM objects. For example, in an <input> element, the value attribute sets the initial value, but the value property reflects the current state. After user interaction, the property might change, but the attribute remains the same unless manually updated."

<!-- ------------------------------------------------------------------------------------------------------------------------------------ -->

<!-- Question 16 : What is DOM in JavaScript? -->

   Definition:
  DOM stands for Document Object Model.

It is a programming interface provided by the browser for HTML and XML documents.

DOM represents the page so that programs (like JavaScript) can change the document structure, style, and content dynamically.

➡️ Explanation:
When a web page loads, the browser converts the HTML into a structured tree-like model called the DOM.

Each HTML element (like <div>, <p>, <button>) becomes a node or object inside this DOM tree.

JavaScript can access, modify, add, or delete these nodes to make web pages dynamic without reloading.

You can think of the DOM as a live representation of the web page.

<!--  -->

🧠 Key Points about DOM:

DOM is language-independent. (You can use JavaScript, Python, etc., but JavaScript is most common in browsers.)

Every element, attribute, and text inside HTML becomes a node in the DOM.

JavaScript uses the DOM API to read/write elements dynamically.

➡️ Example:
Suppose you have this HTML:

<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello World</h1>
    <button id="changeTextBtn">Change Text</button>

    <script>
      const titleElement = document.getElementById("title");
      const buttonElement = document.getElementById("changeTextBtn");

      buttonElement.addEventListener("click", function () {
        titleElement.textContent = "Text changed through DOM!";
      });
    </script>
  </body>
</html>
✅ Here:

document.getElementById() is used to access DOM nodes.

.textContent property is used to modify the DOM.

Result: When you click the button, the text inside the <h1> changes without reloading the page.


<!-- ------------------------------------------------------------------------------------------------------------------------------------ -->

<!--  Question 17: How do you make the first letter of a string uppercase? -->

➡️ Definition:
In JavaScript, to capitalize the first letter of a string, you need to:

Extract the first character,

Convert it to uppercase,

Concatenate it back with the rest of the string.

➡️ Explanation:
Strings in JavaScript are immutable, meaning you cannot change them directly.
Instead, you create a new string by combining parts:

Use charAt(0) to get the first character.

Use toUpperCase() to convert that character to uppercase.

Use slice(1) to get the remaining part of the string.

Combine both parts using the + operator.


<!--  -->

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("hello")); // Output: "Hello"
console.log(capitalizeFirstLetter("javascript")); // Output: "Javascript"

✅ How it works:

string.charAt(0) → gets first character (e.g., "h")

.toUpperCase() → converts it to "H"

string.slice(1) → returns "ello"

Combined result: "H" + "ello" → "Hello"

<!-- ------------------------------------------------------------------------------------------------------------------------------- -->


<!-- Question 18: What is an async Function in JavaScript? -->

➡️ Definition:
An async function is a special type of JavaScript function declared using the async keyword. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read, write, and manage.

Async functions always return a Promise. If the function returns a value, it is automatically wrapped in a resolved Promise. If an error is thrown, it becomes a rejected Promise.

➡️ Syntax:

async function functionName() {
  // Your code
}

➡️ Basic Example:

async function logger() {
  let response = await fetch("http://someapi.com/users");
  let data = await response.json(); // parsing JSON from response
  console.log(data);
}

logger();
In this example, the await keyword pauses execution inside the async function until the Promise returned by fetch() is resolved.

➡️ Key Characteristics:
async makes a function return a Promise.
await pauses the function execution until the Promise resolves or rejects.
Helps avoid callback hell and promise chaining.
Can only use await inside an async function.

➡️ Error Handling with async/await:

async function fetchData() {
  try {
    const res = await fetch("http://api.com/data");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
Errors in async functions can be caught using try...catch, making error handling straightforward and clean.

➡️ Interview-Ready Answer:
"An async function in JavaScript is a function defined using the async keyword that returns a Promise and allows the use of the await keyword inside it. This enables writing asynchronous code in a synchronous style, making it more readable and easier to manage than traditional Promise chains or callbacks. It's particularly useful for working with APIs and handling asynchronous operations cleanly."

<!-- -------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 19 : What is the Rest Operator in JavaScript? -->

📌 Definition:
The rest operator (...) in JavaScript is used to represent an indefinite number of arguments as an array. It allows you to group the remaining parameters into a single array variable.

The rest operator is primarily used in function parameters to collect all remaining arguments into one array.

📘 Syntax:

function myFunction(...args) {
  console.log(args);
}

✅ Explanation:
The ... operator used as a function parameter tells JavaScript:

“Put the remaining arguments into an array.”
It must be the last parameter in the function definition.
It helps you handle variable numbers of arguments more cleanly than using arguments object.

💡 Example:

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2));          // Output: 3
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

In this example:
All the arguments passed to sum() are collected into the numbers array.
reduce() is then used to sum up all values.

🧠 Use Cases:
Handling unknown numbers of arguments in functions.
Creating functions like Math.max() or custom sum(), average().
Simplifying code compared to using the arguments object.


🎯 Interview Answer (How to Say It):

“The rest operator in JavaScript is represented by three dots ... and is used to collect the remaining function arguments into an array. It helps when the number of arguments isn’t fixed. For example, in a sum function, I can use ...numbers to capture all values and then use reduce() to return their total. It's cleaner and more flexible than the older arguments object. It must be the last parameter in the function declaration.”

<!-- ---------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 20: ✅ What is the Spread Operator in JavaScript? -->

📌 Definition:
The spread operator (...) in JavaScript is used to expand iterable elements (like arrays, objects, or strings) into individual elements.
It is often used to copy, merge, or pass elements individually.

The spread operator does the opposite of the rest operator.

📘 Syntax:

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

✅ Explanation:
The spread operator "spreads out" an iterable (array, string, object) into individual elements or properties.

It’s useful when you want to:
Clone arrays/objects
Merge arrays/objects
Pass elements of an array as individual arguments


💡 Examples:

1. Spread in Arrays:

const fruits = ['apple', 'banana'];
const moreFruits = [...fruits, 'cherry'];

console.log(moreFruits); // ['apple', 'banana', 'cherry']

2. Spread in Function Arguments:

const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3

3. Spread in Objects (ES2018+):

const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 };

console.log(updatedUser); // { name: "Alice", age: 26 }


⚖️ Rest vs Spread Operator:

Feature	             Rest Operator	               Spread Operator
Purpose	            Collect remaining items	        Expand items
Use Case	          Function parameters	            Function calls, arrays, objects
Syntax Example	     function(...args)	             Math.max(...arr)


🧠 Interview Answer (How to Say It):
“The spread operator in JavaScript is written as three dots ..., and it's used to expand iterable items like arrays or objects into individual elements. For example, if I want to clone or merge arrays or pass an array into a function as separate arguments, I can use the spread operator. It's very powerful and is the opposite of the rest operator, which collects items instead of spreading them out.”

<!-- --------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 21: What is the for...of Loop in JavaScript? -->

📌 Definition:
The for...of loop is a modern JavaScript loop introduced in ES6 that allows you to iterate over iterable objects like:

Arrays
Strings
Maps
Sets
NodeLists

It gives you direct access to the values of the iterable, rather than the index or property name.

📘 Syntax:

for (const element of iterable) {
  // code block to execute
}

✅ Explanation:
The for...of loop iterates over the values in an iterable (not keys or indices).
It is useful when you don’t care about the index and only need to access values.


💡 Examples:

1. Iterating over an Array:

const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// cherry


2. Iterating over a String:

const name = "John";

for (const char of name) {
  console.log(char);
}

// Output:
// J
// o
// h
// n


3. Iterating over a Map:

const userMap = new Map([
  ['name', 'Alice'],
  ['age', 25]
]);

for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}

// Output:
// name: Alice
// age: 25

🧠 Interview Answer (How to Say It):
“The for...of loop is used to iterate directly over the values of an iterable, like arrays, strings, or sets. It provides a cleaner and more readable syntax than traditional loops when we don't care about the index. For example, for (let item of array) will give us each item in the array directly. It’s often preferred over for...in when dealing with iterables, as for...in loops over keys or property names.”

<!-- ------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 22: What is the for...in Loop in JavaScript? -->

📌 Definition:
The for...in loop is used in JavaScript to iterate over the enumerable properties (keys) of an object. It can also be used with arrays, but it’s not recommended for arrays due to possible unexpected results (like inherited properties).

📘 Syntax:

for (const key in object) {
  // code to execute using object[key]
}

✅ Explanation:
It iterates over keys (property names) of an object.
Works well for objects, but not ideal for arrays because it may iterate over inherited keys or non-numeric keys.

💡 Examples:
1. Iterating over an Object:

const person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Output:
// name: Alice
// age: 30
// city: New York


2. Using for...in on an Array (Not Recommended):

const colors = ['red', 'green', 'blue'];

for (const index in colors) {
  console.log(index, colors[index]);
}

// Output:
// 0 red
// 1 green
// 2 blue

👉 It works, but not safe for arrays because:
The index is returned as a string.
It can iterate over custom or inherited properties.


🧠 Interview Answer (How to Say It):
“The for...in loop in JavaScript is used to iterate over the enumerable property names (keys) of an object. It's useful when you want to access all the keys in an object and perform operations using those keys. However, it is not suitable for arrays, because it can include unexpected keys like custom properties or inherited methods. For array values, for...of is generally preferred.”

<!-- ------------------------------------------------------------------------------------------------------------------ -->

<!-- QUestion 23: What is the Nullish Coalescing Operator (??)? -->

🟦 1. Definition:
The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand.

🟩 2. Syntax:

let result = a ?? b;

If a is not null or undefined, result = a.
If a is null or undefined, result = b.

🧠 3. Key Difference from || (Logical OR):

Operator	Returns Right-Side If Left-Side Is...
`	
??	Only if null or undefined

💡 4. Examples:

console.log(null ?? "default");      // "default"
console.log(undefined ?? "default"); // "default"
console.log(false ?? "default");     // false  ✅ (not null/undefined)
console.log(0 ?? 42);                // 0      ✅
console.log("" ?? "empty");          // ""     ✅

📌 Explanation:
null ?? "default" → "default" because left side is null.
false ?? "default" → false because it’s a valid value (not null/undefined).
0 ?? 42 → 0 is returned because 0 is not null or undefined.
With ||, false || "default" would return "default" (since false is falsy), but ?? respects false, 0, and '' as valid.


🎯 Interview-Ready Answer:
"The nullish coalescing operator (??) in JavaScript is used to provide a fallback value when the left-hand operand is null or undefined. It is particularly useful when you want to assign defaults, but still accept values like 0, false, or an empty string—unlike the || operator, which treats all falsy values the same. This operator allows cleaner, more predictable defaults without unintentionally overwriting valid data."

<!-- ------------------------------------------------------------------------------------------------------------------ -->
<!-- Question 24: 🔹 What is a First-Class Function? (Simple Version) -->

In JavaScript, functions are treated like regular values or variables. This means you can:

Store a function in a variable

Pass a function to another function

Return a function from another function

This ability makes them “first-class functions.”

✅ Example:
1. Store in a variable:

const sayHi = function() {
  console.log("Hi!");
};

sayHi(); // Output: Hi!

2. Pass as a parameter:

function greet(callback) {
  callback(); // call the function passed
}

greet(sayHi); // Output: Hi!

3. Return a function:

function getGreeting() {
  return function() {
    console.log("Hello from the inner function!");
  };
}

const greetFunc = getGreeting();
greetFunc(); // Output: Hello from the inner function!

🧠 Interview Tip – How to Say It:
"In JavaScript, functions are first-class because they can be treated like values. You can save them in variables, send them to other functions, or even return them from functions. This makes JavaScript powerful and flexible, especially for things like callbacks and asynchronous code."

<!-- ---------------------------------------------------------------------------------------------------------------- -->

<!-- Question 25 :🔹 What is a Pure Function in JavaScript? -->

A pure function is a function that:

Always gives the same output for the same input.

Does not cause any side effects (like modifying a global variable, changing a file, or updating the DOM).

✅ Example of a Pure Function:

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always returns 5
📌 Here:

The output only depends on the inputs (a and b).

No external state is changed.

🧠 Interview Answer – Pure Function:
"A pure function is one that always returns the same output for the same input and doesn’t change or depend on anything outside itself. This makes the function predictable, easy to test, and helps with debugging."

<!-- 🔸 What is an Impure Function in JavaScript? -->

An impure function is a function that:

Produces different output for the same input.

Causes side effects like modifying global variables, updating UI, writing to files, or calling APIs.

❌ Example of an Impure Function:

let count = 0;

function increment() {
  count++;
  return count;
}

console.log(increment()); // 1
console.log(increment()); // 2

📌 Here:

The result depends on and changes a variable outside the function.

The output will vary even with the same call.

🧠 Interview Answer – Impure Function:
"An impure function either changes something outside of its scope (like a global variable or the DOM) or gives different results each time it’s called with the same input. This makes it harder to test and debug."

<!-- ------------------------------------------------------------------------------------------------------------------------ -->

<!-- Question 26: 🔹 What is Function Currying in JavaScript? -->

Currying is a technique in JavaScript where a function, instead of taking all arguments at once, takes one argument at a time and returns a new function for the next argument — until all arguments are provided.

✅ Why Use Currying?
It allows function reuse and composition.

Helps in creating specialized functions from general ones.

It enhances readability and modularity in functional programming.

🧠 Simple Explanation:
Instead of writing a function like this:

function add(a, b) {
  return a + b;
}
add(2, 3); // 5

In curried form, it looks like this:

function add(a) {
  return function(b) {
    return a + b;
  };
}

const addTwo = add(2);
console.log(addTwo(3)); // 5

✔ add(2) returns a new function that remembers the value 2, and waits for the second argument.

✅ Currying Using ES6 Arrow Functions:


const add = a => b => a + b;

console.log(add(5)(10)); // 15
🧠 Interview Answer:
"Currying is a functional programming technique in JavaScript where a function doesn’t take all arguments at once. Instead, it takes the first argument and returns another function for the second, and so on. This makes it easier to create reusable and modular functions".

<!-- -------------------------------------------------------------------------------------------------------------------------->

<!-- Question 27: 🔹 What is a Function Expression in JavaScript? -->

A function expression is a way to define a function in JavaScript by assigning it to a variable, often anonymously (without a name). It allows functions to be treated like values—they can be passed as arguments, returned from other functions, or assigned to variables.

✅ Syntax of Function Expression:

const greet = function() {
  console.log("Hello!");
};

greet(); // Output: Hello!

Here, a function is created and assigned to the variable greet. The function can then be called using greet().

✅ Named Function Expression:

const greet = function sayHello() {
  console.log("Hello!");
};

greet(); // ✅ Works
// sayHello(); ❌ Error (sayHello is not accessible outside)
The name sayHello is local to the function’s body, not available in the outer scope.

🔁 Function Declaration vs Function Expression
Feature	                  Function Declaration	              Function Expression
Syntax	                    function greet() {}	                const greet = function() {}
Hoisting	                     ✅ Yes	                             ❌ No
Can be anonymous	             ❌ No	                               ✅ Yes
Called before defined?	       ✅ Yes	                             ❌ No (must be defined first)


🧠 Interview Answer:
"A function expression is when a function is assigned to a variable. It can be anonymous or named, and unlike function declarations, it is not hoisted. This means it can only be used after its definition. Function expressions are commonly used in callbacks, event handlers, and closures."

<!-- ------------------------------------------------------------------------------------------------------------------------- >

<!-- Question 27: what are Data Types in Javascript ? Primitive vs non primitive -->

In JavaScript, data types represent the kind of value a variable can hold. They are categorized into two main groups:

✅ 1. Primitive Data Types
These are immutable (cannot be changed) and hold single values. They are passed by value.

Data                    Type	                                     Description
String	              Textual                                   data: "hello", 'abc'
Number	              Numeric                                   data: 1, 2.5, -10, Infinity, NaN
Boolean	              Logical                                   value: true or false
Undefined	               A variable that is declared but not assigned a value
Null	                         Represents "no value" or "empty object"
Symbol	                       Unique identifier (introduced in ES6)
BigInt	                For large integers beyond the safe limit of Number type


🧪 Example of Primitive Types:

let name = "Alice";        // String
let age = 25;              // Number
let isStudent = true;      // Boolean
let score;                 // Undefined
let data = null;           // Null
let id = Symbol("id");     // Symbol
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt

<!--  -->

✅ 2. Non-Primitive (Reference) Data Types
These are mutable and can store multiple values. They are passed by reference.

Data Type	                     Description
Object	                   Collection of key-value pairs
Array	                     Ordered list of values (special type of object)
Function	                 A block of code that can be called
Date, RegExp, Map, Set	   Built-in complex types

<!-- ------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 28: 🔍 What is Optional Chaining in JavaScript? -->

Optional Chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested object properties without having to check if each reference in the chain is valid (i.e., not null or undefined).

✅ Why Use Optional Chaining?
When accessing nested object properties, JavaScript would normally throw an error if any part of the chain is undefined or null. Optional chaining prevents these errors by gracefully returning undefined instead of throwing an error.

🧪 Example Without Optional Chaining:

const user = {
  profile: {
    name: "Alice"
  }
};

console.log(user.profile.name);     // ✅ Works
console.log(user.address.city);     // ❌ Error: Cannot read property 'city' of undefined

🧪 With Optional Chaining:

console.log(user.address?.city);    // ✅ undefined (no error)

🧪 More Examples:

let user = {
  name: "Bob",
  location: {
    city: "New York"
  }
};

console.log(user?.location?.city);       // "New York"
console.log(user?.job?.company);         // undefined

let users = null;
console.log(users?.[0]?.name);           // undefined

🔑 Key Use Cases
Use Case	                          Syntax Example
Access nested properties	           obj?.prop?.subProp
Call functions safely	               obj.method?.()
Access array elements	               arr?.[index]

🧠 Interview Answer:
"Optional chaining is a feature introduced in ES2020 that allows safe access to nested properties without manually checking if each level exists. It uses the ?. operator, and if any part of the chain is null or undefined, it returns undefined instead of throwing an error. This is especially useful when working with API responses or user-generated content where data might be missing or incomplete."

<!-- ------------------------------------------------------------------------------------------------------------------------ -->

<!-- Question 29: 🔍 Promises vs. Async/Await — Which Is Better? -->

Both Promises and async/await are used in JavaScript to handle asynchronous operations, like API calls, file reading, or timers. They solve the problem of callback hell and make asynchronous code easier to manage — but each has its own strengths.

🔁 Promises
✅ Definition:
A Promise represents a value that may be available now, later, or never. It uses .then() for chaining and .catch() for handling errors.

🧪 Example:

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
✅ Pros:
Good for simple async chains

Native support in browsers

Works well with .then() and .catch() chaining

❌ Cons:
Can lead to "promise hell" with many chained .then() calls

Harder to debug stack traces


⏳ Async/Await
✅ Definition:
Async/Await is a syntax sugar over Promises introduced in ES2017. It allows you to write asynchronous code that looks synchronous.

🧪 Example:

async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();
✅ Pros:
Cleaner, more readable code

Easier to write and debug, especially with try...catch

Looks synchronous but runs asynchronously

❌ Cons:
Requires modern environments (ES2017+)

Still returns Promises under the hood (so you must handle them accordingly)

🔍 Which Is Better?
Feature                     	Promises	                             Async/Await
Readability	                  😐 Moderate	                           ✅ Excellent
Error Handling	              😐 Separate .catch()	                 ✅ try...catch block
Chaining	                    ✅ Easy	                              😐 Needs nesting
Debugging	                    ❌ More complex	                      ✅ Easier
Learning Curve	              ✅ Simple	                            ✅ Simple (if you know Promises)

🧠 Interview Answer:
"Both Promises and async/await handle asynchronous operations in JavaScript. Promises are great for chaining multiple asynchronous actions and are supported in all modern environments. However, async/await makes the code more readable and easier to maintain, especially with complex logic and error handling using try...catch. Ultimately, async/await is preferred for its clarity and simplicity, though under the hood, it still uses Promises."

<!-- -------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 30:🔐 What is a Closure in JavaScript? -->

✅ Definition:
A closure is a function that remembers and continues to access variables from its lexical (outer) scope even after the outer function has finished executing.

In simpler words:

A closure is created when an inner function is defined inside an outer function, and the inner function remembers the variables declared in the outer function—even after the outer function has finished running.

🧪 Example:

function outerFunction() {
  let outerVar = "I am outside!";

  function innerFunction() {
    console.log(outerVar); // Can still access outerVar
  }

  return innerFunction;
}

const myClosure = outerFunction(); // outerFunction is executed
myClosure(); // Logs: "I am outside!"

<!-- Why does this work? -->
Even though outerFunction has finished executing, the returned innerFunction still remembers the variable outerVar. This retained access is what we call a closure.

📌 Use Cases of Closures:
Data privacy/encapsulation:

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();
increment(); // 1
increment(); // 2

SetTimeout loops

Function factories

Memoization (caching)

🧠 How to explain in an interview:
"A closure in JavaScript is created when a function retains access to variables from its outer scope even after the outer function has returned. Closures are useful for maintaining private variables, building function factories, and ensuring data isn't accessible globally. For example, if an inner function continues to access variables declared in an outer function after that outer function has executed, that’s a closure."


<!-- ----------------------------------------------------------------------------------------------------------------- -->

<!-- Question 31: 📌 What are Events in JavaScript? -->

✅ Definition:
Events are actions or occurrences that happen in the browser, often triggered by user interactions (like clicking a button, submitting a form, typing, etc.) or browser activities (like page load, resizing window, etc.).

JavaScript allows us to respond to these events using event listeners or handlers.

🧪 Example:

document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});
This adds a click event listener to a button with ID btn.


🔸 Common Types of Events in JavaScript

1. Mouse Events:
click – Fired when an element is clicked.

dblclick – Fired when an element is double-clicked.

mousedown / mouseup – When mouse button is pressed or released.

mousemove – When the mouse pointer moves.

mouseenter / mouseleave – When the mouse enters or leaves an element.


2. Keyboard Events:
keydown – When a key is pressed down.

keyup – When a key is released.

keypress – When a key is pressed and held (now deprecated in favor of keydown and keyup).


3. Window Events:
load – When the page is fully loaded.

resize – When the browser window is resized.

scroll – When the page is scrolled.

unload – When the user leaves the page.


4. Form Events:
Form events are triggered on forms and form elements like <input>, <textarea>, <form>, etc.

✅ Common Form Events:
Event	                                       Description
submit	                              Fired when a form is submitted.
change	                              Fired when the value of an input changes (after focus loss).
input	                                Fired every time the user types something.
focus                               	When an element gains focus (like clicking into an input).
blur	                                When an element loses focus.
reset	                                When a form is reset.

🧪 Example:

<form id="myForm">
  <input type="text" id="username" />
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default page reload
    alert("Form submitted!");
  });
</script>

🗣️ How to Explain in an Interview:
"Events in JavaScript are actions triggered either by the user or the browser, such as clicking, typing, or loading. JavaScript can listen for these events and respond using event listeners. Form events specifically allow us to capture and validate user input during typing, focusing, or submission. For example, the submit event helps validate forms before actually sending the data to the server."

<!-- --------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 32: What are Lifecycle Methods of Function Components? -->

Definition:
In React class components, lifecycle methods (like componentDidMount, componentDidUpdate, componentWillUnmount) are special methods that run at different points of a component’s life — mounting, updating, and unmounting.

In function components, there are no traditional lifecycle methods like in class components, but React provides Hooks to manage similar behaviors.

🧪 How Function Components Handle Lifecycle
React function components use Hooks such as:

useEffect — to perform side effects that correspond to lifecycle events.

useState — to manage component state.

useEffect Hook:
The useEffect hook lets you run code:

After the component mounts (similar to componentDidMount).

After the component updates (similar to componentDidUpdate).

Before the component unmounts (using a cleanup function, similar to componentWillUnmount).


🧪 Example: Using useEffect

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  // Runs after every render (mount + update)
  useEffect(() => {
    console.log("Component mounted or updated");

    // Cleanup function runs before unmounting
    return () => {
      console.log("Cleanup before unmount or before next effect run");
    };
  }, [count]); // Effect runs only when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

Explanation:
The first argument to useEffect is a callback executed after render.

The return function inside it is a cleanup function, called before unmount or before next effect call.

The second argument is a dependency array that tells React when to re-run the effect.

🗣️ How to explain in an interview:
"In React function components, we don’t have traditional lifecycle methods like in class components. Instead, we use the useEffect hook to run side effects after render, similar to componentDidMount, componentDidUpdate, and componentWillUnmount in classes. By specifying dependencies, we control when the effect runs, and we can return a cleanup function to handle component unmount or update cleanup."

<!-- --------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 33: Which Hook we will use for mounting , updating and unmounting? -->

In React function components, the useEffect hook is used to handle mounting, updating, and unmounting—the same way lifecycle methods work in class components.

Here’s how useEffect works for each:

✅ 1. Mounting (Like componentDidMount)
To run code once after the component mounts, use useEffect with an empty dependency array []:

useEffect(() => {
  console.log("Component mounted"); // Runs only once on initial render
}, []);


🔄 2. Updating (Like componentDidUpdate)
To run code when specific state/props update, include those variables in the dependency array:

useEffect(() => {
  console.log("Component updated due to change in count");
}, [count]); // Runs every time `count` changes

If you omit the dependency array entirely:

useEffect(() => {
  console.log("Runs after every render");
});
That makes it run after every render, both mount and update.

❌ 3. Unmounting (Like componentWillUnmount)
To run cleanup code before the component unmounts, return a function from useEffect. This is useful for things like removing event listeners or clearing timers.


useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Component will unmount"); // Cleanup code here
  };
}, []);

🗣️ Interview Explanation:
"We use the useEffect hook to handle all lifecycle phases in function components. When passed an empty dependency array, it acts like componentDidMount. When passed dependencies, it runs on updates like componentDidUpdate. If a cleanup function is returned from it, that function acts like componentWillUnmount, running before the component unmounts or before the next effect runs."

<!-- ------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 34: 📚 Library vs Framework in JavaScript (and Web Development) -->

Understanding the difference between a library and a framework is key for front-end and back-end JavaScript development. While both help in building applications, they differ in control and usage.

✅ Definition
🔹 Library:
A collection of pre-written code that you call to perform specific tasks.

You are in control of the flow of the application.

Examples: React, Lodash, jQuery, Axios

🔸 Framework:
A platform or structure that calls your code and provides a complete flow to build an application.

The framework is in control and dictates how your code should be structured.

Examples: Angular, Vue.js, Next.js, Express.js

🗣️ Interview Answer Template
"A library is like a toolbox where I pick specific tools when I need them. I stay in control of the flow. A framework, on the other hand, gives me a structured environment to build an application, and it calls my code based on its lifecycle or structure. React is a good example of a library, while Angular is a framework. The key difference is control—libraries offer more freedom, while frameworks offer more structure."

<!-- ----------------------------------------------------------------------------------------------------------------------- -->

<!-- Question 35: 📘 What is Hoisting in JavaScript?
 -->