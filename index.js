let a = prompt("Введите число a");
let b = prompt("Введите число b");
let operation = prompt("Введите команду");
let result;

switch (operation) {
  case "sum":
    result = +a + +b;
    break;
  case "multi":
    result = +a * +b;
    break;
  case "subtract":
    result = +a - +b;
    break;
  default:
    alert("Unsuported operation");
}

let final = operation + " = " + result;
alert(final);