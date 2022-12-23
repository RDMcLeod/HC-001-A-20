export const addSpinner = (element) =>{
    animateButton(element);
    setTimeout(animateButton, 1000, element);
};
const animateButton = (element)=> {
    element.classList.toggle("none");
    element.nextElementSibling.classList.toggle("block");
    element.nextElementSibling.classList.toggle("none");
};

export const displayError = (headerMsg, srMsg) =>{
    updateWeatherLocationHeader(headerMsg);
    updateScreenReaderConfirmation(srMsg);
};
export const displayApiError = (statusCode)=> {
    const properMsg = toProperCase(statusCode.message);
    updateWeatherLocationHeader(properMsg);
    updateScreenReaderConfirmation(`${properMsg}.PLease try again.`);
}

const updateWeatherLocationHeader  = (message) => {
    const h1 = document.getElementById("currentForecast__location");
    h1.textContent = message;
};
export const updateScreenReaderConfirmation = (message) => {
    document.getElementById("confirmation").textContent = message;
}