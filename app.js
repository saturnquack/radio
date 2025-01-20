const API_URL = "https://script.google.com/macros/s/AKfycbzxU9PD3dz9mMvSH13-kptB_ubknWtLFzS-H1chYXL6cQdaKQxE4RWzkzUNQGOQO7UI/exec";

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
