let num1 = 20;
function second() {
    let num2 = 22;

    function third() {
        let num3 = 2;
        console.log(num1 + num2 + num3);
    }
    third();
}
second();