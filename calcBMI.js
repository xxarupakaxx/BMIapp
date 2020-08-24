"use strict";

function onCalcBMIButtonClick(){
    let heightInput = document.getElementById("heightInput");

    let height = heightInput.value;
    let weightInput = document.getElementById("weightInput");
    let weight = weightInput.value;

    let bmiObj = new BMI(height,weight);
    let bmi =bmiObj.getBMI();

    let bmiResult = document.getElementById("bmiResult");

    bmiResult.textContent = bmi;

    let advice = bmiObj.getAdvice();
    let adviceMessage = document.getElementById("adviceMessage");
    adviceMessage.textContent = advice;
    
let resultMessage = document.getElementById("resultMessage");
resultMessage.classList.remove("displayNone");
} 