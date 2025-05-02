// Question 1: How do you make the first letter of a string uppercase?

// Answer:
// You can create a function that uses a chain of string methods such as
// charAt, toUpperCase, and slice to generate a string with the first letter capitalized.

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Example usage:
  console.log(capitalizeFirstLetter("hello")); // Output: "Hello"
  console.log(capitalizeFirstLetter("javascript")); // Output: "Javascript"
  
  // --------------------------------------------------------------------------------
  
  // Question 2: How do you display the current date in JavaScript?
  
  // Answer:
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  
  today = mm + "/" + dd + "/" + yyyy;
  document.write(today);
  
  // --------------------------------------------------------------------------------
  
  // Question 3: How do you compare two Date objects?
  
  // Answer:
  var d1 = new Date();
  var d2 = new Date(d1);
  
  console.log(d1.getTime() === d2.getTime()); // true
  console.log(d1 === d2); // false
  
  // --------------------------------------------------------------------------------
  
  // Question 4: How do you check if a string starts with another string?
  
  // Answer:
  console.log("Good morning".startsWith("Good")); // true
  console.log("Good morning".startsWith("morning")); // false
  
  // --------------------------------------------------------------------------------
  
  // Question 5: How do you trim a string in JavaScript?
  
  // Answer:
  console.log("  Hello World   ".trim()); // "Hello World"
  
  // --------------------------------------------------------------------------------
  
  // Question 6: How do you add a key-value pair in JavaScript?
  
  // Answer:
  var object = {
    key1: "value1",
    key2: "value2"
  };
  
  // Using dot notation:
  object.key3 = "value3";
  
  // Using square bracket notation:
  object["key4"] = "value4";
  
  console.log(object);
  
  // --------------------------------------------------------------------------------
  
  // Question 7: How do you define multiline strings?
  
  // Answer:
  var str =
    "This is a \n\
  very lengthy \n\
  sentence!";
  
  console.log(str);
  
  // --------------------------------------------------------------------------------
  
  // Question 8: How do you generate random integers?
  
  // Answer:
  console.log(Math.floor(Math.random() * 10) + 1); // returns a random integer from 1 to 10
  console.log(Math.floor(Math.random() * 100) + 1); // returns a random integer from 1 to 100
  
  // --------------------------------------------------------------------------------
  
  // Question 9: Can you write a random integers function to print integers within a range?
  
  // Answer:
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage:
  console.log(randomInteger(1, 100));
  console.log(randomInteger(1, 1000));
  
  // --------------------------------------------------------------------------------
  
  // Question 10: What are the string methods that accept Regular Expression?
  
  // Answer:
  // There are six string methods: search(), replace(), replaceAll(), match(), matchAll(), and split().
  
  // Example for search():
  var msg = "Hello John";
  var n = msg.search(/John/i); // 6
  
  // Example for replace() and replaceAll():
  var msg2 = "ball bat";
  var n1 = msg2.replace(/b/i, "c"); // call bat
  var n2 = msg2.replaceAll(/b/i, "c"); // call cat
  
  // Example for match() and matchAll():
  var msg3 = "Hello John";
  var n3 = msg3.match(/[A-Z]/g); // ["H", "J"]
  var n4 = [...msg3.matchAll(/[A-Z]/g)]; // iterator converted to array
  
  // Example for split():
  var msg4 = "Hello John";
  var n5 = msg4.split(/\s/); // ["Hello", "John"]
  
  // --------------------------------------------------------------------------------
  
  // Question 11: What are modifiers in regular expressions?
  
  // Answer:
  // Modifiers can be used to perform case-insensitive and global searches.
  // Common modifiers:
  // i - Perform case-insensitive matching
  // g - Perform a global match (find all matches rather than stopping after the first match)
  // m - Perform multiline matching
  
  // Example for global modifier:
  var text = "Learn JS one by one";
  var pattern = /one/g;
  var result = text.match(pattern); // ["one", "one"]
  console.log(result);
  
  // --------------------------------------------------------------------------------
  
  // Question 12: How do you search a string for a pattern?
  
  // Answer:
  // You can use the test() method of a regular expression to search a string for a pattern,
  // and it returns true or false depending on the result.
  
  var patternTest = /you/;
  console.log(patternTest.test("How are you?")); // true
  
  // --------------------------------------------------------------------------------
  
  // Question 13: What would be the result of 1+2+'3'?
  
  // Answer:
  // The output is going to be "33". Since 1 and 2 are numeric values,
  // the result of the first two digits is going to be a numeric value 3.
  // The next digit is a string type value. Therefore, the addition of numeric value 3
  // and string type value '3' results in string concatenation, producing "33".
  // Other operations like 3 * '3' do yield correct results because the string is coerced into a number.
  
  console.log(1 + 2 + '3'); // "33"
  console.log(3 * '3'); // 9
  
  // --------------------------------------------------------------------------------
  
  // Question 14: How do you convert date to another timezone in JavaScript?
  
  // Answer:
  // You can use the toLocaleString() method to convert dates in one timezone to another.
  
  console.log(new Date().toLocaleString("en-GB", { timeZone: "UTC" })); // Example output: 29/06/2019, 09:56:00
  
  // --------------------------------------------------------------------------------
  
  // Question 15: What are various operators supported by JavaScript?
  
  // Answer:
  // JavaScript supports various types of operators:
  
  // Arithmetic Operators: + (Addition), - (Subtraction), * (Multiplication), / (Division), % (Modulus), ++ (Increment), -- (Decrement)
  // Comparison Operators: == (Equal), != (Not Equal), === (Strict Equal), > (Greater Than), >= (Greater Than or Equal To), < (Less Than), <= (Less Than or Equal To)
  // Logical Operators: && (Logical AND), || (Logical OR), ! (Logical NOT)
  // Assignment Operators: = (Assignment), += (Add and Assign), -= (Subtract and Assign), *= (Multiply and Assign), /= (Divide and Assign), %= (Modulus and Assign)
  // Ternary Operator: condition ? expr1 : expr2
  // typeof Operator: Used to find the type of a variable
  
  // Example usage:
  var x = 5;
  var y = 10;
  console.log(x + y); // 15
  console.log(x > y); // false
  console.log(x < y && y > 5); // true
  console.log(typeof x); // "number"
  
  // --------------------------------------------------------------------------------
  
  // Question 16: What is a rest parameter?
  
  // Answer:
  // Rest parameter is an improved way to handle function parameters which allows us to represent an indefinite number of arguments as an array.
  // It was introduced in ES2015 (ES6).
  
  function sum(...args) {
    let total = 0;
    for (const i of args) {
      total += i;
    }
    return total;
  }
  
  console.log(sum(1, 2)); // 3
  console.log(sum(1, 2, 3)); // 6
  console.log(sum(1, 2, 3, 4)); // 10
  console.log(sum(1, 2, 3, 4, 5)); // 15
  
  // --------------------------------------------------------------------------------
  
  // Question 17: What happens if you do not use rest parameter as a last argument?
  
  // Answer:
  // The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array.
  // If you define a function like below, it will throw a SyntaxError.
  
  // Incorrect usage:
  function someFunc(a, ...b, c) {
    // Your code goes here
    return;
  }
  // SyntaxError: Rest parameter must be last formal parameter
  
  // --------------------------------------------------------------------------------
  
  // Question 18: How do you determine two values are the same using Object?
  
  // Answer:
  // The Object.is() method determines whether two values are the same value.
  
  // Example usage:
  console.log(Object.is("hello", "hello")); // true
  console.log(Object.is(window, window)); // true
  console.log(Object.is([],

// Question 19 : What is a spread operator?

// Answer:
// The spread operator allows iterables (arrays / objects / strings) to be expanded into single arguments/elements.
// It was introduced in ES2015 (ES6).

function calculateSum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(calculateSum(...numbers)); // Output: 6
  
  // The spread operator can also be used to:
  // - Copy arrays
  // - Concatenate arrays
  // - Spread elements into a new array
  // - Clone or merge objects
  
  // Example: Copying an array
  const originalArray = [1, 2, 3];
  const newArray = [...originalArray];
  console.log(newArray); // [1, 2, 3]
  
  // Example: Merging arrays
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const mergedArray = [...arr1, ...arr2];
  console.log(mergedArray); // [1, 2, 3, 4]
  
  // Example: Cloning and merging objects
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const mergedObj = { ...obj1, ...obj2 };
  console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }


  // --------------------------------------------------------------------------------

// Question 20: How do you copy properties from one object to another?

// Answer:
// You can use the Object.assign() method which copies the values and properties 
// from one or more source objects to a target object. It returns the updated target object.
// Syntax:
// Object.assign(target, ...sources);

// Example usage:
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const returnedTarget = Object.assign(target, source);

console.log(target); // Output: { a: 1, b: 3, c: 4 }
console.log(returnedTarget); // Output: { a: 1, b: 3, c: 4 }

// Note:
// If a property exists in both the target and source objects, the property from the source will overwrite the one from the target.



  // ------------------------------------------------------------------------------------------------------------------------------------

// Question 21: How do you get enumerable key and value pairs?
// 📝 Short Note:

// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

// The array returned follows the same order as a for...in loop.

// This method is particularly useful when you need to iterate over both keys and values in a concise manner.
  
const object = {
  a: "Good morning",
  b: 100,
};

for (let [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
  // Output:
  // a: Good morning
  // b: 100
}

// Example 2 - Array of Objects

const objectArray = [
  {
    a: "Good morning",
    b: 100,
  },
  {
    a: "Good Afternoon",
    b: 100,
  }
];

for (let obj of objectArray) {
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`);
  }
}

// How to explain in an interview:

// "The Object.entries() method is a great tool when you want to iterate over both the keys and values of an object 
// or array of objects. It returns an array of key-value pairs, making it easier to loop through with a for...of loop 
// or other iterable structures. I used this method in the example to iterate through an object and even an array of 
// objects to log both the keys and values."


// -----------------------------------------------------------------------------------------------------------------------

// Question 22: What is the main difference between Object.values() and Object.entries() methods?
// 📝 Short Note:

// Both Object.values() and Object.entries() are used to work with the properties of an object.

// Object.values() returns an array of the values of the object's properties.

// Object.entries() returns an array of the key-value pairs (each as a [key, value] array).


// 📘 Example of Object.values():

javascript
Copy
Edit
const object = {
  a: "Good morning",
  b: 100,
};

for (let value of Object.values(object)) {
  console.log(`${value}`);
  // Output:
  // Good morning
  // 100
}
// 📘 Example of Object.entries():

javascript
Copy
Edit
const object = {
  a: "Good morning",
  b: 100,
};

for (let [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
  // Output:
  // a: Good morning
  // b: 100
}
// 🗣️ How to explain in an interview:

// "The main difference between Object.values() and Object.entries() is that while Object.values() 
// returns only the values of the object’s properties, Object.entries() returns both the keys and
//  values in the form of an array of pairs. You can use Object.values() when you only need the values,
//   but Object.entries() is more useful when you need both keys and values."

// --------------------------------------------------------------------------------------------------------------


// ✅ Question 23: How can you get the list of keys of any object?
// 📝 Short Note:

// The Object.keys() method is used to retrieve an array of the keys of a given object.

// It returns the keys in the same order as they are listed in a typical for...in loop.

// 📘 Example:


const user = {
  name: "John",
  gender: "male",
  age: 40,
};

console.log(Object.keys(user)); // Output: ['name', 'gender', 'age']

// 🗣️ How to explain in an interview:

// "To get the list of keys from an object, you can use Object.keys(). 
// It returns an array of property names (keys) from the object, 
// which you can then iterate over or use for other purposes. 
// It behaves similarly to how the keys would appear in a for...in loop."

// -------------------------------------------------------------------------------------------------------------------

// Question 24: How do you create an object with a prototype?
// 📝 Short Note:

// The Object.create() method is used to create a new object with the specified prototype object and optional properties.

// It allows you to set an existing object as the prototype for the newly created object.

// This method returns the new object with the specified prototype and properties.

// 📘 Example:

const Nuser = {
  name: "John",
  printInfo: function () {
    console.log(`My name is ${this.name}.`);
  },
};

const admin = Object.create(Nuser);

admin.name = "Nick"; // "name" is set on "admin", not on "user"

admin.printInfo(); // Output: My name is Nick

// 🗣️ How to explain in an interview:

// "To create an object with a prototype, you can use the Object.create() method. 
// It takes an existing object as an argument and creates a new object that inherits from that prototype. 
// This allows for prototype chaining, where the new object can access properties and methods of the prototype.
// In the example, admin inherits from user,
// but admin can have its own properties, like name, which will override the prototype's name."

// -------------------------------------------------------------------------------------------------------------------------

// Question 25 : What are JavaScript accessors?
// 📝 Short Note:

// JavaScript accessors (also known as getters and setters) allow you to define methods for getting and setting property values of an object.

// Introduced in ECMAScript 5, accessors are used to define computed properties where you can control how properties are accessed or modified.

// Getters use the get keyword and allow you to define a method that is called when a property is accessed.

// Setters use the set keyword and allow you to define a method that is called when a property is assigned a value.

// 📘 Example:


var Muser = {
  firstName: "John",
  lastName: "Abraham",
  language: "en",
  
  // Getter for 'lang'
  get lang() {
    return this.language;
  },
  
  // Setter for 'lang'
  set lang(lang) {
    this.language = lang;
  },
};

console.log(Muser.lang); // Output: 'en' (getter access)
user.lang = "fr"; // Setter used to set the 'language' property
console.log(Muser.lang); // Output: 'fr' (getter access after setter)

// 🗣️ How to explain in an interview:

// "JavaScript accessors, including getters and setters, allow you to control how properties are accessed and modified. 
// The get keyword defines a method that is invoked when a property is accessed, and the set keyword defines a method that 
// is triggered when a property is assigned a new value. This is particularly useful for computed properties or when you want
//  to add custom logic when getting or setting values. In the example, I used the getter lang to retrieve the language and 
//  the setter lang to modify it."

// ----------------------------------------------------------------------------------------------------------------------------

// Question 26 : What is a Unary Operator in JavaScript?

// 📝 Short Note:

// A Unary operator operates on a single operand.

// The + unary operator is commonly used to convert a value to a number.

// If the value cannot be converted, it becomes NaN (Not a Number).

// 📘 Example:


var x = "100";
var y = +x;
console.log(typeof x, typeof y); // string, number

var a = "Hello";
var b = +a;
console.log(typeof a, typeof b, b); // string, number, NaN

// 🗣️ How to explain in an interview:

// "A unary operator takes one operand. In JavaScript, the unary plus (+) operator is often used to convert a string 
// or other type into a number. If the value is numeric-like, it successfully converts it. If not, it returns NaN. 
// For example, +\"100\" becomes 100, but +\"Hello\" results in NaN."

// ---------------------------------------------------------------------------------------------------------------------------

// ✅ Question 27: How do you sort elements in an array in JavaScript?
// 📝 Short Note:

// The sort() method is used to sort array elements in place.

// It returns the sorted array.

// By default, it sorts as strings, using Unicode code point order.

// For numeric or custom sorting, a compare function should be used.

// 📘 Example:


var months = ["Aug", "Sep", "Jan", "June"];
months.sort();
console.log(months); // ["Aug", "Jan", "June", "Sep"]

// 🗣️ How to explain in an interview:

// "The sort() method sorts elements of an array in place. Without a compare function, 
// it treats all elements as strings and sorts them based on Unicode order. So even months like 
// 'Jan', 'June', and 'Sep' will be sorted lexicographically. For more control, especially with 
// numbers or dates, a custom compare function is recommended."

// --------------------------------------------------------------------------------------------------------------------------

// Question 28 : What is the purpose of compareFunction while sorting arrays?
// 📝 Short Note:

// By default, sort() converts elements to strings and sorts by Unicode code point value.

// A compareFunction can be provided to define custom sort logic, such as numeric or descending order.

// 📘 Example:


let umbers = [1, 2, 5, 3, 4];
numbers.sort((a, b) => b - a);
console.log(umbers); // [5, 4, 3, 2, 1]

// 🗣️ How to explain in an interview:

// "The default sort in JavaScript is lexicographical, so sorting numbers without a compare function might give incorrect results like [1, 10, 2]. 
// To sort numerically, we use a compare function. 
// In the example, (a, b) => b - a sorts the array in descending order by comparing the values directly."

// ---------------------------------------------------------------------------------------------------------------------------------

// Question 29 : How do you reverse an array in JavaScript?
// 📝 Short Note:

// The reverse() method reverses the order of elements in an array in place.

// It's often used after a sort to convert ascending order to descending, or vice versa.

// 📘 Example:

let Numbers = [1, 2, 5, 3, 4];
numbers.sort((a, b) => b - a); // [5, 4, 3, 2, 1]
numbers.reverse();             // [1, 2, 3, 4, 5]
console.log(Numbers);

// 🗣️ How to explain in an interview:

// "The reverse() method flips the order of array elements in place. 
// It's useful if you want to quickly invert the order of a sorted array—for instance, 
// turning a descending sort into ascending without re-sorting."

// -------------------------------------------------------------------------------------------------------------------------------

// Question 30:How do you find min and max value in an array

// You can use Math.min and Math.max methods on array variables to find the minimum and maximum elements within an array. 
// Let's create two functions to find the min and max value with in an array,

var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  return Math.min.apply(null, arr);
}
function findMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(findMin(marks));
console.log(findMax(marks));

// ----------------------------------------------------------------------------------------------------
// Question 31: What is a comma operator

// The comma operator is used to evaluate each of its operands from left to right and returns the value of the last operand. 
// This is totally different from comma usage within arrays, objects, and function arguments and parameters. 
// For example, the usage for numeric expressions would be as below,

var x = 1;
x = (x++, x);

console.log(x); // 2

// ----------------------------------------------------------------------------------------------------------

// Question 32: How do you perform form validation using JavaScript?
// 📝 Short Note:

// JavaScript can be used to validate HTML form fields before the form is submitted.

// This is done by writing a function that checks user input, and returning false if the data is invalid to prevent form submission.

// 📘 Example:


{/* <form name="myForm" onsubmit="return validateForm()" method="post">
  User name: <input type="text" name="uname" />
  <input type="submit" value="Submit" />
</form>

<script>
function validateForm() {
  var x = document.forms["myForm"]["uname"].value;
  if (x === "") {
    alert("The username shouldn't be empty");
    return false; // Prevents form submission
  }
}
</script> */}

// 💡 How it works:

// The form calls validateForm() on submission.

// If the uname field is empty, an alert is shown and false is returned.

// Returning false cancels the form submission.

// 🗣️ How to explain in an interview:

// "To validate a form in JavaScript, I typically write a validation function that checks the form fields before submission.
//  For example, I can check if a required field like username is empty, and if it is,
//  I show an alert and return false to prevent submission. 
//  This helps improve user experience by providing immediate feedback without waiting for a server response."

// -------------------------------------------------------------------------------------------------------------------------

// Question 33 : How do you check whether an array includes a particular value or not

// The Array#includes() method is used to determine whether an array includes a particular value among its entries by returning either true or false. 
// Let's see an example to find an element(numeric and string) within an array.

var numericArray = [1, 2, 3, 4];
console.log(numericArray.includes(3)); // true

var stringArray = ["green", "yellow", "blue"];
console.log(stringArray.includes("blue")); //true

// -------------------------------------------------------------------------------------------------------------------------------

// Question 34: What is the output of the following for loops and why?
// 📘 Code Example:


// Loop with 'var'
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}

// Loop with 'let'
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}

// 🧠 Output:
// First Loop with var:
// Output: 4 4 4 4

// Second Loop with let:
// Output: 0 1 2 3

// 🧾 Explanation:

// 🔹 var (Function/Global Scope):
// The variable i is declared with var, which is function-scoped or globally scoped.

// The setTimeout function gets executed after the loop finishes, at which point i is 4.

// All callbacks in the loop refer to the same shared i, which ends up as 4.

// 🔹 let (Block Scope):

// With let, each iteration of the loop creates a new scoped i.

// Each setTimeout callback captures its own unique i value from that iteration.

// Therefore, the values printed are 0, 1, 2, and 3.

// 🗣️ How to explain in an interview:

// "The key difference here is the scoping of var and let. 
// In the first loop, var is function-scoped, so all the setTimeout callbacks reference the same i, which is 4 after the loop ends. 
// That’s why it prints 4 four times. 

// In the second loop, let is block-scoped and creates a new binding of i for each iteration. 
// So each callback closes over a different value, resulting in the output 0 1 2 3."


// ----------------------------------------------------------------------------------------------------------------------------

// Question 35: Can I redeclare let and const variables
  
// No, you cannot redeclare let and const variables. If you do, it throws below error

// Uncaught SyntaxError: Identifier 'someVariable' has already been declared
  
// Explanation: The variable declaration with var keyword refers to a function scope and the variable is treated as 
// if it were declared at the top of the enclosing scope due to hoisting feature. 
// So all the multiple declarations contributing to the same hoisted variable without any error. 
// Let's take an example of re-declaring variables in the same scope for both var and let/const variables.

var name = "John";
function myFunc() {
  var name = "Nick";
  var name = "Abraham"; // Re-assigned in the same function block
  alert(name); // Abraham
}
myFunc();
alert(name); // John


// The block-scoped multi-declaration throws syntax error,

let name = "John";
function myFunc() {
  let uname = "Nick";
  let uname = "Abraham"; // Uncaught SyntaxError: Identifier 'name' has already been declared
  alert(uname);
}

myFunc();
alert(name);

// -----------------------------------------------------------------------------------------------------------------

// Question 36: