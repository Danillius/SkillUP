function calc() {
    let arg1 = Number;
    let arg2 = Number;
    let result;
    switch (calc) {
        case '-':
            function () {
                let minus = arg1-arg2 || arg2-arg1;
                return result; 
            }
            break;
        case '+':
            result.onclick = arg1+arg2 || arg2+arg1;
            break;
        case '*':
            result.onclick = arg1*arg2 || arg2*arg1;
            break;
        case '/':
            if (arg2 === 0 || arg1 ===0){
                result.onclick = 'NaN, what had you expected man?';
            } else {
                result.onclick = arg1/arg2 || arg2/arg1;
            }
            break;
        case '**':
            result.onclick = Math.pow(arg1, arg2) || Math.pow(arg2, arg1);
            break;
        case 'sqrt':
            result.onclick = Math.sqrt(arg1 || arg2);
        default:
            result.onclick = "if you want to count something, just do it";
    }
    
    
}