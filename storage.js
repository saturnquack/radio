// app.js

let data = [];

// Save data to an array
function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        data.push({ name, email });
        alert('Data saved!');
        document.getElementById('data-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
}

// Search data
function searchData() {
    const query = document.getElementById('search-query').value.toLowerCase();
    const results = data.filter(item => 
        item.name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query)
    );

    const resultsList = document.getElementById('search-results');
    resultsList.innerHTML = '';
    results.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Name: ${item.name}, Email: ${item.email}`;
        resultsList.appendChild(li);
    });
}
