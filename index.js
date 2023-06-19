const btnNavbar = document.querySelector(".toggle-nav");

btnNavbar.addEventListener("click", () => {
  btnNavbar.classList.toggle("clicked");
  // container.classList.toggle("clicked");
});

// CARD EFECT CARD

const card = document.querySelectorAll(".card");

card.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    let elRect = el.getBoundingClientRect();

    let x = e.clientX - elRect.x;
    let y = e.clientY - elRect.y;

    let midCardWidth = elRect.width / 2;
    let midCardheight = elRect.height / 2;

    let angleY = -(x - midCardWidth) / 5; //ATTTION ON PEUX MODIFIER LE 8 ET TROUVER L'ANGLE PARFAIT
    let angleX = (y - midCardheight) / 5;

    let glowX = (x / elRect.width) * 100;
    let glowY = (y / elRect.height) * 100;

    el.children[0].style.transform = `rotateX(${angleX}deg)  rotateY(${angleY}deg) scale(1.1)`;
    el.children[1].style.transform = `rotateX(${angleX}deg)  rotateY(${angleY}deg) scale(1.1)`;
    el.children[1].style.background = ` radial-gradient(circle at ${glowX}% ${glowY}%, rgb(169, 169, 201) , transparent)`;
  });

  el.addEventListener("mouseleave", (e) => {
    el.children[0].style.transform = `rotateX(0deg)  rotateY(0deg)`;
    el.children[1].style.transform = `rotateX(0deg)  rotateY(0deg)`;
  });
});

// AUDIO LOGO

const imgLogo = document.getElementById("logo");
const imgLogoHide = document.getElementById("logo-hide");

const audio = new Audio();
audio.src = "audio-mout.wav";
audio.load();

imgLogo.addEventListener("mouseover", () => {
  imgLogoHide.style.display = "block";
  imgLogo.style.display = "none";
  // audio.play();

  imgLogoHide.addEventListener("mouseleave", () => {
    imgLogoHide.style.display = "none";
    imgLogo.style.display = "block";
    audio.pause();
  });
});

// SLIDER

const btnRight = document.querySelectorAll(".btn-right");
const btnLeft = document.querySelectorAll(".btn-left");
const cardGameList = document.querySelector(".card-game-list");
const cardGameList2 = document.querySelector(".card-game-list2");
const cardGameList3 = document.querySelector(".card-game-list3");
const lastChild = document.querySelector(".card-game-list li:last-child");
const lastChild2 = document.querySelector(".card-game-list2 li:last-child");
const lastChild3 = document.querySelector(".card-game-list3 li:last-child");

let translate = 0;
let translate2 = 0;
let translate3 = 0;
const px = "px";
const offset = 990; // Valeur de décalage (peut être ajustée selon vos besoins)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target === lastChild) {
        btnRight[0].style.display = "none";
        cardGameList.style.left = `initial`;
        cardGameList.style.transition = "all 1.1s ease-out";

        cardGameList.style.justifyContent = "right";
        cardGameList.style.paddingRight = "50px";
      } else if (entry.target === lastChild2) {
        btnRight[1].style.display = "none";
        cardGameList2.style.left = `initial`;
        cardGameList2.style.transition = "all 1.1s ease-out";
        cardGameList2.style.justifyContent = "flex-end";
        cardGameList2.style.paddingRight = "50px";
      } else if (entry.target === lastChild3) {
        btnRight[2].style.display = "none";
        cardGameList3.style.left = `initial`;
        cardGameList3.style.transition = "all 1.1s ease-out";
        cardGameList3.style.justifyContent = "flex-end";
        cardGameList3.style.paddingRight = "50px";
      }
    } else {
      if (entry.target === lastChild) {
        btnRight[0].style.display = "block";
      } else if (entry.target === lastChild2) {
        btnRight[1].style.display = "block";
      } else if (entry.target === lastChild3) {
        btnRight[2].style.display = "block";
      }
    }
  });
});

btnRight.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (this.dataset.value == 0) {
      cardGameList.style.transition = "all 1.1s ease-out";
      translate -= offset;
      cardGameList.style.left = translate + px;
      btnLeft[0].style.display = "block";
      observer.observe(lastChild, translate);
    } else if (this.dataset.value == 1) {
      cardGameList2.style.transition = "all 1.1s ease-out";
      translate2 -= offset;
      cardGameList2.style.left = translate2 + px;
      btnLeft[1].style.display = "block";
      observer.observe(lastChild2);
    } else if (this.dataset.value == 2) {
      cardGameList3.style.transition = "all 1.1s ease-out";
      translate3 -= offset;
      cardGameList3.style.left = translate3 + px;
      btnLeft[2].style.display = "block";
      observer.observe(lastChild3);
    }
  });
});

