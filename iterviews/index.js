const p = {
    name:'Reyes',
    hello: () => console.log(p.name)
}
p.name='pape'
p.hello()
Object.freeze(p)
p.name='pap8'
p.hello()

const citiesList =[
  'nashville',
  'nashville',
  'Los Angeles',
  'nashville',
  'menphis',
  'barcelona',
  'Los Angeles',
  'Sevilla',
  'Madrid',
  'canary island',
  'barcelona',
  'london ',
  'Berlin',
  'Madrid'

];
const MosCitiesR=  (numCities) => {
    const cities = {}
     citiesList.forEach(city => {
        cities[city]= !cities[city]? 1 : cities[city] +1 
    })
  return Object.keys(cities)
  .map(city => 
  ({name: city, times: cities[city]}))
  .sort((a,b)=> b.times - a.times)
  .slice(0, numCities)
  .map(city => city.name)
}
console.log(MosCitiesR(3))

const numbers = [3,2,1]


const goUp = arr => arr.sort((a,b)=> a - b )

const burbleSort = (arr) => {
for (let i = 0 ; i < arr.length; i++) {
    for(let j = 0; j < arr.length -1-i; j++) {
        console.log(arr, arr[j],arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j]= arr[j + 1]
          arr[j+1]= temp

      }
    }
}
return arr
}
// console.log(burbleSort(numbers)

const addUp = (n) => {
//  let total = 0;
//  for (let i = 0; i <= n; i++) {
//      total += i
//  }
//  return total
return n * (n + 1) /2
}
// console.log(addUp(6))

// const  parr = 'Hola hola que tal bienvenidos  un dias  hoy vamos a resolver problemas'

// const  normalize = word => word
// let dict = {pal:'', number:0}
// .toLowerCase()
// .replace(/[.!,]/g,"")



// // console.log(normalize(parr))
// const countString = (s) => {
//     let dict = {};
//     const conteoChange = s.split(' ')
//     for(let word of conteoChange){
        
//     }
     
// }
// console.log(countString(parr))

const PrintPars  = (n) =>{
  for (let i = 0 ; i <n ; i++){
    for(let j = 0 ; j < n ; j++){
      console.log(i,j)
    }
  }
}
PrintPars(10)