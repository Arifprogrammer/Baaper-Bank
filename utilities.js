function inputGetElementById(inputId){
    const InputField = document.getElementById(inputId);
    const amount = parseFloat(InputField.value);
    InputField.value ="";
    return amount;
}

function elementGetElementById(elementId){
    const elementTotalString = document.getElementById(elementId).innerText;
    const elementTotal = Number(elementTotalString);
    return elementTotal;
}

function setElementById(elementIdName, value){
    document.getElementById(elementIdName).innerText = value;
}
