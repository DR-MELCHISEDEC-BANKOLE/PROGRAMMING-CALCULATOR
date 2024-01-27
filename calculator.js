function evaluateExpression() {
    const expressionInput = document.getElementById('expression');
    const resultOutput = document.getElementById('result');

    try {
        const result = math.evaluate(expressionInput.value);
        resultOutput.textContent = `Result: ${result}`;
    } catch (error) {
        resultOutput.textContent = 'Invalid expression';
    }
}
