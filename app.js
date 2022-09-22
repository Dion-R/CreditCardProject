const fullNameOutput = document.querySelector('.name');
const fullNameInput = document.getElementById("cardholderName");

cardholderName.addEventListener('input', () => {
   fullNameOutput.textContent = fullNameInput.value;
   if(fullNameInput.value === '') {
    fullNameOutput.textContent = 'JANE APPLESEED'
   }
})

const cardNumberInput = document.querySelector('#cardholderNumber')
const cardNumberOutput = document.querySelector(".cardNumber");

cardNumberInput.addEventListener('input', ()=> {
    const cardNumbers = [...cardNumberInput.value];
     const numbers = cardNumbers.reduce((list, item) => {
        if(item !== ' ') {
            list.push(item)
        }
        return list
    }, [])
    const number1 = document.querySelector('.number1');
    const number2 = document.querySelector(".number2");
    const number3 = document.querySelector(".number3");
    const number4 = document.querySelector(".number4");
    const number1Array = []

   
})

const monthInput = document.querySelector('.month');
const monthOutput = document.querySelector('.monthOutput')

monthInput.addEventListener('input', () => {
    monthOutput.textContent = monthInput.value;
    if(monthInput.value === '') {
        monthOutput.textContent = '00'
    }
})

const yearInput = document.querySelector('.year');
const yearOutput = document.querySelector('.yearOutput')

yearInput.addEventListener('input', ()=> {
yearOutput.textContent = yearInput.value;
if(yearInput.value === '') {
    yearOutput.textContent = '00'
} 
})

const cvcInput = document.querySelector('.cvcInput');
const cvcOutput = document.querySelector('.cvcOutput');

cvcInput.addEventListener('input', () => {
    cvcOutput.textContent = cvcInput.value;
    if(cvcInput.value === '') {
        cvcOutput.textContent = '000'
    }
})