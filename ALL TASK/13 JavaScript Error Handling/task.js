function divideNumbers(x, y) {
    try {
        if (y === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        let result = x / y;
        console.log(`The result is: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}


divideNumbers(40, 0);
divideNumbers(40, 2);