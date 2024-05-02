document.addEventListener('DOMContentLoaded',function()
{
    const display= document.getElementById('calc-display');
    const buttons= document.getElementsByClassName('btn');
    let currentValue="";
function evaluateResult(){
    const convertedValue = currentValue
    .replace("×","*")
    .replace("÷","/")
    .replace('%','*0.01')
    .replace('sin','Math.sin')
    .replace('ln','math.log10')
    .replace('π','math.pi')
    .replace('cos','math.cos')
    .replace('log','math.log')
    .replace('e','math.e')
    .replace('tan','math.tan')
    .replace('√','math.sqrt');
    const result= eval(convertedValue);
    currentValue=result.toString();
    display.value=currentValue;
}
for (let i=0; i<buttons.length; i++){
    const button=buttons[i];
    button.addEventListener('click', function(){
        const value= button.innerText;
        if (value == "AC") {
            currentValue = "";
            display.value=currentValue;
        }else if (value=="="){
            evaluateResult();
        }else{
        currentValue += value;
        display.value = currentValue;
        }
    })
    
}

});