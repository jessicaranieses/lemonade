const COST_PER_CUP = 0.5; // Cost to make each cup
const MAX_CUSTOMERS = 100; // Max number of customers per day
let attempts = 5;
let maxProfit = 0;

function calculateProfit() {
    const price = parseFloat(document.getElementById("price").value);
    const customers = MAX_CUSTOMERS - (price * 10); 
    const profit = (price - COST_PER_CUP) * customers;

    if (profit > maxProfit) {
        maxProfit = profit;
    }

    attempts--;

    const resultElement = document.getElementById("result");
    resultElement.textContent = `With a selling price of $${price.toFixed(2)}, you'll have ${customers} customers and make a profit of $${profit.toFixed(2)}. Your highest profit so far is $${maxProfit.toFixed(2)}.`;

    const attemptsElement = document.getElementById("attempts");
    attemptsElement.textContent = `Attempts Remaining: ${attempts}`;

    if (attempts === 0) {
        resultElement.textContent += " Game over! Your highest profit was: $" + maxProfit.toFixed(2);
        document.getElementById("price").disabled = true;
    }
}
