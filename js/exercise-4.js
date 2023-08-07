function isPalindrome(string) {
    string = string.toLowerCase()
    let stringToArray = string.split("")
    let stringReverse = []
    
    
    for (let i = stringToArray.length; i >= 0; i--) {
      stringReverse.push(stringToArray[i])
    }
    
    stringReverse = stringReverse.join("")
    
    if(stringReverse == string) {
      return "This word is a palindrome"
    }
    return "This word isn't a palindrome"
  }

const exercise4Form = document.getElementById("palindromeForm")
const exercise4Result = document.getElementById("palindromeResult")
const exercise4Value = document.createElement("p")

exercise4Form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const inputs = [...event.target]
    const userData = {}
    

    inputs.forEach(({name, value}) => {
        if(name) {
            userData[name] = value
        }
    })
    
    word = userData.word
    
    // console.log(word)
    exercise4Value.innerText = isPalindrome(word)
})
exercise4Result.append(exercise4Value)