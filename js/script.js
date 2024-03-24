let firstLabel = document.querySelector(".C")
let secondLable = document.querySelector(".F")
let changeBtn = document.querySelector(".changeButton")
let resetBtn = document.querySelector(".resetButton")
let convertBtn = document.querySelector(".convertButton")
let input = document.getElementById("converter")
let result = document.querySelector(".result")


changeBtn.addEventListener('click', function () {
    if (input.placeholder === '°C') {
        firstLabel.innerHTML = '°F'
        secondLable.innerHTML = '°C'
        input.placeholder = '°F'
        result.innerHTML = ""
        input.value = ""
    } else {
        firstLabel.innerHTML = '°C'
        secondLable.innerHTML = '°F'
        input.placeholder = '°C'
        result.innerHTML = ""
        input.value = ""
    }
})

resetBtn.addEventListener('click', function () {
    firstLabel.innerHTML = '°C'
    secondLable.innerHTML = '°F'
    input.placeholder = '°C'
    result.innerHTML = ""
    input.value = ""
})

convertBtn.addEventListener('click', function () {
    if (!isNaN(input.value) && input.value !== "") {
        if (input.placeholder === "°C") {
            let convertedValue = ((input.value * 9) / 5) + 32
            result.innerHTML = input.value + "°C is " + convertedValue.toFixed(2) + "°F"
            result.style.color = 'rgb(255, 255, 102)'
        } else {
            let convertedValue = (input.value - 32) / 1.8
            result.innerHTML = input.value + "°F is " + convertedValue.toFixed(2) + "°C"
            result.style.color = 'rgb(255, 255, 102)'
        }
    } else {
        result.innerHTML = "Please enter a number to convert..."
        result.style.color = '#993300'
    }
})
