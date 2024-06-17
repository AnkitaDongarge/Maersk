document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!name) {
        alert('Name is required.');
        return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!message) {
        alert('Message is required.');
        return;
    }

    // If all validations pass, submit the form
    this.submit();
});
