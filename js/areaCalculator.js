//triangle area calculator function
function calculateTriangleArea (){
    const baseValue = getInputValueByID('base-value');
    const heightValue = getInputValueByID('height-value');
    const triangleArea = 0.5*baseValue*heightValue;
    // console.log(triangleArea);
    
    updateCalculatedArea('triangle-area', triangleArea);
}

//rectangle area calculator function
function calculateRectangleArea(){
    const widthValue = getInputValueByID('width-value');
    const lengthValue = getInputValueByID('length-value');
    const rectangleArea = widthValue*lengthValue;
    // console.log(triangleArea);
    
    updateCalculatedArea('rectangle-area', rectangleArea);
}