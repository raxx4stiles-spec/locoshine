document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("active");
        });

        // Close menu dynamically if user taps outside active window frame 
        document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && e.target !== menuBtn) {
                navLinks.classList.remove("active");
            }
        });
    }
});