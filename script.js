document.getElementById("submitBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const school = document.getElementById("school").value;

    if (name && age && school) {
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `<h3>User Details</h3>
                               <p><strong>Name:</strong> ${name}</p>
                               <p><strong>Age:</strong> ${age}</p>
                               <p><strong>School:</strong> ${school}</p>`;
        outputDiv.style.display = "block";
    } else {
        alert("Please fill in all fields!");
    }
});
