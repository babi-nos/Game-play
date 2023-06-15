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

const btnRight = document.querySelectorAll(".btn-right");
const btnLeft = document.querySelectorAll(".btn-left");
const cardGameList = document.querySelector(".card-game-list");
const lastChild = document.querySelector(".card-game-list li:last-child");
const lastChild2 = document.querySelector(".card-game-list2 li:last-child");
const cardGameList2 = document.querySelector(".card-game-list2");

console.log(cardGameList2);

let translate = 0;
let translate2 = 0;
const px = "px";
const offset = 490; // Valeur de décalage (peut être ajustée selon vos besoins)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      if (entry.target === lastChild) {
        // console.log("Dernier enfant de la première liste en vue");
        btnRight[0].style.display = "none";
        // cardGameList.style.left = `100%`;
        // translate += offset;

        // cardGameList.style.right = `25px`;
        // cardGameList.style.justifyContent = "flex-end";
        // cardGameList.style.paddingRight = "75px";
        // cardGameList.style.right =  "5%";
        console.log(translate);
      } else if (entry.target === lastChild2) {
        // console.log("Dernier enfant de la deuxième liste en vue");
        btnRight[1].style.display = "none";
      }
    } else {
      btnRight.forEach((btnR) => {
        btnR.style.display = "block";
      });
      console.log("rrr");
    }
  });
});

btnRight.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (this.dataset.value == 0) {
      translate -= offset;
      cardGameList.style.left = translate + px;
      btnLeft[0].style.display = "block";
      observer.observe(lastChild, translate);
    } else if (this.dataset.value == 1) {
      translate2 -= offset;
      cardGameList2.style.left = translate2 + px;
      btnLeft[1].style.display = "block";
      observer.observe(lastChild2);
    }
  });
});

btnLeft.forEach((btnL) => {
  btnL.addEventListener("click", function (e) {
    console.log(translate);
    if (this.dataset.value == 0) {
      translate += offset;
      cardGameList.style.left = translate + px;

      if (translate >= 0) {
        btnLeft[0].style.display = "none";
        cardGameList.style.left = "2%";
      } else {
        // observer.observe();
      }
    } else if (this.dataset.value == 1) {
      translate2 += offset;
      cardGameList2.style.left = translate2 + px;
      // observer.observe();

      if (translate2 >= 0) {
        cardGameList2.style.left = "2%";
        btnLeft[1].style.display = "none";
      }
    }
  });
});