btnLeft.forEach((btnL) => {
  btnL.addEventListener("click", function (e) {
    if (this.dataset.value == 0) {
      cardGameList.style.transition = "all 1.1s ease-out";
      cardGameList.style.left = `${translate}px`;
      cardGameList.style.justifyContent = "left";
      translate += offset; // ATTENTION ORDRE IMPORTANT
      cardGameList.style.left = translate + px;

      if (translate >= 0) {
        btnLeft[0].style.display = "none";
        cardGameList.style.left = "2%";
      }
    } else if (this.dataset.value == 1) {
      cardGameList2.style.transition = "all 1.1s ease-out";
      cardGameList2.style.left = `${translate2}px`;
      cardGameList2.style.justifyContent = "left";
      translate2 += offset;
      cardGameList2.style.left = translate2 + px;

      if (translate2 >= 0) {
        cardGameList2.style.left = "2%";
        btnLeft[1].style.display = "none";
      }
    } else if (this.dataset.value == 2) {
      cardGameList3.style.transition = "all 1.1s ease-out";
      cardGameList3.style.left = `${translate3}px`;
      cardGameList3.style.justifyContent = "left";
      translate3 += offset;
      cardGameList3.style.left = translate3 + px;

      if (translate3 >= 0) {
        cardGameList3.style.left = "2%";
        btnLeft[2].style.display = "none";
      }
    }
  });
});

const rowsGame = document.querySelectorAll(".rows-game");

const showArrow = (containerGame) => {
  switch (containerGame) {
    case "nouveaute":
      btnLeft[0].style.opacity = 1;
      btnRight[0].style.opacity = 1;
      break;
    case "classique":
      btnLeft[1].style.opacity = 1;
      btnRight[1].style.opacity = 1;
      break;
    case "adventure":
      btnLeft[2].style.opacity = 1;
      btnRight[2].style.opacity = 1;
      break;
    default:
      break;
  }
};

rowsGame.forEach((rows) => {
  rows.addEventListener("mouseover", () => {
    const containerGame = rows.classList[1];
    showArrow(containerGame);
  });
  rowsGame.forEach((rows) => {
    rows.addEventListener("mouseleave", () => {
      btnLeft[0].style.opacity = 0;
      btnRight[0].style.opacity = 0;
      btnLeft[1].style.opacity = 0;
      btnRight[1].style.opacity = 0;
      btnLeft[2].style.opacity = 0;
      btnRight[2].style.opacity = 0;
    });
  });
});

// Ajouter une transition à la propriété opacity
const buttons = document.querySelectorAll(".btn-left, .btn-right");

buttons.forEach((button) => {
  button.style.transition = "opacity 0.35s ease";
});

const main = document.querySelector(".container-all");
const navItem = document.querySelector(".toggle-nav");
const navChoice = document.querySelector(".nav-choice");
const toggleNav = document.querySelector(".toggle-nav");

navItem.addEventListener("click", () => {
  if (toggleNav.classList[1] == "clicked") {
    main.style.gridTemplateColumns = "17% 83%";
    navChoice.style.left = "0px";
  } else {
    main.style.gridTemplateColumns = "0% 100%";
    navChoice.style.left = "-500px";
  }
});

// const input = document.querySelector(".input");

// input.addEventListener('input', (e) => {
//   // input.addEventListener('submit', () => {

//     console.log(e.target.value);

//   // })
// })
// console.log(input);
const cards = document.querySelectorAll(".cards");
const displayChoice = document.querySelector(".choice-navbar-category");
const forChoice = document.querySelector(".forChoice");

cards.forEach((card) => {
  const value = card.dataset.value; // Accès à dataset.value de la carte
  const tendance = card.dataset.tendance; // Accès à dataset.tendance de la carte

  if (value) {
    // card.style.display = "none";
    const newCard = card;
    displayCategory(newCard);
    console.log(newCard);
    forChoice.innerHTML += `<li class="cards">
    ${newCard.innerHTML}
    </li>`;
  }
  // console.log(card.dataset);
  // if (tendance === "true") {
  // console.log("Div: ", card);
  // console.log("Class: ", card.className);
  // Afficher d'autres informations de la carte si nécessaire
  // }
});

function displayCategory(nameCategory) {
  switch (nameCategory) {
    case "Tendance":
      // console.log(value);
      console.log("ICI C4EST LES TEDNDECE FD¨P");
      break;
    case "Classique":
      console.log("CHOPIN CLASQIUE CHAKAL");
      break;
    case "Accueil":
      console.log("EMMA DZH >");
      break;
    default:
      break;
  }
}

const allLink = document.querySelectorAll(".link");

allLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const nameCategory = link.querySelector("a").lastChild.data;

    // const value = link.dataset.value;

    displayCategory(nameCategory);
    console.log(nameCategory);
  });
});
