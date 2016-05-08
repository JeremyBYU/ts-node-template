
import * as express from 'express' // Watch Intellisense go to work in VS Code
import Person from './person' // Javascript Class
import Greeter from './greeter/greeter' // Typescript Class

const p1 = new Person('Javascript ES6 Class, no types')
const g1 = new Greeter('Typescript Class, has types')

const app = express()

app.get('/', (req, res) => {
  res.send(p1.sayName() + '<br>' + g1.greet())
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})


