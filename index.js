const btnNavbar = document.querySelector(".toggle-nav");
const main = document.querySelector(".container-all");
const navItem = document.querySelector(".toggle-nav");
const navChoice = document.querySelector(".nav-choice");
const toggleNav = document.querySelector(".toggle-nav");
const card = document.querySelectorAll(".card");
const imgLogo = document.getElementById("logo");
const imgLogoHide = document.getElementById("logo-hide");
const btnRight = document.querySelectorAll(".btn-right");
const btnLeft = document.querySelectorAll(".btn-left");
const cardGameList = document.querySelector(".card-game-list");
const cardGameList2 = document.querySelector(".card-game-list2");
const cardGameList3 = document.querySelector(".card-game-list3");
const cardGameList4 = document.querySelector(".card-game-list4");
const cardGameList5 = document.querySelector(".card-game-list5");
const cardGameList6 = document.querySelector(".card-game-list6");
const cardGameList7 = document.querySelector(".card-game-list7");
const cardGameList8 = document.querySelector(".card-game-list8");
const cardGameList9 = document.querySelector(".card-game-list9");
const cardGameList10 = document.querySelector(".card-game-list10");
const lastChild = document.querySelector(".card-game-list .last");
const lastChild2 = document.querySelector(".card-game-list2 li:last-child");
const lastChild3 = document.querySelector(".card-game-list3 li:last-child");
const lastChild4 = document.querySelector(".card-game-list4 li:last-child");
const lastChild5 = document.querySelector(".card-game-list5 li:last-child");
const lastChild6 = document.querySelector(".card-game-list6 li:last-child");
const lastChild7 = document.querySelector(".card-game-list7 li:last-child");
const lastChild8 = document.querySelector(".card-game-list8 li:last-child");
const lastChild9 = document.querySelector(".card-game-list9 li:last-child");
const lastChild10 = document.querySelector(".card-game-list10 li:last-child");
const ul = document.querySelectorAll(".all-game ul");
const sliderContainer = document.querySelector(".slider");
const sliderContainer2 = document.querySelector(".slider2");

let translate = 0;
let translate2 = 0;
let translate3 = 0;
let translate4 = 0;
let translate5 = 0;
let translate6 = 0;
let translate7 = 0;
let translate8 = 0;
let translate9 = 0;
let translate10 = 0;
const px = "px";
const offset = 990; // Valeur de décalage (peut être ajustée selon vos besoins)
const largeurEcran = window.innerWidth;
const width = cardGameList.scrollWidth;
const width2 = cardGameList2.scrollWidth;
const width3 = cardGameList3.scrollWidth;
const width4 = cardGameList4.scrollWidth;
const width5 = cardGameList5.scrollWidth;
const width6 = cardGameList6.scrollWidth;
const width7 = cardGameList7.scrollWidth;
const width8 = cardGameList8.scrollWidth;
const width9 = cardGameList9.scrollWidth;
const width10 = cardGameList10.scrollWidth;
const diffenrence = width - largeurEcran;
const diffenrence2 = width2 - largeurEcran;
const diffenrence3 = width3 - largeurEcran;
const diffenrence4 = width4 - largeurEcran;
const diffenrence5 = width5 - largeurEcran;
const diffenrence6 = width6 - largeurEcran;
const diffenrence7 = width7 - largeurEcran;
const diffenrence8 = width8 - largeurEcran;
const diffenrence9 = width9 - largeurEcran;
const diffenrence10 = width10 - largeurEcran;

// const largeurEcran = window.innerWidth;
const pourcentage = 19; // J'ai mis 19 pour avoir 2% de plus que 17 pour avoir de la marge a droit

const dixSeptPourcent = Math.round((pourcentage / 100) * largeurEcran);

const cards = document.querySelectorAll(".cards");
const forChoice = document.querySelector(".forChoice");

btnNavbar.addEventListener("click", () => {
  btnNavbar.classList.toggle("clicked");
});

const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// const ifClick = document.querySelector(".if-click");

// CARD EFECT CARD

