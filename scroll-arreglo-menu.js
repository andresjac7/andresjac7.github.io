// Get the height of the fixed menu
const menuHeight = 110; // Adjust this value to match your menu's height

// Add click event listeners to anchor links
document.querySelectorAll('a.anchor-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - menuHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
