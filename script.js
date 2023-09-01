const COST_PER_CUP = 0.5;
const MAX_CUSTOMERS = 100;
let attempts = 5;
let profits = [];

function calculateProfit() {
    const price = parseFloat(document.getElementById("price").value);
    const customers = MAX_CUSTOMERS - (price * 10); 
    const profit = (price - COST_PER_CUP) * customers;

    profits.push(profit.toFixed(2));  // Storing the profit for this attempt

    attempts--;

    const resultElement = document.getElementById("result");
    resultElement.textContent = `With a selling price of $${price.toFixed(2)}, you'll have ${customers} customers and make a profit of $${profit.toFixed(2)}.`;

    const attemptsElement = document.getElementById("attempts");
    attemptsElement.textContent = `Attempts Remaining: ${attempts}`;

    if (attempts === 0) {
        document.getElementById("price").disabled = true;
        document.getElementById("attempts").style.display = "none";
        displayFinalResults();
    }
}

function displayFinalResults() {
    let table = document.getElementById("profitTable");
    let cumulativeProfit = 0;

    for(let i = 0; i < profits.length; i++) {
        cumulativeProfit += parseFloat(profits[i]);
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = "Attempt " + (i+1);
        cell2.innerHTML = "$" + cumulativeProfit.toFixed(2);
    }

    document.getElementById("finalResults").style.display = "block";
    document.getElementById("result").textContent += " Here's a summary of your profits over the 5 attempts.";
}