card.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    let elRect = el.getBoundingClientRect();
    // console.log(el.children[1]);

    let x = e.clientX - elRect.x;
    let y = e.clientY - elRect.y;

    let midCardWidth = elRect.width / 2;
    let midCardheight = elRect.height / 2;

    let angleY = -(x - midCardWidth) / 6; //ATTTION ON PEUX MODIFIER LE 8 ET TROUVER L'ANGLE PARFAIT
    let angleX = (y - midCardheight) / 6;

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
  el.addEventListener("click", (e) => {
    el.children[0].style.transform = `rotateX(0deg)  rotateY(0deg)`;
    el.children[1].style.transform = `rotateX(0deg)  rotateY(0deg)`;
  });
});

const cardBeforeAfterRated = document.querySelectorAll(".card.top-rated");
const cardBeforeAfterNew = document.querySelectorAll(".card.new");

card.forEach((el) => {
  el.addEventListener("mouseover", () => {
    const classLi = el.classList[1];
    if (classLi === "top-rated") {
      el.classList.remove(classLi);
      el.classList.add("topRatedHidden");
    } else if (classLi === "new") {
      el.classList.remove(classLi);
      el.classList.add("newHidden");
    } else if (classLi === "updated") {
      el.classList.remove(classLi);
      el.classList.add("update");
    }
  });

  el.addEventListener("mouseleave", () => {
    const classLi = el.classList[1];
    if (classLi === "topRatedHidden") {
      el.classList.add("top-rated");
      el.classList.remove("topRatedHidden");
    } else if (classLi === "newHidden") {
      el.classList.add("new");
      el.classList.remove("newHidden");
    } else if (classLi === "update") {
      el.classList.add("updated");
      el.classList.remove("update");
    }
  });
});

