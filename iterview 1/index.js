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