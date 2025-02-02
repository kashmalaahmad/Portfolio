
  document.getElementById("downloadCV").addEventListener("click", function() {
    const cvLink = "https://drive.google.com/uc?export=download&id=168skISlGAhPUNn9FXiMe4tfMDfsHNMpn";
    const anchor = document.createElement("a");
    anchor.href = cvLink;
    anchor.download = "Kashmala_Ahmad_CV.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");
    const skillsSection = document.querySelector(".skills");
    let animationTriggered = false;
    function resetProgressBars() {
      progressBars.forEach(bar => {
        bar.style.transition = "none";
        bar.style.width = "0";
        void bar.offsetHeight;
      });
    }
    function animateProgressBars() {
      progressBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percentage");
        bar.style.transition = "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)";
        bar.style.width = percentage + "%";
      });
    }
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
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    observer.observe(skillsSection);
    resetProgressBars();
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    }, {
      threshold: 0.6
    });
    sections.forEach(section => {
      navObserver.observe(section);
    });
  });
  
