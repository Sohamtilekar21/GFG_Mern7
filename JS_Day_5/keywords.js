// hoisting == declaring variables before using them

a=22
console.log(a)

a=true
console.log(a)

//console.log(b)
//b=12
//will give error as b is defined after

console.log(c)
var c=11
// no error
// but console will not know the value of c as it is defined after



let college="gfg"
console.log(college)

//error changes to cannot access before initialization
// for overwrite do not use let

college="abc"
console.log(college)



const holiday="sunday"
//const
console.log(holiday)

//cannot overwrite const

function abc() {
    z = document.getElementById("xyz")
    console.log(z)
    z.style.background="yellow"
    z.style.color="red"
}

let name="mern"
let duration=5

console.log("I am learing "+ name + "from last" + duration + "Years")

console.log(`I am learning ${name} from last ${duration} years`)

function add(x,y){
    return x+y
}

console.log(add(3,4))


const add1 = (g,h)=>{  // nameless arrow func
    return g+h
}

console.log(add1(4,5))

//any interaction with the brwser is an event
//let text=document.querySelector('h3')
//let text=document.querySelectorAll('h3')[0]
let text=document.getElementsByTagName('h3')[0]
console.log(text)

let myBtn=document.querySelectorAll("button")[1]
console.log(myBtn)

myBtn.addEventListener('click', ()=> {
    text.style.textAlign="center"
})