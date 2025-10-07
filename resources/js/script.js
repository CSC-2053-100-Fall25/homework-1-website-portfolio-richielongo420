// Select the button and photo container
const toggleButton = document.getElementById("togglePhotoBtn");
const photoContainer = document.getElementById("photo-container");

 // Task 4: Dynamic artist List (following Lab 3 pattern)
 const addArtistButton = document.getElementById('add-artist');
 addArtistButton.addEventListener('click', function() {

 const interest = prompt("Enter one of your artists:");
 if (interest && interest.trim() !== '') {

 // Create new paragraph element (same as Lab 3)
 const artistElement = document.createElement('p');
 artistElement.textContent = '• ' + interest;

 // Style it a bit
 artistElement.style.backgroundColor = 'dark';
 artistElement.style.padding = '5px';
 artistElement.style.margin = '5px 0';
 artistElement.style.borderRadius = '3px';

 // Append to container (same concept as Lab 3)
 const container = document.getElementById('artists-container');
 container.appendChild(artistElement);
 }
 });
 
// Add click event listener
toggleButton.addEventListener("click", function () {

  // Check if the photo is currently visible
  if (photoContainer.style.display === "none") {

    // Show the photo
    photoContainer.style.display = "block";

    // Update button text
    toggleButton.textContent = "Hide Photo";
  } else {

    // Hide the photo
    photoContainer.style.display = "none";

    // Update button text
    toggleButton.textContent = "Show Photo";
  }

 
});
