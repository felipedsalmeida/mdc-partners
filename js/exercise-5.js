const exercise5Form = document.getElementById("tableForm")
const table = document.getElementById("tableResult")


exercise5Form.addEventListener("submit", (event) => {
    event.preventDefault()
    table.innerHTML = ""
    
    const inputs = [...event.target]
    const userData = {}
    

    inputs.forEach(({name, value}) => {
        if(name) {
            userData[name] = value
        }
    })
    
    first = +userData.number
    const tableLineHeader = document.createElement("tr")
    const numberHeaderData = document.createElement("th")
    const addHeaderData = document.createElement("th")
    const subHeaderData = document.createElement("th")
    const multHeaderData = document.createElement("th")
    const divHeaderData = document.createElement("th")

    numberHeaderData.innerText = ""
    addHeaderData.innerText = "Addition" 
    subHeaderData.innerText = "Subtraction"
    multHeaderData.innerText = "Multiplication"
    divHeaderData.innerText = "Division"

    tableLineHeader.append(numberHeaderData, addHeaderData,subHeaderData,multHeaderData,divHeaderData)
    table.append(tableLineHeader)
    
    
    for(let i = 0; i <= 10; i++){
        const tableLines = document.createElement("tr")
        const numberData = document.createElement("td")
        const addData = document.createElement("td")
        const subData = document.createElement("td")
        const multData = document.createElement("td")
        const divData = document.createElement("td")

        numberData.innerText = i
        addData.innerText = `${first} + ${i} = ${first + i}` 
        subData.innerText = `${i+first} - ${first} = ${(i+first) - first}`
        multData.innerText = `${first} * ${i} = ${first * i}`
        divData.innerText = `${i*first} / ${first} = ${i}`

        tableLines.append(numberData, addData,subData,multData,divData)
        table.append(tableLines)
        
    }
   
})