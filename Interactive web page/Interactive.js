// Form validation
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name').value;
    if (!name) {
        isValid = false;
        document.getElementById('nameError').style.display = 'inline';
    } else {
        document.getElementById('nameError').style.display = 'none';
    }
    
    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').style.display = 'inline';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }
    
    if (isValid) {
        alert('Form submitted successfully!');
    }
});

// Toggle menu visibility
document.getElementById('menuButton').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

// Dynamic content update
document.getElementById('updateContentButton').addEventListener('click', function() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.textContent = 'This content has been updated dynamically!';
});
