
const fizzbuss = (num) => {
    if(typeof num != 'number'){
      
    return "Error The argument should be a number"
    }
    if(num===0) return 0
    const divisible  = (div , num) =>  num % div === 0
if(divisible(3 , num) && divisible(5, num) ){
        return 'fizzbuss'
    }
   
if(divisible(3,num)){
    return 'fizz'
}
if(num %5 ===0){
    return 'buzz'
}


return num
}
const print = (num) => {
    for(let i = 0; i <= num; i++){
        console.log(`${i}:${fizzbuss(i)}`)
    }
}
print('16')

module.exports = fizzbuss;
