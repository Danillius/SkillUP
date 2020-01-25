function calc() {
    let arg1 = Number;
    let arg2 = Number;
    let result;
    switch (calc) {
        case '-':
          document.getElementById('minus').onclick = function () {
                let minus = arg1-arg2 || arg2-arg1;
                return result;
                         }
            break;
        case '+':
        document.getElementById('plus').onclick = function (){
            result.onclick = arg1+arg2 || arg2+arg1;
            return result;
            }
            
            break;
        case '*':
        document.getElementById('mult').onclick = function () {
            result.onclick = arg1*arg2 || arg2*arg1;
            return result;
        }
            break;
        case '/':
            document.getElementById('devide').onclick = function (){
            if (arg2 == 0 || arg1 == 0){
               return result.onclick = 'NaN, what had you expected man?';
            } else {
               return result.onclick = arg1/arg2 || arg2/arg1;
            }
        }
            break;
        case '**':
            document.getElementById('inv').onclick = function (){
           return result.onclick = Math.pow(arg1, arg2) || Math.pow(arg2, arg1);
            }
            break;

        case 'sqrt':
            document.getElementById('sqrt').onclick = function (){
           return result.onclick = Math.sqrt(arg1 || arg2);
            }
           break;
        default:
           return result.onclick = "if you want to count something, just do it";
    }
    
    
}