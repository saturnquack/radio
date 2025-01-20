const API_URL = "https://script.google.com/macros/s/AKfycbyLKekf2ir_Pu0XNlXkgI8X5cVw0WcPh5RyTk6GPT96JewPnrzGYN8Y3XZJ1bbnjQg/exec";

function addData() {
    const freq = document.getElementById('freq').value;
    const name = document.getElementById('name').value;
    const mode = document.getElementById('mode').value;
    const category = document.getElementById('category').value; //dropdown

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
                alert('sent!');
                document.getElementById('data-form').reset();
                loadData();
            } else {
                alert('error: ' + result);
            }
        })
        .catch(err => {
            console.error('fetch error:', err);
            alert('failed to send data.');
        });
    } else {
        alert('this is an error');
    }
}
