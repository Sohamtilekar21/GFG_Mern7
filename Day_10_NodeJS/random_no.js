function gen_random_num(){
    return Math.random().toString().slice(2,4)
}

//console.log(gen_random_num())

module.exports = gen_random_num