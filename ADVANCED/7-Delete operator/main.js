/*
  Delete Operator
*/

const user = { name: "Osama" };

console.log(user);
console.log(user.name);

// delete user; // Delete Property Not Object
// delete user.name;
// delete user["name"];
console.log(delete user["name"]);

console.log(user);
console.log(user.name);

console.log("#".repeat(15));

const username = "fady";
console.log(username);
console.log(delete username);
console.log(username);

console.log("#".repeat(15));

// * make object un editable
const freezedObj = Object.freeze({ age: 37 });
console.log(freezedObj);
console.log(freezedObj.age);

console.log(delete freezedObj.age);

console.log(freezedObj);
console.log(freezedObj.age);

console.log("#".repeat(15));

const eObj = {};

// * make object un editable

Object.defineProperty(eObj, "a", { value: 1, configurable: false });
console.log(eObj);
console.log(eObj.a);

console.log(delete eObj.a);

console.log(eObj);
console.log(eObj.a);
