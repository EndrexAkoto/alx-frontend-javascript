import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 10-main.js
TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
true
TestCar { _brand: undefined, _motor: undefined, _color: undefined }
true
false
