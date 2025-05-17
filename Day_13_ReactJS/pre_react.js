const course = "MERN"
const duration = 20

console.log(`I am doing ${course} since ${duration} years`)

// function add(a,b){
//     return a+b
// }
// console.log(add(5,6))

const add=(x,y)=>x+y
console.log(add(1,3))

age = 19
// if(age<18){
//     console.log("cannot vote")
// }else{
//     console.log("can vote")
// }

const vote = age>18 ? "can vote" : "cannot vote"
console.log(vote)

const person = {
    name : "Mario",
    myAge : 31,
    isAlive : true,
    city : "pune"
}

const person1 ={
    ...person,
    name : "Luigi",
    myAge : 26
}

console.log(person)
console.log(person1)

const {name,city}=person
console.log(name)
console.log(city)

//rest
const [first,second,third,...rest]=["A","B","C","D","E","F"]
console.log(first)
console.log(rest)

//spread
const lang = ["html","css","javascript","mongodb"]
const addlang = ["java","python",...lang]

//console.log(lang)
console.log(addlang)

