import Person from './person' // Javascript E
import Greeter from './greeter/greeter'
const p1 = new Person('Javascript Class, no types')
const g1 = new Greeter('Typescript Class, has types');

setTimeout(() => {
  console.log(p1.sayName())
  console.log(g1.greet())
}, 10000)
