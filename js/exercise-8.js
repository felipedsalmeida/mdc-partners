function interestCalc(initialCapital, interestRate, investmentTime){
    let amount = initialCapital * (1 + interestRate)**investmentTime
    return `R$ ${amount.toFixed(2)}`
}
const exercise8Form = document.getElementById("investmentForm")
const exercise8Result = document.getElementById("investmentResult")
const exercise8Value = document.createElement("p")

exercise8Form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const inputs = [...event.target]
    const userData = {}
    

    inputs.forEach(({name, value}) => {
        if(name) {
            userData[name] = value
        }
    })
    
    first = +userData.capital
    second = +userData.rate
    third = userData.time

    exercise8Value.innerText = interestCalc(first, second, third)
})
exercise8Result.append(exercise8Value)