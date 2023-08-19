//retrieving value form input field
function getInputValueByID(inputID){
    const inputFieldValue = document.getElementById(inputID);
    const inputFieldValueFloat = parseFloat(inputFieldValue.value);
    // console.log(inputFieldValueFloat, typeof inputFieldValueFloat);
    inputFieldValue.value = '';
    return inputFieldValueFloat;
}

//updating value in the Area
function updateCalculatedArea(areaID, areaValue){
    const getArea = document.getElementById(areaID);
    getArea.innerText = areaValue;
    // console.log(getArea.innerText);
}