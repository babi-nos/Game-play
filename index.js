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
const lastChild = document.querySelector(".card-game-list li:last-child");
const lastChild2 = document.querySelector(".card-game-list2 li:last-child");
const lastChild3 = document.querySelector(".card-game-list3 li:last-child");
const lastChild4 = document.querySelector(".card-game-list4 li:last-child");
const ul = document.querySelectorAll(".all-game ul");
const sliderContainer = document.querySelector(".slider");

console.log(ul);

let translate = 0;
let translate2 = 0;
let translate3 = 0;
let translate4 = 0;
const px = "px";
const offset = 990; // Valeur de décalage (peut être ajustée selon vos besoins)
const largeurEcran = window.innerWidth;
const width = cardGameList.scrollWidth;
const width2 = cardGameList2.scrollWidth;
const width3 = cardGameList3.scrollWidth;
const width4 = cardGameList4.scrollWidth;
const diffenrence = width - largeurEcran;
const diffenrence2 = width2 - largeurEcran;
const diffenrence3 = width3 - largeurEcran;
const diffenrence4 = width4 - largeurEcran;

// const largeurEcran = window.innerWidth;
const pourcentage = 19;
const dixSeptPourcent = Math.round((pourcentage / 100) * largeurEcran);
console.log(dixSeptPourcent);

const cards = document.querySelectorAll(".cards");
const forChoice = document.querySelector(".forChoice");

btnNavbar.addEventListener("click", () => {
  btnNavbar.classList.toggle("clicked");
});

navItem.addEventListener("click", () => {
  if (toggleNav.classList[1] == "clicked") {
    main.style.gridTemplateColumns = "17% 83%";
    navChoice.style.left = "0px";
  } else {
    main.style.gridTemplateColumns = "0% 100%";
    navChoice.style.left = "-500px";
  }
});

// CARD EFECT CARD

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
        console.log(`${-diffenrence + -40}px`);
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
        translate3 = -diffenrence4;
        if (toggleNav.classList[1] == "clicked") {
          cardGameList4.style.left = `${-diffenrence4 - dixSeptPourcent}px`;
        } else {
          cardGameList4.style.left = `${-diffenrence4 + -40}px`;
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
    case "Action":
      btnLeft[3].style.opacity = 1;
      btnRight[3].style.opacity = 1;
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
      // translate = 0;
      // translate2 = 0;
      //translate3 = 0;

      sliderContainer.style.display = "block";

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
  });
}

const allLink = document.querySelectorAll(".link");

allLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    const nameCategory = link.querySelector("a").lastChild.data;
    e.preventDefault();
    observer.disconnect();

    displayCategory(nameCategory);
  });
});
