function averageGrade(firstGrade, secondGrade, thirdGrade) {
    let average = (firstGrade + secondGrade + thirdGrade) / 3
    return `The average grade is: ${average.toFixed(2)}`
}

const exercise7Form = document.getElementById("gradeForm")
const exercise7Result = document.getElementById("gradeResult")
const exercise7Value = document.createElement("p")

exercise7Form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const inputs = [...event.target]
    const userData = {}
    

    inputs.forEach(({name, value}) => {
        if(name) {
            userData[name] = value
        }
    })
    // console.log(userData.firstNumber)
    first = +userData.grade1
    second = +userData.grade2
    third = +userData.grade3

    exercise7Value.innerText = averageGrade(first, second, third)
})
exercise7Result.append(exercise7Value)