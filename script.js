document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Your Basal Metabolic Rate (BMR) is ${bmr.toFixed(2)} calories/day.';

    const tableBody = document.getElementById('inputTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = age;
    newRow.insertCell(1).textContent = gender;
    newRow.insertCell(2).textContent = height;
    newRow.insertCell(3).textContent = weight;
    newRow.insertCell(4).textContent = bmr.toFixed(2);
});