// AUDIO LOGO

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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target === lastChild) {
        cardGameList.style.transition = "all 0.4s ease-out";
        btnRight[0].style.display = "none";
        cardGameList.style.left = `${-diffenrence + -40}px`;
        translate = -diffenrence;
        if (toggleNav.classList[1] == "clicked") {
          cardGameList.style.left = `${-diffenrence - dixSeptPourcent}px`;
        } else {
          cardGameList.style.left = `${-diffenrence + -40}px`;
        }
      } else if (entry.target === lastChild2) {
        cardGameList2.style.transition = "all 0.4s ease-out";
        btnRight[1].style.display = "none";
        cardGameList2.style.left = `${-diffenrence2 + -40}px`;
        translate2 = -diffenrence2;

        if (toggleNav.classList[1] == "clicked") {
          cardGameList2.style.left = `${-diffenrence2 - dixSeptPourcent}px`;
        } else {
          cardGameList2.style.left = `${-diffenrence2 + -40}px`;
        }
      } else if (entry.target === lastChild3) {
        cardGameList3.style.transition = "all 0.4s ease-out";
        btnRight[2].style.display = "none";
        cardGameList3.style.left = `${-diffenrence3 + -40}px`;
        translate3 = -diffenrence3;
        if (toggleNav.classList[1] == "clicked") {
          cardGameList3.style.left = `${-diffenrence3 - dixSeptPourcent}px`;
        } else {
          cardGameList3.style.left = `${-diffenrence3 + -40}px`;
        }
      } else if (entry.target === lastChild4) {
        cardGameList4.style.transition = "all 0.4s ease-out";
        btnRight[3].style.display = "none";
        cardGameList4.style.left = `${-diffenrence4 + -40}px`;
        translate4 = -diffenrence4;
        if (toggleNav.classList[1] == "clicked") {
          cardGameList4.style.left = `${-diffenrence4 - dixSeptPourcent}px`;
        } else {
          cardGameList4.style.left = `${-diffenrence4 + -40}px`;
        }
      } else if (entry.target === lastChild5) {
        cardGameList5.style.transition = "all 0.4s ease-out";
        btnRight[4].style.display = "none";
        cardGameList5.style.left = `${-diffenrence5 + -40}px`;
        translate5 = -diffenrence5;
        if (toggleNav.classList[1] == "clicked") {
          cardGameList5.style.left = `${-diffenrence5 - dixSeptPourcent}px`;
        } else {
          cardGameList5.style.left = `${-diffenrence5 + -40}px`;
        }
      } else if (entry.target === lastChild6) {
        cardGameList6.style.transition = "all 0.4s ease-out";
        btnRight[5].style.display = "none";
        cardGameList6.style.left = `${-diffenrence5 + -40}px`;
        translate6 = -diffenrence6;
        if (toggleNav.classList[1] == "clicked") {
          cardGameList6.style.left = `${-diffenrence6 - dixSeptPourcent}px`;
        } else {
          cardGameList6.style.left = `${-diffenrence6 + -40}px`;
        }
      } else if (entry.target === lastChild7) {
        cardGameList7.style.transition = "all 0.4s ease-out";
        btnRight[6].style.display = "none";
        cardGameList7.style.left = `${-diffenrence7 + -40}px`;
        translate7 = -diffenrence7;
        if (toggleNav.classList[1] == "clicked") {
          cardGameList7.style.left = `${-diffenrence7 - dixSeptPourcent}px`;
        } else {
          cardGameList7.style.left = `${-diffenrence7 + -40}px`;
        }
      } else if (entry.target === lastChild8) {
        cardGameList8.style.transition = "all 0.4s ease-out";
        btnRight[7].style.display = "none";
        cardGameList8.style.left = `${-diffenrence8 + -40}px`;
        translate8 = -diffenrence8;
        if (toggleNav.classList[1] == "clicked") {
          cardGameList8.style.left = `${-diffenrence8 - dixSeptPourcent}px`;
        } else {
          cardGameList8.style.left = `${-diffenrence8 + -40}px`;
        }
      } else if (entry.target === lastChild9) {
        cardGameList9.style.transition = "all 0.4s ease-out";
        btnRight[8].style.display = "none";
        cardGameList9.style.left = `${-diffenrence9 + -40}px`;
        translate9 = -diffenrence9;
        if (toggleNav.classList[1] == "clicked") {
          cardGameList9.style.left = `${-diffenrence9 - dixSeptPourcent}px`;
        } else {
          cardGameList9.style.left = `${-diffenrence9 + -40}px`;
        }
      } else if (entry.target === lastChild10) {
        cardGameList10.style.transition = "all 0.4s ease-out";
        btnRight[9].style.display = "none";
        cardGameList10.style.left = `${-diffenrence10 + -40}px`;
        translate10 = -diffenrence10;
        if (toggleNav.classList[1] == "clicked") {
          cardGameList10.style.left = `${-diffenrence10 - dixSeptPourcent}px`;
        } else {
          cardGameList10.style.left = `${-diffenrence10 + -40}px`;
        }
      }
    } else {
      if (entry.target === lastChild) {
        btnRight[0].style.display = "block";
      } else if (entry.target === lastChild2) {
        // MODIFIER CE BLOCK IL PEUX ALLER EN HAUT !!!!
        btnRight[1].style.display = "block";
      } else if (entry.target === lastChild3) {
        btnRight[2].style.display = "block";
      } else if (entry.target === lastChild4) {
        btnRight[3].style.display = "block";
      } else if (entry.target === lastChild5) {
        btnRight[4].style.display = "block";
      } else if (entry.target === lastChild6) {
        btnRight[5].style.display = "block";
      } else if (entry.target === lastChild7) {
        btnRight[6].style.display = "block";
      } else if (entry.target === lastChild8) {
        btnRight[7].style.display = "block";
      } else if (entry.target === lastChild9) {
        btnRight[8].style.display = "block";
      } else if (entry.target === lastChild10) {
        btnRight[9].style.display = "block";
      }
    }
  });
});

