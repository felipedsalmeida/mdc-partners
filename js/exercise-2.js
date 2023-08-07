function primeNumbers (num) {
    for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        return false
    }}
    if (num > 1){
        return true
    }

    return false
}

let primes = []
function firstPrimeNumbers(maxValue){
    for (let i = 2;primes.length < maxValue; i++){
        if (primeNumbers(i) == true){
            primes.push(i)}
        }
    }

firstPrimeNumbers(10)

const exercise2Form = document.getElementById("primesForm")
const exercise2Result = document.getElementById("primesResult")
const exercise2Value = document.createElement("p")
const exercise2FirstPrimes = document.createElement("p")


exercise2Form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const inputs = [...event.target]
    const userData = {}

    inputs.forEach(({name, value}) => {
        if(name) {
            userData[name] = value
        }
    })
    
    first = +userData.number
    
    if(primeNumbers(first)) {
        exercise2Value.innerText = `${first} is prime`
        exercise2Result.append(exercise2Value)
    } else {
        exercise2Value.innerText = `${first} isn't prime`
        exercise2Result.append(exercise2Value)
    }

    exercise2FirstPrimes.innerText = `These are the first 10 prime numbers: ${primes}`
    exercise2Result.append(exercise2FirstPrimes)
})