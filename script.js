
// Animate sections on scroll
const sections = document.querySelectorAll('.section');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Animate contact form inputs
const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#3498db';
    });
    input.addEventListener('blur', () => {
        input.style.borderColor = '#ccc';
    });
});


function handleSubmit(e) {
    e.preventDefault();

    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);

    const subject = `Contact Request from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    window.location.href = `mailto:tewarilavi28@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
        window.location.href = 'success.html';
    }, 1000);
}