btnRight.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (this.dataset.value == 0) {
      cardGameList.style.transition = "all 0.7s ease-in-out";
      translate -= offset;
      cardGameList.style.left = translate + px;
      btnLeft[0].style.display = "block";
      observer.observe(lastChild, translate);
    } else if (this.dataset.value == 1) {
      cardGameList2.style.transition = "all 0.7s ease-out";
      translate2 -= offset;
      cardGameList2.style.left = translate2 + px;
      btnLeft[1].style.display = "block";
      observer.observe(lastChild2);
    } else if (this.dataset.value == 2) {
      cardGameList3.style.transition = "all 0.7s ease-out";
      translate3 -= offset;
      cardGameList3.style.left = translate3 + px;
      btnLeft[2].style.display = "block";
      observer.observe(lastChild3);
    } else if (this.dataset.value == 3) {
      cardGameList4.style.transition = "all 0.7s ease-out";
      translate4 -= offset;
      cardGameList4.style.left = translate4 + px;
      btnLeft[3].style.display = "block";
      observer.observe(lastChild4);
    } else if (this.dataset.value == 4) {
      cardGameList5.style.transition = "all 0.7s ease-out";
      translate5 -= offset;
      cardGameList5.style.left = translate5 + px;
      btnLeft[4].style.display = "block";
      observer.observe(lastChild5);
    } else if (this.dataset.value == 5) {
      cardGameList6.style.transition = "all 0.7s ease-out";
      translate6 -= offset;
      cardGameList6.style.left = translate6 + px;
      btnLeft[5].style.display = "block";
      observer.observe(lastChild6);
    } else if (this.dataset.value == 6) {
      cardGameList7.style.transition = "all 0.7s ease-out";
      translate7 -= offset;
      cardGameList7.style.left = translate7 + px;
      btnLeft[6].style.display = "block";
      observer.observe(lastChild7);
    } else if (this.dataset.value == 7) {
      cardGameList8.style.transition = "all 0.7s ease-out";
      translate8 -= offset;
      cardGameList8.style.left = translate8 + px;
      btnLeft[7].style.display = "block";
      observer.observe(lastChild8);
    } else if (this.dataset.value == 8) {
      cardGameList9.style.transition = "all 0.7s ease-out";
      translate9 -= offset;
      cardGameList9.style.left = translate9 + px;
      btnLeft[8].style.display = "block";
      observer.observe(lastChild9);
    } else if (this.dataset.value == 9) {
      cardGameList10.style.transition = "all 0.7s ease-out";
      translate10 -= offset;
      cardGameList10.style.left = translate10 + px;
      btnLeft[9].style.display = "block";
      observer.observe(lastChild10);
    }
  });
});

btnLeft.forEach((btnL) => {
  btnL.addEventListener("click", function (e) {
    if (this.dataset.value == 0) {
      cardGameList.style.transition = "all 0.7s ease-out";
      cardGameList.style.left = `${translate}px`;
      cardGameList.style.justifyContent = "left";
      translate += offset; // ATTENTION ORDRE IMPORTANT
      cardGameList.style.left = translate + px;

      if (translate >= 0) {
        btnLeft[0].style.display = "none";
        cardGameList.style.left = "2%";
      }
    } else if (this.dataset.value == 1) {
      cardGameList2.style.transition = "all 0.7s ease-out";
      cardGameList2.style.left = `${translate2}px`;
      cardGameList2.style.justifyContent = "left";
      translate2 += offset;
      cardGameList2.style.left = translate2 + px;

      if (translate2 >= 0) {
        cardGameList2.style.left = "2%";
        btnLeft[1].style.display = "none";
      }
    } else if (this.dataset.value == 2) {
      cardGameList3.style.transition = "all 0.7s ease-out";
      cardGameList3.style.left = `${translate3}px`;
      cardGameList3.style.justifyContent = "left";
      translate3 += offset;
      cardGameList3.style.left = translate3 + px;

      if (translate3 >= 0) {
        cardGameList3.style.left = "2%";
        btnLeft[2].style.display = "none";
      }
    } else if (this.dataset.value == 3) {
      cardGameList4.style.transition = "all 0.7s ease-out";
      cardGameList4.style.left = `${translate4}px`;
      cardGameList4.style.justifyContent = "left";
      translate4 += offset;
      cardGameList4.style.left = translate4 + px;

      if (translate4 >= 0) {
        cardGameList4.style.left = "2%";
        btnLeft[3].style.display = "none";
      }
    } else if (this.dataset.value == 4) {
      cardGameList5.style.transition = "all 0.7s ease-out";
      cardGameList5.style.left = `${translate5}px`;
      cardGameList5.style.justifyContent = "left";
      translate5 += offset;
      cardGameList5.style.left = translate5 + px;

      if (translate5 >= 0) {
        cardGameList5.style.left = "2%";
        btnLeft[4].style.display = "none";
      }
    } else if (this.dataset.value == 5) {
      cardGameList6.style.transition = "all 0.7s ease-out";
      cardGameList6.style.left = `${translate6}px`;
      cardGameList6.style.justifyContent = "left";
      translate6 += offset;
      cardGameList6.style.left = translate6 + px;

      if (translate6 >= 0) {
        cardGameList6.style.left = "2%";
        btnLeft[5].style.display = "none";
      }
    } else if (this.dataset.value == 6) {
      cardGameList7.style.transition = "all 0.7s ease-out";
      cardGameList7.style.left = `${translate7}px`;
      cardGameList7.style.justifyContent = "left";
      translate7 += offset;
      cardGameList7.style.left = translate7 + px;

      if (translate7 >= 0) {
        cardGameList7.style.left = "2%";
        btnLeft[6].style.display = "none";
      }
    } else if (this.dataset.value == 7) {
      cardGameList8.style.transition = "all 0.7s ease-out";
      cardGameList8.style.left = `${translate8}px`;
      cardGameList8.style.justifyContent = "left";
      translate8 += offset;
      cardGameList8.style.left = translate8 + px;

      if (translate8 >= 0) {
        cardGameList8.style.left = "2%";
        btnLeft[7].style.display = "none";
      }
    } else if (this.dataset.value == 8) {
      cardGameList9.style.transition = "all 0.7s ease-out";
      cardGameList9.style.left = `${translate9}px`;
      cardGameList9.style.justifyContent = "left";
      translate9 += offset;
      cardGameList9.style.left = translate9 + px;

      if (translate9 >= 0) {
        cardGameList9.style.left = "2%";
        btnLeft[8].style.display = "none";
      }
    } else if (this.dataset.value == 9) {
      cardGameList10.style.transition = "all 0.7s ease-out";
      cardGameList10.style.left = `${translate10}px`;
      cardGameList10.style.justifyContent = "left";
      translate10 += offset;
      cardGameList10.style.left = translate10 + px;

      if (translate10 >= 0) {
        cardGameList10.style.left = "2%";
        btnLeft[9].style.display = "none";
      }
    }
  });
});

