function getCount(str) {
    let count = 0
    for (let i = 0; i <str.length; i++) {     
        if (str[i] == "a"  || (str[i] == "e") || (str[i] == "i") || (str[i] == "o") || (str[i] == "u")) {
            count++       
        }
    }  
    return `This word contains ${count} vowel(s)`;
}

const exercise6Form = document.getElementById("vowelsForm")
const exercise6Result = document.getElementById("vowelsResult")
const exercise6Value = document.createElement("p")

exercise6Form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const inputs = [...event.target]
    const userData = {}
    

    inputs.forEach(({name, value}) => {
        if(name) {
            userData[name] = value
        }
    })
    
    first = userData.word
    
    // console.log(first)
    exercise6Value.innerText = getCount(first)
})
exercise6Result.append(exercise6Value)