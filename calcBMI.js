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

window.addEventListener("DOMContentLoaded",function(){

    let heightInput = document.getElementById("heightInput");
    heightInput.addEventListener("input",checkInput);
    heightInput.addEventListener("blur" , checkInput);

    let weightInput = document.getElementById("weightInput");
    weightInput.addEventListener("input",checkInput);
    weightInput.addEventListener("blur",checkInput);
});

