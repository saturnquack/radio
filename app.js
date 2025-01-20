const API_URL = "https://script.google.com/macros/s/AKfycbzfJTmSxEAN0gMxplnEvGjpXZ5P-lMef1zBxIlSScKw8wTggoTsAJxOyxuf6RpA5T-v/exec";

function addData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        // Send data to Google Sheets
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({ name, email }),
        })
        .then(response => response.text())
        .then(() => {
            alert('Data saved!');
            document.getElementById('data-form').reset();
            loadData(); // Refresh the table
        })
        .catch(err => console.error(err));
    } else {
        alert('Please fill in all fields.');
    }
}

function loadData() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('data-table').querySelector('tbody');
            tableBody.innerHTML = ''; // Clear the table

            data.slice(1).forEach(row => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `<td>${row[0]}</td><td>${row[1]}</td>`;
                tableBody.appendChild(newRow);
            });
        })
        .catch(err => console.error(err));
}

// Load data on page load
window.onload = loadData;
