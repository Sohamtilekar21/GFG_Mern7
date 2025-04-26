function add(x,y){
    console.log(x+y)
}

function mul(x,y){
    console.log(x*y)
}

//add(4,5)
//mul(6,3)

module.exports = {
    a:add,
    m:mul
}