const rowsGame = document.querySelectorAll(".rows-game");

const showArrow = (containerGame) => {
  switch (containerGame) {
    case "Nouveauté":
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
    case "Action":
      btnLeft[3].style.opacity = 1;
      btnRight[3].style.opacity = 1;
      break;
    case "Football":
      btnLeft[4].style.opacity = 1;
      btnRight[4].style.opacity = 1;
      break;
    case "Mode":
      btnLeft[5].style.opacity = 1;
      btnRight[5].style.opacity = 1;
      break;
    case "Course":
      btnLeft[6].style.opacity = 1;
      btnRight[6].style.opacity = 1;
      break;
    case "Logique":
      btnLeft[7].style.opacity = 1;
      btnRight[7].style.opacity = 1;
      break;
    case "Cartes":
      btnLeft[8].style.opacity = 1;
      btnRight[8].style.opacity = 1;
      break;
    case "Tir":
      btnLeft[9].style.opacity = 1;
      btnRight[9].style.opacity = 1;
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
      btnLeft[3].style.opacity = 0;
      btnRight[3].style.opacity = 0;
      btnLeft[4].style.opacity = 0;
      btnRight[4].style.opacity = 0;

      btnLeft[5].style.opacity = 0;
      btnRight[5].style.opacity = 0;
      btnLeft[6].style.opacity = 0;
      btnRight[6].style.opacity = 0;
      btnLeft[7].style.opacity = 0;
      btnRight[7].style.opacity = 0;
      btnLeft[8].style.opacity = 0;
      btnRight[8].style.opacity = 0;
      btnLeft[9].style.opacity = 0;
      btnRight[9].style.opacity = 0;
    });
  });
});

// Ajouter une transition à la propriété opacity
const buttons = document.querySelectorAll(".btn-left, .btn-right");

buttons.forEach((button) => {
  button.style.transition = "opacity 0.35s ease";
});

const containerCategory = document.querySelectorAll(".container-card-netflix");

