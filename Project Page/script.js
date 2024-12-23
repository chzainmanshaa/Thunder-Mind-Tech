// Get the buttons
const allProjectsButton = document.getElementById('allProjects');
const webProjectsButton = document.getElementById('webProjects');
const mobileProjectsButton = document.getElementById('mobileProjects');

// Function to handle button click
function handleButtonClick(event) {
    // Remove 'active' class from all buttons
    allProjectsButton.classList.remove('active');
    webProjectsButton.classList.remove('active');
    mobileProjectsButton.classList.remove('active');

    // Add 'active' class to the clicked button
    event.target.classList.add('active');
}

// Attach click event listeners to the buttons
allProjectsButton.addEventListener('click', handleButtonClick);
webProjectsButton.addEventListener('click', handleButtonClick);
mobileProjectsButton.addEventListener('click', handleButtonClick);
