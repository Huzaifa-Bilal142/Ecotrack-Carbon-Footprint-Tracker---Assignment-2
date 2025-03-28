// Quick Carbon Estimate Calculation
function quickEstimate() {
    const miles = parseFloat(document.getElementById('miles').value) || 0;
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    
    // Emission factors (simplified)
    const carEmission = 0.404; // kg CO2 per mile
    const electricityEmission = 0.92; // kg CO2 per kWh (UK average)
    
    const totalCO2 = (miles * carEmission) + (electricity * electricityEmission);
    const resultBox = document.getElementById('quick-result');
    
    if (totalCO2 > 0) {
        resultBox.innerHTML = `
            <h3>Your Estimated Carbon Footprint</h3>
            <p>From your inputs, you've produced approximately:</p>
            <p class="co2-amount">${totalCO2.toFixed(2)} kg of CO2</p>
            <p>That's equivalent to ${(totalCO2/1000).toFixed(3)} metric tons!</p>
            <a href="tracker.html" class="btn">Get Detailed Analysis</a>
        `;
        resultBox.style.display = 'block';
    } else {
        resultBox.innerHTML = '<p>Please enter some values to calculate your footprint</p>';
        resultBox.style.display = 'block';
    }
}