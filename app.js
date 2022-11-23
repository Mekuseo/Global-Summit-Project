const speakerContainer = document.querySelector(".speaker-container");

const speakers = [
  {
    name: "Itachi Uchiha",
    title: "The Extinguisher of the Uchiha Clan",
    bio: "Itachi Uchiha is a character in the Naruto manga and anime seriescreated by Masashi Kishimoto.",
    image: "./images/Itachi_Uchiha001.webp",
  },
  {
    name: "Naruto Uzumaki",
    title: "Hokage of the Hidden Leaf Village",
    bio: "The Current host of the Nine-Tails, Naruto Uzumaki is the main protagonist of the Naruto series.",
    image: "./images/naruto.png",
  },
  {
    name: "Sasuke Uchiha",
    title: "The Last Uchiha",
    bio: "Sasuke Uchiha is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto.",
    image: "./images/sasuke.jpg",
  },
  {
    name: "Sakura Haruno",
    title: "The Medic Ninja",
    bio: "Sakura Haruno is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto.",
    image: "./images/Sakura.jpg",
  },
  {
    name: "Kakashi Hatake",
    title: "The Copy Ninja",
    bio: "Kakashi Hatake is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto.",
    image: "./images/kakashi.png",
  },
  {
    name: "Kisame Hoshigaki",
    title: "The Shark Ninja",
    bio: "Kisame Hoshigaki is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto.",
    image: "./images/kisame.jpg",
  },
];

createSpeakers(speakers);

function createSpeakers(speakers) {
  for (let i = 0; i < speakers.length; i++) {
    const speaker = speakers[i];

    const speakerCard = document.createElement("div");
    speakerCard.classList.add("speaker-card");

    const speakerImage = document.createElement("img");
    speakerImage.src = speaker.image;
    speakerImage.alt = speaker.name;
    speakerImage.classList.add("speaker-image");

    const speakerDetails = document.createElement("div");
    const speakerName = document.createElement("h3");
    speakerName.textContent = speaker.name;

    const speakerTitle = document.createElement("p");
    speakerTitle.textContent = speaker.title;

    const dash = document.createElement("div");

    const speakerBio = document.createElement("span");
    speakerBio.textContent = speaker.bio;

    speakerDetails.appendChild(speakerName);
    speakerDetails.appendChild(speakerTitle);
    speakerDetails.appendChild(dash);
    speakerDetails.appendChild(speakerBio);

    speakerDetails.classList.add("speaker-details");

    speakerCard.appendChild(speakerImage);
    speakerCard.appendChild(speakerDetails);

    speakerContainer.appendChild(speakerCard);
  }

  return speakerContainer;
}

// Toggle Menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const faBars = document.querySelector(".fa-bars");
const faXmark = document.querySelector(".fa-xmark");

hamburgerMenu.addEventListener("click", () => {
  faBars.classList.toggle("close");
  faXmark.classList.toggle("active");

  if (faBars.classList.contains("close")) {
    navMenu.classList.add("active");
    faBars.classList.remove("active");
    faXmark.classList.add("active");
  } else {
    navMenu.classList.remove("active");
  }
});

const link = document.querySelectorAll(".nav-menu .link");

link.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("clicked");
    navMenu.classList.remove("active");
    faBars.classList.remove("close");
    faXmark.classList.remove("active");
  });
});

