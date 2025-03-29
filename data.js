// Variable declarations
var name = "John"; // 'var' allows redeclaration
console.log(name);
name = "Kumar";
console.log(name);
name = "John";
console.log(name);

// 'let' allows reassignment but not redeclaration
let num = 20;
console.log(num);
num = 30;
console.log(num);

// 'const' is a constant and cannot be reassigned
const pi = 3.14;
console.log(pi);

// Arithmetic Operators
let a = 20;
let b = 30;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Modulus:", a % b);
console.log("Increment:", ++a); // Pre-increment
console.log("Decrement:", --a); // Pre-decrement

// Assignment Operators
let c = 40;
let d = 50;
console.log("Addition Assignment:", (c += d));
console.log("Subtraction Assignment:", (c -= d));
console.log("Multiplication Assignment:", (c *= d));
console.log("Modulus Assignment:", (c %= d));

// Logical Operators
let s = true;
let t = false;
console.log("AND (&&):", s && t);
console.log("OR (||):", s || t);
console.log("NOT (!t):", !t);

// String Manipulation
let firstName = "Kishore";
let lastName = "Kumar";
console.log("Length of firstName:", firstName.length);
console.log("Uppercase firstName:", firstName.toUpperCase());
console.log("Lowercase lastName:", lastName.toLowerCase());
console.log("Sliced lastName (0-3):", lastName.slice(0, 3));

// Conditional Statements
if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is equal to b");
}

// Loops - For Loop Example
console.log("For Loop Example:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// Function Example
function greetUser(name) {
    return "Hello, " + name + "!";
}
console.log(greetUser("Kishore"));

// Array Example
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits Array:", fruits);
console.log("First fruit:", fruits[0]);

// Object Example
let person = {
    name: "John",
    age: 25,
    city: "New York"
};
console.log("Person Object:", person);
console.log("Person's Name:", person.name);