function displayCategory(nameCategory) {
  containerCategory.forEach(function (containerCate) {
    sliderContainer.style.display = "none";
    sliderContainer2.style.display = "none";
    containerCate.style.display = "block"; // Réinitialiser la propriété display pour tous les éléments
    const changeDisplay = containerCate.querySelector(".displayChoice");
    const title = containerCate.querySelector(".title");
    const titleh3 = containerCate.querySelector(".title h3");
    titleh3.style.left = "0%";
    titleh3.style.fontSize = "2rem";
    title.style.justifyContent = "center";
    changeDisplay.style.flexWrap = "wrap";
    btnRight.forEach((btn) => {
      btn.style.display = "none";
    });
    btnLeft.forEach((btn) => {
      btn.style.display = "none";
    });

    let cateDisplay = containerCate.dataset.value;
    changeDisplay.style.justifyContent = "center";
    changeDisplay.style.left = "0%";

    main.style.gridTemplateColumns = "0% 100%";
    navChoice.style.left = "-500px";
    btnNavbar.classList.remove("clicked");

    if (nameCategory !== cateDisplay) {
      containerCate.style.display = "none";
    }
    if (nameCategory === "Accueil") {
      translate = 0;
      translate2 = 0;
      translate3 = 0;

      sliderContainer.style.display = "block";
      sliderContainer2.style.display = "block";

      containerCate.style.display = "block";
      changeDisplay.style.display = "flex";
      changeDisplay.style.flexWrap = "nowrap";
      changeDisplay.style.justifyContent = "left";
      changeDisplay.style.left = "2%";
      titleh3.style.left = "2%";
      titleh3.style.fontSize = "1.5rem";
      title.style.justifyContent = "left";
      btnRight.forEach((btn) => {
        btn.style.display = "block";
      });
    }
    if (nameCategory === "Aléatoire") {
      // console.log(tab.length);
      randomNumber(1, 10);
    }
  });
}
const allLinknav = document.querySelectorAll(".container-all .link a");
const tab = [];

allLinknav.forEach((aL) => {
  tab.push(aL.innerHTML);
});

function randomNumber(min, max) {
  let numberRandom = Math.floor(Math.random() * (max - min + 1) + min);
  let nameRandom = tab[numberRandom];
  displayCategory(nameRandom);
}

const allLink = document.querySelectorAll(".link");
const cateChoices = document.querySelectorAll(".link a");
const svgChoices = document.querySelectorAll(".link svg");

allLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    const nameCategory = link.querySelector("a").lastChild.data;
    e.preventDefault();
    observer.disconnect();

    cateChoices.forEach((cate) => {
      cate.classList.remove("active-color");
    });
    svgChoices.forEach((svg) => {
      svg.classList.remove("active-color2");
    });

    const svgChoice = link.querySelector(".link svg");
    svgChoice.classList.add("active-color2");

    const clickedCate = link.querySelector(".link a");
    clickedCate.classList.add("active-color");
    displayCategory(nameCategory);
    returnTop();
  });
});

cateChoices.forEach((cateOther) => {
  cateOther.addEventListener("mouseover", () => {
    cateChoices.forEach((cate) => {
      cate.classList.remove("active");
    });
    cateOther.classList.add("active");
  });
});
allLink.forEach((linkCont) => {
  linkCont.addEventListener("mouseleave", () => {
    cateChoices.forEach((cate) => {
      cate.classList.remove("active");
    });
  });
});

const Allcard = document.querySelectorAll(".cards");
const newContainerClick = document.querySelector(".new-container-if-click");
const containerChoice = document.querySelector(".container-choice");
const otherGameRigth = document.querySelector(".other-game-rigth");
const otherGameLeft = document.querySelector(".other-game-left");
const displayGame = document.querySelector(".if-click");

rowsGame.forEach((rows) => {
  rows.addEventListener("mousemove", () => {
    containerGame = rows.classList[1];
  });
});

Allcard.forEach((card) => {
  card.addEventListener("click", () => {
    if (containerGame) {
      // Code pour afficher les informations du jeu avec la valeur de containerGame
      displayGame.style.display = "block";

      const nameofGame = card.querySelector(".name");
      const cardImgs = card.querySelector(".card img");
      const nameGame = nameofGame.textContent.trim();
      const cardImg = cardImgs.src.split("/")[4];

      newContainerClick.style.display = "grid";

      containerChoice.innerHTML = `<h3>${nameGame}</h3> <img src="/images/${cardImg}"> 
        <div class="infos">
          <div class="infosFirst">
            <p>Name: ${nameGame}</p>
            <p>Développeur: ${nameGame} Production</p>
          </div>
          <div class="infosFirst">
          <p>Category: ${containerGame}</p>
          <p>Technology: HTML/CSS/JS</p>
          </div>
          <div class="infosFirst">
            <p>création: 2022/2023</p>
            <p>Dernière MAJ: 2022/2023</p>
          </div>
        </div>`;

      card.style.display = "block";
      main.style.display = "none";
      displayOtherGame();
      returnTop();
    }
  });
});

