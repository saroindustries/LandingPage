
// =======================================================================================================================

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-enquiry");
  const closeBtn = document.getElementById("close-popup");
  const popup = document.getElementById("enquiry-popup");

  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

  // EmailJS submission
  document.getElementById("popup-contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_ryt36o9", "template_0qkivz9", this)
      .then(() => {
        alert("Message sent successfully!");
         alert("Message sent successfully!");
  this.reset();
  popup.style.display = "none";
  triggerShower(); // 🎉 call the shower effect
       
      }, (error) => {
        alert("Failed to send message.");
        console.error(error);
      });
  });
});

// =======================================================================================================================




 const images = document.querySelectorAll('.carousel img');
    let current = 0;

    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 3000);

const openBtn = document.getElementById("open-enquiry");
const closeBtn = document.getElementById("close-popup");
const popup = document.getElementById("enquiry-popup");

openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});





function triggerShower() {
  const count = 20;
  const images = [
    "./Assets/flower.png",       // flower
    "./Assets/chocolate.png"     // chocolate
  ];

  for (let i = 0; i < count; i++) {
    const shower = document.createElement("img");
    shower.src = images[Math.floor(Math.random() * images.length)];
    shower.className = "shower";
    shower.style.left = Math.random() * 100 + "vw";
    shower.style.width = "40px";
    shower.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(shower);

    // Remove after animation
    setTimeout(() => {
      shower.remove();
    }, 5000);
  }
}
