const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.get('/teste', (req, res) => {
    res.send('O teste deu certo!')
})
app.get('/api/products', (req, res) => {
let products = [{name: 'Tequila', category: 'drink'}, 
{name: 'Beer', category: 'drink'}, 
{name: 'Burger', category: 'food'},
{name: 'Shawarma', category: 'food'}, 
{name: 'Wine', category: 'drink'},
{name: 'Gelatto', category: 'dessert'}];
    
    res.send(products)
})
app.listen(process.env.PORT || 3000)
