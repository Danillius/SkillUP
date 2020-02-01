
const operands = document.querySelectorAll('.operand').value,
 operators = document.querySelectorAll('.operator').value,
 decimal = document.getElementById('dot'),
 result = document.getElementById('count'),
 clear = document.getElementById('clear');

 for (let i = operand; i < operands.length; i++) {
    const operand = operands[i];
    operand.addEventListener('click', function (foo) {
        console.log('button clicked');
    });
 }


function name(params) {
    
}
function name(params) {
    
}
function name(params) {
    
}
function name(params) {
    
}

// let arg1, arg2, result;
// let calculation = '';
// function calc() {
//     let arg1 = Number;
//     let arg2 = Number;
//     let result;
//     switch (calc) {
//         case '-':
//           document.getElementById('minus').onclick = function () {
//                 let minus = arg1-arg2 || arg2-arg1;
//                 return result;
//                          }
//             break;
//         case '+':
//         document.getElementById('plus').onclick = function (){
//             result = arg1+arg2 || arg2+arg1;
//             return result;
//             }
//             break;
//         case '*':
//         document.getElementById('mult').onclick = function () {
//             result = arg1*arg2 || arg2*arg1;
//             return result;
//         }
//             break;
//         case '/':
//             document.getElementById('devide').onclick = function (){
//             if (arg2 == 0 || arg1 == 0){
//                return result = 'NaN, what had you expected man?';
//             } else {
//                return result = arg1/arg2 || arg2/arg1;
//             }
//         }
//             break;
//         case '**':
//             document.getElementById('inv').onclick = function (){
//            return result = Math.pow(arg1, arg2) || Math.pow(arg2, arg1);
//             }
//             break;

//         case 'sqrt':
//             document.getElementById('sqrt').onclick = function (){
//            return result = Math.sqrt(arg1 || arg2);
//             }
//            break;
//         default:
//            return result = "if you want to count something, just do it";
//     }
//     document.getElementById('button').value = result;
// };