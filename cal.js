function calculate() {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let op = document.getElementById("operation").value;

    console.log("operation =", op);

    if (op == "add") {
        document.getElementById("res").innerText = n1 + n2;
    } else if (op == "sub") {
        document.getElementById("res").innerText = n1 - n2;
    } else if (op == "mul") {
        document.getElementById("res").innerText = n1 * n2;
    } else if (op == "div") {
        document.getElementById("res").innerText = n1 / n2;
    }
}
