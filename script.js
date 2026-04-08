// Typing Effect
let text = "Omkar Kalshetti";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
type();

// Cursor
document.addEventListener("mousemove", e => {
    document.querySelector(".cursor").style.top = e.clientY + "px";
    document.querySelector(".cursor").style.left = e.clientX + "px";
});

// Scroll Reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Lightbox
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
