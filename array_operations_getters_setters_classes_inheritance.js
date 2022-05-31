const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

const newWebTechs = webTechs.map((webTech) => webTech.toLowerCase())
console.log(newWebTechs)
const filteredWebTechs = webTechs.filter((webTech) => webTech.includes('Re'))
console.log(filteredWebTechs)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// use filter arr func to filter even numbers   
const newNums = nums.filter((num) => num % 2 === 0)
// use reduce to find sum of arr
const sumNums = nums.reduce((start, end) => start + end)
console.log(newNums)
console.log(sumNums)
// use reduce to concat
const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur)
console.log(helloWorld)

// first occurrence of a certain item or element in an array we can use find method
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenNum = numbers.find((n) => n % 2 === 0)
const firstOddNum = numbers.find((n) => n % 2 !== 0)
console.log(firstEvenNum) // 0
console.log(firstOddNum) // 1

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countryWithWay = countries.find((country) => country.includes('land'))
console.log(countryWithWay) // Norway
// findIndex finds the index of where a specific element defined in condition is
const index = countries.findIndex((country) => country.length === 6)
console.log(index)
// THE some method is used with array and return a boolean. If one or some of the items satisfy the criteria
//  check if one or some of the conditions are met
const someAreEvens = numbers.some((n) => n % 2 === 0)
console.log(someAreEvens) // true

//The method every is somehow similar to some but every item must satisfy the criteria
const allAreEvens = numbers.every((n) => n % 2 === 0)
console.log(allAreEvens) // true


const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const printProducts = products.forEach((product) => console.log(`The price of ${product.product} is ${(product.price === '' ? 'unkown' : product.price)}`))
let newList = []
const pricesList = products.map((product) => newList.push(product.price))
console.log(newList)
const noPrice = products.some((product) => product.price === '')
console.log(noPrice)
const withPrice = products.filter((product) => product.price !== '')
console.log(withPrice)
const totalPrices = pricesList.reduce((acc, end) => acc + end)
console.log(totalPrices)



// CLASSES 
class Persona {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
    // code goes here
}
// Instantiation class means creating an object from a class, use keyword NEW
const person = new Persona('Asabeneh', 'Yetayeh')
console.log(person)

//SETTERS and GETTERSexplained in code

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.score = 0
        this.skills = []
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}
const person1 = new Person('Asabeneh', 'Yetayeh')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

console.log(person1.score)
console.log(person1.getSkills)
console.log(person1.getScore)
// iNHERITANCE 
class Student extends Person {
    constructor(firstName, lastName, gender) {
        super(firstName, lastName)
        this.gender = gender
    }
    saySomething() {
        console.log('I am a child of the person class')
    }
}

const stud = new Student('Asabeneh', 'Yetayeh', 'Male')
console.log(stud)