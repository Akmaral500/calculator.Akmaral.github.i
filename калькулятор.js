const inputCalc = document.querySelector('.a'),
      resultCalc = document.querySelector('.result')

function input(i) {
    inputCalc.value = inputCalc.value + i
}

function result() {
    if(eval(inputCalc.value) == undefined) {
       resultCalc.value = '0';
       inputCalc.value = '0';   
    }
    if(eval(inputCalc.value) == Infinity) {
        resultCalc.value = '0';
        inputCalc.value = 'На ноль делить нельзя';  
    }
    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}

function del() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.lenght-1)
}

function reset() {
    resultCalc.value = '';
    inputCalc.value = '0';  
}