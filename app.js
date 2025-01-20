// app.js

function addData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        // Get the table body
        const tableBody = document.getElementById('data-table').querySelector('tbody');

        // Create a new row
        const newRow = document.createElement('tr');

        // Create and append name cell
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        newRow.appendChild(nameCell);

        // Create and append email cell
        const emailCell = document.createElement('td');
        emailCell.textContent = email;
        newRow.appendChild(emailCell);

        // Append the new row to the table
        tableBody.appendChild(newRow);

        // Clear the form
        document.getElementById('data-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
}
