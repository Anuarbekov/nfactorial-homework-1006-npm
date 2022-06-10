$("document").ready(() => {
  $(".tellStory").on("click", function () {
    const name = $("#name").val();
    const age = $("#age").val();
    const adverb = $("#adverb").val();
    const TEXT =
      name +
      " is so smart, that in " +
      age +
      " year old, " +
      name +
      " uses GIT so easily. One day on hackaton, " +
      name +
      " was abused for using JavaScript in " +
      adverb +
      " way. Then " +
      name +
      " started using jQuery...";
    $("#final").text(TEXT);
  });
  $(".calculateFileSize").on("click", () => {
    const width = $("#width").val();
    const height = $("#height").val();
    const numberOfColors = $("#numberOfColors").val();
    const SIZE =
      (parseInt(width) * parseInt(height) * parseInt(numberOfColors)) / 1024;
    $("#final").text("Your file size is " + SIZE.toString() + " kB.");
  });
});

$("#switchToLight").on("click", () => {
  localStorage.setItem("theme", "light");
  switchToLight();
});

$("#switchToDark").on("click", () => {
  localStorage.setItem("theme", "dark");
  switchToDark();
});


const switchToDark = function () {
  document.body.classList.add("body-dark");
  const h3 = document.getElementsByClassName("h3");
  const final = document.getElementById("final");
  const nav = document.getElementById("navbar");
  const navElements = document.getElementsByClassName("nav-link");
  nav.classList.add("bg-dark");
  final.classList.add("final-dark");
  for (let i = 0; i < navElements.length; i++) {
    navElements[i].classList.add("text-white");
  }
  for (let i = 0; i < h3.length; i++) {
    h3[i].classList.add("h3-dark");
  }
};

const switchToLight = function () {
  document.body.classList.remove("body-dark");
  const h3 = document.getElementsByClassName("h3");
  const final = document.getElementById("final");
  const nav = document.getElementById("navbar");
  const navElements = document.getElementsByClassName("nav-link");
  nav.classList.remove("bg-dark");
  final.classList.remove("final-dark");
  for (let i = 0; i < navElements.length; i++) {
    navElements[i].classList.remove("text-white");
  }
  for (let i = 0; i < h3.length; i++) {
    h3[i].classList.remove("h3-dark");
  }
};

const checkForTheme = () => {
  let theme = localStorage.getItem('theme');
  if(theme === "dark") {
    switchToDark();
  } else {
    switchToLight();
  }
}

const addCookies = () => {
  document.cookie = "user=someone; expires=Wed, 15 Jun 2022 00:00:00 GMT";
};
