console.log("welcome")

const sayHello=require('./greet')
const maths = require('./maths')
//const { a, m } = require('./maths')
const gen_random_num = require('./random_no')

sayHello('abc')

console.log(gen_random_num())

maths.a(3,2)
maths.m(3,3)