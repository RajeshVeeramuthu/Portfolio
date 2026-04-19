// Smooth scroll
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple typing effect
const text = "Software Developer | Python | .NET | AI";
let i = 0;
function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
document.querySelector(".typing").innerHTML = "";
typing();
