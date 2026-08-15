/* LOADER */

let number = 0;

const loadNumber =
  document.getElementById("loadNumber");

const loader =
  document.querySelector(".loader");

const loading = setInterval(() => {

  number += Math.floor(Math.random() * 8) + 4;

  if (number >= 100) {

    number = 100;
    clearInterval(loading);

    setTimeout(() => {
      loader.classList.add("hide");
    }, 350);

  }

  loadNumber.textContent =
    String(number).padStart(2, "0");

}, 90);


/* SCROLL PROGRESS */

const progress =
  document.querySelector(".progress span");

function updateProgress() {

  const max =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const current =
    window.scrollY;

  progress.style.width =
    `${(current / max) * 100}%`;

}

window.addEventListener(
  "scroll",
  updateProgress,
  { passive:true }
);


/* REVEAL */

const reveal =
  document.querySelectorAll(".reveal");

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold:.12
    }

  );

reveal.forEach(item => {
  observer.observe(item);
});


/* RECRUITER MODE */

const recruiter =
  document.getElementById("recruiter");

const openRecruiter =
  document.getElementById("openRecruiter");

const closeRecruiter =
  document.getElementById("closeRecruiter");

openRecruiter.addEventListener("click", () => {

  recruiter.classList.add("open");

  document.body.classList.add("locked");

});

closeRecruiter.addEventListener("click", () => {

  recruiter.classList.remove("open");

  document.body.classList.remove("locked");

});


/* ESCAPE KEY */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    recruiter.classList.remove("open");

    document.body.classList.remove("locked");

  }

});


/* PROJECT MOUSE MOVEMENT */

const projects =
  document.querySelectorAll(".project");

projects.forEach(project => {

  const art =
    project.querySelector(".project-art");

  if (!art) return;

  project.addEventListener("mousemove", event => {

    const rect =
      project.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width - .5;

    const y =
      (event.clientY - rect.top) /
      rect.height - .5;

    art.style.transform = `
      perspective(1000px)
      rotateY(${x * 2}deg)
      rotateX(${y * -2}deg)
      scale(.99)
    `;

  });

  project.addEventListener("mouseleave", () => {

    art.style.transform = "";

  });

});


/* SMOOTH LINKS */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener("click", event => {

      const target =
        document.querySelector(
          link.getAttribute("href")
        );

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior:"smooth"
      });

    });

  });


/* TAB TITLE */

document.addEventListener(
  "visibilitychange",
  () => {

    document.title =
      document.hidden
        ? "Come back — Moin."
        : "Moin Pochi — Business × Product × Growth";

  }
);
