class BMI{
    constructor(height =0,weight= 0){
        this.height =height;
        this.weight = weight;
    }
    getBMI(){
    let bmi = this.weight/Math.pow(this.height/100 ,2);
    
    bmi *=10;
    bmi =Math.round(bmi);
    bmi /=10;

    return bmi;
}

getAdvice(){
    let bmi = this.weight/Math.pow(this.height/100 ,2);

    bmi =Math.round(bmi);

    let idealWeight =Math.round(22 * Math.pow(this.height/100 ,2));
    let adviceMessage = "理想体重だぞ　うな重食べたい";

    if(bmi > 22){
        adviceMessage = "太りすぎ　ジャイアンかよ 体重　" + idealWeight + "kgを目指しましょう";

    }
    else if(bmi < 22){
        adviceMessage ="やせすぎ　ニンジンさん？　体重　" + idealWeight + "kgを目指しましょう";    
    }

    return adviceMessage;

}
}

