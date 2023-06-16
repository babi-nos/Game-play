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
  audio.play();

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
      console.log(entry);
      if (entry.target === lastChild) {
        btnRight[0].style.display = "none";
        cardGameList.style.left = `initial`;
        // cardGameList.style.transition =  "none";
        cardGameList.style.transition = "all 1.1s ease-out";

        cardGameList.style.justifyContent = "right";
        cardGameList.style.paddingRight = "50px";
        console.log(translate);
      } else if (entry.target === lastChild2) {
        btnRight[1].style.display = "none";
        cardGameList2.style.left = `initial`;
        cardGameList2.style.transition = "all 1.1s ease-out";
        cardGameList2.style.justifyContent = "flex-end";
        cardGameList2.style.paddingRight = "50px";
      }else if (entry.target === lastChild3) {
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
      }else if (entry.target === lastChild3) {
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
    }else if (this.dataset.value == 2) {
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
    console.log(translate);

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
    }else if (this.dataset.value == 2) {
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