const displayOtherGame = () => {
  ul.forEach((div) => {
    div.addEventListener("click", () => {
      const na = div.innerHTML.split("</li>");
      const length = na.length;
      const oneThirdLength = Math.ceil(length / 3);
      const twoThirdsLength = oneThirdLength * 2;

      const firstThird = na.slice(0, oneThirdLength).join("</li>");
      const secondThird = na
        .slice(oneThirdLength, twoThirdsLength)
        .join("</li>");
      const lastThird = na.slice(twoThirdsLength).join("</li>");

      otherGameLeft.innerHTML = `${firstThird}`; // Utilise le contenu HTML dans innerHTML
      otherGameRigth.innerHTML = `${secondThird}`; // Utilise le contenu HTML dans innerHTML

      const glow = document.querySelectorAll(".glow");

      glow.forEach((glow) => {
        glow.style.display = "none";
      });

      card.forEach((el) => {
        el.children[0].style.transform = `rotateX(0deg)  rotateY(0deg)`;
        el.children[1].style.transform = `rotateX(0deg)  rotateY(0deg)`;
        // console.log(el);
      });
    });
  });
};

const navChoiceIfClick = document.querySelector(".if-click .nav-choice");

navItem.addEventListener("click", () => {
  if (toggleNav.classList[1] == "clicked") {
    main.style.gridTemplateColumns = "17% 83%";
    // displayGame.gridTemplateColumns = "17% 83%";
    navChoice.style.left = "0px";
    navChoiceIfClick.style.left = "0px";

    allLink.forEach((lk) => {
      lk.addEventListener("click", () => {
        const nameCategorys = lk.querySelector("a").lastChild.data;

        main.style.display = "grid";
        displayGame.style.display = "none";

        const glow = document.querySelectorAll(".glow");
        glow.forEach((glow) => {
          glow.style.display = "block";
        });

        navChoice.style.left = "-500px";
        navChoiceIfClick.style.left = "-500px";
        displayCategory(nameCategorys);
      });
    });
  } else {
    main.style.gridTemplateColumns = "0% 100%";
    navChoice.style.left = "-500px";
    navChoiceIfClick.style.left = "-500px";
  }
});

let tabNameGame = [];
let imgCarteTab = [];

let combinedData = [];

cards.forEach((crd) => {
  nameGameSearch = crd.querySelectorAll("h2")[0].innerHTML;
  const imgCartes = crd.querySelectorAll("img");

  tabNameGame.push(nameGameSearch.toLowerCase());
  imgCarteTab.push(imgCartes);
});

// Vérifier si les deux tableaux ont la même longueur
if (tabNameGame.length === imgCarteTab.length) {
  for (let i = 0; i < tabNameGame.length; i++) {
    let data = {
      nameGame: tabNameGame[i],
      imgCarte: imgCarteTab[i],
    };
    combinedData.push(data);
  }
} else {
  console.log("Les tableaux n'ont pas la même longueur.");
}

const input = document.querySelector(".input");
const getGame = document.querySelector(".search-input");

