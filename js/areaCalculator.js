document.getElementById('btn-calculate').addEventListener('click', function(){
    const baseValue = getInputValueByID('base-value');
    const heightValue = getInputValueByID('height-value');
    const area = 0.5*baseValue*heightValue;
    console.log(area);
    
    updateCalculatedArea('triangle-area', area);
})