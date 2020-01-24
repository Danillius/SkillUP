function calc() {
    let arg1 = Number;
    let arg2 = Number;
    let result;
    switch (calc) {
        case '-':
            function () {
                let minus = arg1-arg2;
                return result; 
            }
            break;
        case '+':
            result = arg1-arg2;
            break;
        case '*':
            result = arg1*arg2;
            break;
        case '/':
            if (arg2 === 0){
                result = 'NaN, what had you expected man?';
            } else {
                result = arg1/arg2;
            }
            break;
        case '**':
            result = arg1 ** arg2;
            break;
        default:
            result = "if you want to count something, just do it"
    }
    console.log(result);
    
}