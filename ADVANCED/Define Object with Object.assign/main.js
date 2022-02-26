<<<<<<< HEAD
/*
  Defining Object
  [1] Object Literal
  [2] With New Keyword
  [3] With Object.create()
  [4] With Object.assign()
*/

const src1 = {
    prop1: "Value1",
    prop2: "Value2",
    method1: function () {
        return `Method 1`;
    },
};

const src2 = {
    prop3: "Value3",
    prop4: "Value4",
    method2: function () {
        return `Method 2`;
    },
};

const target = {
    prop5: "Value5",
};

Object.assign(target, src1, src2, { prop6: "Value6" });

console.log(target);

const myObject = Object.assign({}, target, { prop7: "Value7" });

console.log(myObject);
console.log(myObject.prop1);
console.log(myObject.prop2);
console.log(myObject.prop6);
console.log(myObject.method1());
=======
/*
  Defining Object
  [1] Object Literal
  [2] With New Keyword
  [3] With Object.create()
  [4] With Object.assign()
*/

const src1 = {
    prop1: "Value1",
    prop2: "Value2",
    method1: function () {
        return `Method 1`;
    },
};

const src2 = {
    prop3: "Value3",
    prop4: "Value4",
    method2: function () {
        return `Method 2`;
    },
};

const target = {
    prop5: "Value5",
};

Object.assign(target, src1, src2, { prop6: "Value6" });

console.log(target);

const myObject = Object.assign({}, target, { prop7: "Value7" });

console.log(myObject);
console.log(myObject.prop1);
console.log(myObject.prop2);
console.log(myObject.prop6);
console.log(myObject.method1());
>>>>>>> fc8533fa243b9c171e34316c75779d74019eb365
console.log(myObject.method2());