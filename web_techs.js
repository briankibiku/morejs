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

const webTechVar = 'Saas'
webTechs.includes(webTechVar)
if (webTechs.includes(webTechVar)) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push(webTechVar)
}
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

let sum = 0
for (let i = 0; i < 101; i++) {
    sum += i
}

console.log(sum)
// If we want to sum only even numbers:

let sumEvenNums = 0
for (let i = 0; i < 101; i += 2) {
    sumEvenNums += i
}

console.log(sumEvenNums)

const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki',
    },
    getPersonInfo: function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    },
}
console.log('KEYS')
console.log(Object.entries(person))
person.new = 'old'
console.log(person)

