const inputNumber = document.getElementById("inp-number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNums = ["I", "V", "X", "L", "C", "D", "M"]


const decimalToRoman = (inp) => {
    let decimal = 0
    let display = [];

    for (let i = 0; i < [...inp].length; i++) {

        if (parseInt(inp[i]) === 1 || parseInt(inp[i]) === 2 || parseInt(inp[i]) === 3) {

            display.unshift(romanNums[decimal].repeat(inp[i]))
            decimal += 2

        } else if (parseInt(inp[i]) === 4) {

            display.unshift(romanNums[decimal] + romanNums[decimal + 1])
            decimal += 2

        } else if (parseInt(inp[i]) === 5) {

            display.unshift(romanNums[decimal + 1])
            decimal += 2

        } else if (parseInt(inp[i]) === 6 || parseInt(inp[i]) === 7 || parseInt(inp[i]) === 8) {

            display.unshift(romanNums[decimal + 1] + romanNums[decimal].repeat(inp[i] - 5))
            decimal += 2

        } else if (parseInt(inp[i]) === 9) {

            display.unshift(romanNums[decimal] + romanNums[decimal + 2])
            decimal += 2

        } else if (parseInt(inp[i]) === 0) {

            display.unshift("")
            decimal += 2
        }
    }

    output.innerText = display.join("")
    inputNumber.value = ""




}


const checkInput = () => {

    const reversedInput = inputNumber.value.split("").reverse().join("");

    if (!inputNumber || isNaN(parseInt(inputNumber.value))) {
        output.innerText = "Please enter a valid number"
    } else if (inputNumber.value < 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if (inputNumber.value > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
    } else {
        decimalToRoman(reversedInput)
    }

    inputNumber.value = ""
}

convertBtn.addEventListener("click", checkInput)