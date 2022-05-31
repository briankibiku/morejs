// Declare an empty array;
let nums = []
// Declare an array with more than 5 number of elements
let numbers = [1, 2, 3, 4, 5, 6]
// Find the length of your array
console.log(numbers.length)
// Get the first item, the middle item and the last item of the array
console.log(numbers[0])
console.log(numbers[Math.trunc((numbers.length - 1) / 2)])
console.log(numbers[numbers.length - 1])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['a', false, 2, 2.0, 'Hello', 'World', { name: 'KIm' }]
console.log(mixedDataTypes)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length - 1)
// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[Math.trunc((itCompanies.length - 1) / 2)])
console.log(itCompanies[itCompanies.length - 1])
console.log('<----Break---->')
// Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}
// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    let uppercasedCompany = itCompanies[i].toUpperCase()
    console.log(uppercasedCompany)
}
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies + ' are big IT companies.')
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyName = 'Facebookz'
let checkExists = itCompanies.includes(companyName)
if (!checkExists) {
    console.log('company is not found')
} else {
    console.log(companyName)
}
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
console.log(itCompanies.sort())
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
console.log(itCompanies.reverse(), 'Normal Array')
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(3, -1), 'last 3 slice')
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.trunc((itCompanies.length - 1) / 2)), 'HALF ')
// Remove the first IT company from the array
console.log('SHIFT')
console.log(itCompanies.shift())
// Remove the middle IT company or companies from the array
console.log('REMOVE MIDDLE')
console.log(itCompanies.splice(Math.trunc((itCompanies.length - 1) / 2), 1))
console.log(itCompanies)
// Remove the last IT company from the array
console.log('POP')
console.log(itCompanies.pop())
// Remove all IT companies
itCompanies = []


switch ('keyz') {
    case 'value':
        console.log('value')
        break;
    case 'key':
        console.log('key')
        break;

    default:
        console.log('Not in case')
        break;
}
