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
  const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!animationTriggered) {
                    resetProgressBars();
                    setTimeout(animateProgressBars, 100);
                    animationTriggered = true;
                }
            } else {
                animationTriggered = false;
                progressBars.forEach(bar => {
                    bar.style.transition = "width 0.5s ease-out";
                    bar.style.width = "0";
                });
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of section is visible
        rootMargin: "0px 0px -50px 0px" // Adjust trigger point
    });

    observer.observe(skillsSection);
    resetProgressBars();
});

