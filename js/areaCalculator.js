//triangle area calculator function
function calculateTriangleArea (){
    const baseValue = getInputValueByID('triangle-base');
    const heightValue = getInputValueByID('triangle-height');
    // console.log(baseValue, heightValue, typeof baseValue, typeof heightValue);
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('Please input a number');
        return;
    }
    const triangleArea = 0.5*baseValue*heightValue;
    // console.log(triangleArea);
    
    updateCalculatedArea('triangle-area', triangleArea);
    updateAreaEntry('Triangle', triangleArea);
}

//rectangle area calculator function
function calculateRectangleArea(){
    const widthValue = getInputValueByID('rectangle-width');
    const lengthValue = getInputValueByID('rectangle-length');
    if(isNaN(widthValue) || isNaN(lengthValue)){
        alert('Please input a number');
        return;
    }
    const rectangleArea = widthValue*lengthValue;
    // console.log(triangleArea);
    
    updateCalculatedArea('rectangle-area', rectangleArea);
    updateAreaEntry('Rectangle', rectangleArea);
}

//parallelogram area calculator function
function calculateParallelogramArea(){
    const baseValue = getInputValueByID('parallelogram-base');
    const heightValue = getInputValueByID('parallelogram-height');
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('Please input a number');
        return;
    }
    const parallelogramArea = baseValue * heightValue;
    // console.log(triangleArea);
    
    updateCalculatedArea('parallelogram-area', parallelogramArea);
    updateAreaEntry('Parallelogram', parallelogramArea);
}