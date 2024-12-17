let num = 1;
let sum = 0;

while (num <= 20) {
    if (num % 2 === 0) {
        sum += num;
    }
    num++;
}

console.log("The sum of even numbers between 1 and 20 is:", sum);