const fullNameOutput = document.querySelector(".name");
const fullNameInput = document.getElementById("cardholderName");

cardholderName.addEventListener("input", () => {
  fullNameOutput.textContent = fullNameInput.value;
  if (fullNameInput.value === "") {
    fullNameOutput.textContent = "JANE APPLESEED";
  } else {
    fullNameInput.style.borderColor = "#dfdee0";
    document.querySelector('.alert1').classList.add('none');
  }
});

const cardNumberInput = document.querySelector("#cardholderNumber");
const cardNumberOutput = document.querySelector(".cardNumber");

let number = 0
cardNumberInput.addEventListener("input", () => {
  const cardNumbers = [...cardNumberInput.value];
  const numbers = cardNumbers.reduce((list, item) => {
    if (list.length === 4 || list.length === 9 || list.length === 14) {
      list.push(" ");
    }
    if (item !== " ") {
      list.push(item);
    }
    return list;
  }, []);

  const output = numbers.join("");
  const cardLength = output.length;
  console.log(cardLength);
  number = cardLength
  cardNumberOutput.textContent = output;

  const letters = document.querySelector(".letters");
  if (/[a-zA-z]/.test(output)) {
    letters.classList.remove("none");
  } else {
    letters.classList.add("none");
  }
  if (output === "") {
    cardNumberOutput.textContent = "0000 0000 0000 0000";
  } else {
    const alert2 = document.querySelector('.alert2')
    alert2.classList.add('none')
    cardNumberInput.style.borderColor = "#dfdee0";
  }
  if (cardLength == 19) {
    const numbers = document.querySelector(".numbers");
    numbers.classList.add("none");
    cardNumberInput.style.borderColor = "#dfdee0";
  }
});

const monthInput = document.querySelector(".month");
const monthOutput = document.querySelector(".monthOutput");

monthInput.addEventListener("input", () => {
  monthOutput.textContent = monthInput.value;
  if (monthInput.value === "") {
    monthOutput.textContent = "00";
  } else {
    monthInput.style.borderColor = "#dfdee0";
  }
  if(monthInput.value !== '' && yearInput.value !== '') {
    document.querySelector('.alert4').classList.add('none')
  }

});

const yearInput = document.querySelector(".year");
const yearOutput = document.querySelector(".yearOutput");

yearInput.addEventListener("input", () => {
  yearOutput.textContent = yearInput.value;
  if (yearInput.value === "") {
    yearOutput.textContent = "00";
  } else {
    yearInput.style.borderColor = "#dfdee0";
  }
  if (monthInput.value !== "" && yearInput.value !== "") {
    document.querySelector(".alert4").classList.add("none");
  }
});

const cvcInput = document.querySelector(".cvcInput");
const cvcOutput = document.querySelector(".cvcOutput");

cvcInput.addEventListener("input", () => {
  cvcOutput.textContent = cvcInput.value;
  if (cvcInput.value === "") {
    cvcOutput.textContent = "000";
  } else {
    document.querySelector('.alert5').classList.add('none');
    cvcInput.style.borderColor = "#dfdee0";
  }
});

const form = document.querySelector("form");
const submit = document.querySelector(".submitBtn");

form.addEventListener("submit", function valueCheck(e) {
  e.preventDefault();
  const input = document.querySelectorAll("input");
  input.forEach((input, index) => {
    const alert = document.querySelector(`.alert${index + 1}`);
    if (input.value === "") {
      input.style.border = "1px solid red";
      alert.classList.remove("none");
    }
  });
  const numbers = document.querySelector(".numbers");
  cardLength = number;
  if (cardLength > 0 && cardLength !== 19) {
    numbers.classList.remove("none");
    cardNumberInput.style.borderColor = "red";
  }
});
