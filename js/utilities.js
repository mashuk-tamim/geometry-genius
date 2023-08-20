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

//Area entry function
function updateAreaEntry(areaName, areaValue){
    const areaEntry = document.getElementById('area-entry');

    const count = areaEntry.childElementCount;
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `${count+1}. ${areaName}: ${areaValue} cm<sup>2</sup> <button class="btn btn-xs btn-success ml-2"><p style="text-transform: lowercase">convert m<sup>2</sup></p>`;
    areaEntry.appendChild(paragraph);
}