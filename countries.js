const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
console.log(shoppingCart.unshift('Meat'))
console.log(shoppingCart, 'Unshift happened')
console.log(shoppingCart.push('Sugar'))
let allergicToHoney = true
if (allergicToHoney) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
}
shoppingCart.indexOf('Tea')
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)


const countryVariable = 'ETHIOPIA'
countries.includes(countryVariable)
if (countries.includes(countryVariable)) {
    console.log(countryVariable)
} else {
    countries.push(countryVariable)
}

console.log(countries, 'COUNTRIES ARRAY')