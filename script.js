document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percentage");
        bar.style.width = percentage + "%";
    });
});
document.getElementById("downloadCV").addEventListener("click", function () {
    const cvLink = "https://drive.google.com/uc?export=download&id=168skISlGAhPUNn9FXiMe4tfMDfsHNMpn";
    const anchor = document.createElement("a");
    anchor.href = cvLink;
    anchor.download = "Kashmala_Ahmad_CV.pdf"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, div[id]"); 
    const navLinks = document.querySelectorAll(".navbar ul li a");

    function highlightNav() {
        let scrollPosition = window.scrollY + 100; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active"); 
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightNav);
});