const displayGameInput = (x) => {
  // console.log(x);
  const nameP = x.querySelector(".search-input h4").innerHTML;
  main.style.display = "none";
  displayGame.style.display = "grid";
  containerChoice.innerHTML = ""; // Effacer le contenu existant du conteneur
  containerChoice.appendChild(x);
  input.value = "";

  containerChoice.innerHTML += `
  <div class="infos">
          <div class="infosFirst">
            <p>Name: ${nameP}</p>
            <p>Développeur: ${nameP} Production</p>
          </div>
          <div class="infosFirst">
          <p>Category: Nouvauté</p>
          <p>Technology: HTML/CSS/JS</p>
          </div>
          <div class="infosFirst">
            <p>création: 2022/2023</p>
            <p>Dernière MAJ: 2022/2023</p>
          </div>
        </div>`;
  getGame.style.display = "none";
  otherGameLeft.innerHTML = `
  <li class="cards">
                            <div class="card new">
                                <img src="/images/hawked-annonce-par-upwake-trailer-infos-date-de-sortie-alpha-fermee-24-novembre-2022-pc-ps4-ps5-xbox-one-series.jpg"
                                    alt="">
                            </div>
                            <div class="name">
                                <h2>Hawked</h2>
                            </div>
                        </li>
                        <li class="cards">
                            <div class="card">
                                <img src="/images/brothers-in-arms-3-mod-apk.jpg" alt="">
                            </div>
                            <div class="name">
                                <h2>Brothers in arms 3</h2>
                            </div>
                        </li>
                        <li class="cards">
                            <div class="card">
                                <img src="/images/zombies-games.jpg" alt="">
                            </div>
                            <div class="name">
                                <h2>Zombie game</h2>
                            </div>
                        </li>
                        <li class="cards">
                            <div class="card top-rated">
                                <img src="/images/cricket-legends.webp" alt="">
                            </div>
                            <div class="name">
                                <h2>Cricket legend</h2>
                            </div>
                        </li>
                        <li class="cards">
                            <div class="card">
                                <img src="/images/WRC-5-Jeu-PC-Télécharger-complet.jpg" alt="">
                            </div>
                            <div class="name">
                                <h2>WRC 5</h2>
                            </div>
                        </li>
                        <li class="cards">
                            <div class="card">
                                <img src="/images/league-of-angels3.jpg" alt="">
                            </div>
                            <div class="name">
                                <h2>League of angels 3</h2>
                            </div>
                        </li>
  `;

  otherGameRigth.innerHTML = `
            <li class="cards">
                <div class="card top-rated">
                  <img src="/images/toy-car-racung.avif" alt="">
                </div>

            <div class="name">
                <h2>Toy car racing</h2>
                </div>
                </li>
          <li class="cards">
            <div class="card new">
                <img src="/images/super-fast-driver.avif" alt="">
            </div>
            <div class="name">
                <h2>Super fast driver</h2>
            </div>
          </li>
          <li class="cards">
            <div class="card">
                <img src="/images/sport-car-challenge.avif" alt="">
            </div>
            <div class="name">
                <h2>Sport car challenge</h2>
            </div>
          </li>
          <li class="cards">
            <div class="card">
                <img src="/images/madalin-player.avif" alt="">
            </div>
            <div class="name">
                <h2>Madalin player</h2>
            </div>
          </li>
          <li class="cards">
            <div class="card">
                <img src="/images/endless-runner-3d (2).webp" alt="">
            </div>
            <div class="name">
                <h2>Hendless runner</h2>
            </div>
          </li>
          <li class="cards">
            <div class="card">
                <img src="/images/auto-driver.avif" alt="">
            </div>
            <div class="name">
                <h2>Auto driver</h2>
            </div>
          </li>
  `;
};

const black = document.querySelector(".black");
const liveTaping = () => {
  input.addEventListener("input", (e) => {
    let eTarget = e.target.value.toLowerCase();
    black.style.display = "block";
    let matchingGames = combinedData.filter((data) =>
      data.nameGame.includes(eTarget)
    );

    let uniqueGames = new Set();
    let uniqueImages = [];

    matchingGames.forEach((gameData) => {
      const gameName = gameData.nameGame;
      const images = gameData.imgCarte;

      if (!uniqueGames.has(gameName)) {
        uniqueGames.add(gameName);
        uniqueImages.push(images);
      }
    });

    getGame.style.display = "block";
    getGame.innerHTML = Array.from(uniqueGames)
      .map((gameName, index) => {
        const images = uniqueImages[index];

        const imagesHTML = Array.from(images)
          .map((image) => `<img src="${image.src}" alt="${image.alt}" />`)
          .join("");

        return `<div class="displaySearch">
                  ${imagesHTML}
                  <h4>${gameName}</h4>
                </div>`;
      })
      .join("");

    if (eTarget === "") {
      getGame.style.display = "none";
    }

    const displaySearch = document.querySelectorAll(".displaySearch");
    displaySearch.forEach((dsearch) => {
      dsearch.addEventListener("click", () => {
        displayGameInput(dsearch);
        returnTop();
        black.style.display = "none";
        getGame.style.display = "none";
      });
    });

    document.addEventListener("click", (event) => {
      const target = event.target;

      if (
        !target.classList.contains("displaySearch") &&
        !target.classList.contains("input") &&
        !target.classList.contains("svgSearch")
      ) {
        black.style.display = "none";
        getGame.style.display = "none";
        input.value = "";
      }
    });
  });
};

liveTaping();
