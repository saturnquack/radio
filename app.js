const API_URL = "https://script.google.com/macros/s/AKfycbyLKekf2ir_Pu0XNlXkgI8X5cVw0WcPh5RyTk6GPT96JewPnrzGYN8Y3XZJ1bbnjQg/exec";

function addData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
        })
        .then(response => response.text())
        .then(result => {
            console.log(result); // Log the response for debugging
            if (result === "Success") {
                alert('Data saved!');
                document.getElementById('data-form').reset();
                loadData();
            } else {
                alert('Error: ' + result);
            }
        })
        .catch(err => {
            console.error('Fetch error:', err);
            alert('Failed to send data.');
        });
    } else {
        alert('Please fill in all fields.');
    }
}
