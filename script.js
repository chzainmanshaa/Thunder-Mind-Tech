// Function to toggle the menu visibility
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('open'); // Toggle 'open' class to show/hide the menu
}

// JavaScript to hide the menu when a menu item is clicked
const menuItems = document.querySelectorAll('.menu-item');
const sideMenu = document.getElementById('sideMenu');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Hide the menu by removing the 'open' class when any menu item is clicked
        sideMenu.classList.remove('open');
    });
});
