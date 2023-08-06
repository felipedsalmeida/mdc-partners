function calculator (a, b, operator) {
    if (operator === "+") {
        return a + b
    } else if (operator === "-"){
        return a - b
    } else if (operator === "*") {
        return a * b
    } else if (operator === "/"){
        return (a / b).toFixed(2)
    }
}

const exercise1Form = document.getElementById("calculatorForm")
const exercise1Result = document.getElementById("calculatorResult")

const exercise1Value = document.createElement("p")

exercise1Form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const inputs = [...event.target]
    const userData = {}
    

    inputs.forEach(({name, value}) => {
        if(name) {
            userData[name] = value
        }
    })
    
    
    first = +userData.firstNumber
    second = +userData.secondNumber
    op = userData.operator

    exercise1Value.innerText = calculator(first, second, op)
})
exercise1Result.append(exercise1Value)