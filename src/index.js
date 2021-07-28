const test = {
  name: "John Doe",
  age: 32,
};

const test2 = {
  ...test,
  job: "developer",
};

console.log(`test`, test);
console.log(`test2`, test2);
