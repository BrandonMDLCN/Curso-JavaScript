flag = "";
function exit(str){
    if (str === "Q"){
        return true;
    }
}
while(flag != "Q"){
    let number1 = prompt('Please enter a number');
    if(exit(number1)){
        flag = "Q";
        break;
    }
    while (number1 === '' || isNaN(number1)) {
        number1 = prompt('Please enter a valid number');
        if(exit(number1)){
            flag = "Q";
            break;
        }
    }
    if(exit(number1)){
        flag = "Q";
        break;
    }
    let math = prompt('Please enter a simbol');
    if(exit(math)){
        flag = "Q";
        break;
    }
    while(math === '' || math != '+' || math != '-' || math != '/' || math != '*'){
        math = prompt('Please enter a valid simbol');
        if(exit(math)){
            flag = "Q";
            break;
        }
    }
    if(exit(math)){
        flag = "Q";
        break;
    }

    let number2 = prompt('Please enter a number');
    if(exit(number2)){
        flag = "Q";
        break;
    }

    while (number2 === '' || isNaN(number2)) {
        number2 = prompt('Please enter a valid number');
        if(exit(number2)){
            flag = "Q";
            break;
        }
    }
    if(exit(number2)){
        flag = "Q";
        break;
    }
    if (math === '+') {
        alert(+number1 + +number2);
    } else if (math === '-') {

        alert(+number1 - +number2);
    } else if (math === '*') {

        alert(+number1 * +number2);

    } else if (math === '/') {

        alert(+number1 / +number2);

    } else {
        alert('Please enter a valid simbol');
    }
}