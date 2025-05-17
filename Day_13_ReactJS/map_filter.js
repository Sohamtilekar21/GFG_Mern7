const fruits = ["apple","mango","banana","watermelon","grapes"]
console.log(fruits)

const z = fruits.map(f=>{
    return f.toUpperCase()
})
console.log(z)

console.log("---------------------------------")

const nums =[7,8,2,5,6,3]
console.log(nums)
const x = nums.filter(n=>{
    if(n%2==0)
        return n
})
console.log(x)

console.log("---------------------------------")

const array = fruits
console.log(array)
const a1 = array.slice(0,3) // no changes to orig last index not included
console.log(a1)
const a2 = array.splice(1,3) // changes orig n last index included
console.log(a2)
console.log(array)
