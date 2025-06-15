document.getElementById("add").addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = number1 + number2;
    document.getElementById("calculation-result").textContent = result;
})

document.getElementById("subtract").addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = number1 - number2;
    document.getElementById("calculation-result").textContent = result;
})

document.getElementById("multiply").addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = number1 * number2;
    document.getElementById("calculation-result").textContent = result;
})

document.getElementById("divide").addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    if (number2 === 0) {
        document.getElementById("calculation-result").textContent = "Cannot divide by zero";
    } else {
        const result = number1 / number2;
        document.getElementById("calculation-result").textContent = result;
    }
})