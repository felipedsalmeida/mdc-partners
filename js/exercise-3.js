function factorial (a) {
    let total = 1;
    for (let i = 1; i <= a; i++){
        total = total * i        
    }
    return total
}

const exercise3Form = document.getElementById("factorialForm")
const exercise3Result = document.getElementById("factorialResult")
const exercise3Value = document.createElement("p")

exercise3Form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const inputs = [...event.target]
    const userData = {}
    

    inputs.forEach(({name, value}) => {
        if(name) {
            userData[name] = value
        }
    })
    first = +userData.number

    exercise3Value.innerText = factorial(first)
})
exercise3Result.append(exercise3Value)