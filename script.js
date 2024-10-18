document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = event.target.email.value;

    // Send the email data to Google Sheets
    fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.text())
    .then(data => alert("Subscription successful!"));
});
