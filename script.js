document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
