// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Reset error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';
    
    let isValid = true;
    
    // Name validation
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }
    
    // Email validation
    if (email === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Message validation
    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('message-error').textContent = 'Message should be at least 10 characters';
        isValid = false;
    }
    
    // If valid, show success message
    if (isValid) {
        document.getElementById('form-success').textContent = 'Thank you for your message! We will get back to you soon.';
        document.getElementById('form-success').style.display = 'block';
        document.getElementById('contactForm').reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('form-success').style.display = 'none';
        }, 5000);
    }
});

// Email validation helper function
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}s