// When the user clicks the Search button
document.getElementById('search-btn').addEventListener('click', function() {
    // Capture input value
    const city = document.getElementById('city-input').value.trim();

    // Check if input is empty
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    // Display the entered city (temporary placeholder)
    document.getElementById('city-name').innerText = `City entered: ${city}`;

    // For testing purposes, also log it in console
    console.log("City entered:", city);

    // Later, you can use this value in API calls
});
