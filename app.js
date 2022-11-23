const speakerContainer = document.querySelector(".speaker-container");
const speakerCard = document.querySelectorAll(".speaker-card");

// function toggleSpeakerDetails() {
//   speakerCard.forEach(card => {
//     card.addEventListener('click', () => {
//       card.classList.toggle('active');
//     });
//   });
// }

const speakers = [
  {
    name: "Itachi Uchiha",
    title: "The Extinguisher of the Uchiha Clan",
    bio: "Itachi Uchiha is a character in the Naruto manga and anime seriescreated by Masashi Kishimoto.",
    image: "./images/Itachi_Uchiha001.webp",
  },
  {
    name: "Jane Doe",
    title: "Web Designer",
    bio: "The Extinguisher of the Uchiha Clan",
    image: "./images/Itachi_Uchiha001.webp",
  },
];

// createSpeakers(speakers);

function createSpeakers(speakers) {
  for (let i = 0; i < speakers.length; i++) {
    const speaker = speakers[i];

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

// Toogle Menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const faBars = document.querySelector(".fa-bars");
const faXmark = document.querySelector(".fa-xmark");

hamburgerMenu.addEventListener("click", () => {
  faBars.classList.toggle("close");
  faXmark.classList.toggle("active");

  if (faBars.classList==='close'){
    navMenu.classList.add("active");
  }else {
    navMenu.classList.remove("active");
  }
});

