const p = {
    name:'Reyes',
    hello: () => console.log(p.name)
}
p.name='pape'
p.hello()
Object.freeze(p)
p.name='pap8'
p.hello()
