function ExampleConstructor() {}

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log(
  'typeof ExampleConstructor.prototype:',
  typeof ExampleConstructor.prototype
);
const newExampleConstructor = new ExampleConstructor();
console.log('newExampleConstructor:', newExampleConstructor);
const instanceOfExampleConstructor =
  newExampleConstructor instanceof ExampleConstructor;
console.log('instanceofExampleConstructor:', instanceOfExampleConstructor);
