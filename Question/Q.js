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
  
  