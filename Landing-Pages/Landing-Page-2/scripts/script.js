// Add an event listener for the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form inputs
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simple email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If everything is okay, show a success message
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');

    // Optionally clear the form after successful submission
    document.querySelector('form').reset();
});

// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile navigation menu (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Example of adding a mobile menu toggle button
// Uncomment and use this part if you have a mobile menu button in your HTML

document.querySelector('.menu-toggle').addEventListener('click', function() {
    toggleMobileMenu();
});


// Function to handle form submission via AJAX (optional)
function submitFormViaAjax(formData) {
    fetch('/your-server-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for your message! We will get back to you soon.');
        document.querySelector('form').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your message. Please try again later.');
    });
}

// Example usage of AJAX form submission (uncomment if you want to use it)

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    submitFormViaAjax(formData);
});