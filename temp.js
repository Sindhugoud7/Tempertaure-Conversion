Java Script Code
// Create a script.js file

const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");

celsiusInput.addEventListener("input", () => {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    if (!isNaN(fahrenheit)) {
        fahrenheitInput.value = fahrenheit.toFixed(2); // Round to 2 decimal places
    } else {
        fahrenheitInput.value = '';
    }
});

fahrenheitInput.addEventListener("input", () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    if (!isNaN(celsius)) {
        celsiusInput.value = celsius.toFixed(2); // Round to 2 decimal places
    } else {
        celsiusInput.value = '';
    }
});
