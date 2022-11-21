// Preloader
var loader = document.querySelector("#preloader");
var mobMenu = document.querySelector(".mob-menu");
addEventListener("load", function(){
  document.body.style.overflow = "unset";
  loader.style.display = "none";
  mobMenu.style.display = "block";
})

//Full height
let viewportHeight = window.innerHeight;
document.documentElement.style.setProperty('--full-height', viewportHeight+"px");

//Age and Current Year
var birthDate = new Date(2001, 5, 01);
var currentDate = new Date();
var age = currentDate.getFullYear() - birthDate.getFullYear(); 
var month = currentDate.getMonth() - birthDate.getMonth();
var day = currentDate.getDate() - birthDate.getDate();
if ( month < 0 || month == 0 && day < 0 )
{
    age--;
}
document.querySelector("#age").textContent = age;
document.querySelector('#copyright span').textContent = currentDate.getFullYear();


// Active Navigation
const sections = document.querySelectorAll("section");
const navAnchor = document.querySelectorAll("#navbar-me ul li a");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navAnchor.forEach((a) => {
    a.classList.remove("active");
    a.parentElement.classList.remove("activeLi");
    if (a.classList.contains(current)) {
      a.classList.add("active");
      a.parentElement.classList.add("activeLi");
    }
  });
});
function scrollSmoothTo(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}


//Mobile Navigation
const mobButton = document.querySelector(".mob-menu span");
const mobNav = document.querySelector("#navigation");
mobButton.addEventListener("click", () => {
  mobNav.classList.toggle("hidden");
});
const navHide = () => {
  mobNav.classList.add("hidden");
};
navAnchor.forEach((n) => n.addEventListener("click", navHide));


//Portfolio Selector
const portfolio = document.querySelectorAll('.selector');
portfolio.forEach((selector) => {
  selector.addEventListener('click', ()=>{
    portfolio.forEach((removeSel) => removeSel.classList.remove('activeSel'))
    selector.classList.add('activeSel');
  });
});

//Typewriter Effect in Home
function typeWriter() {
  // Declaring Variables for Type Effect
  const words = ["Student", "Web Developer", "Programmer"];
  let count = 0; //Array counter
  let letterCount = 0; //Letter in a word counter
  let word = ""; //Iterated word of Array
  let text = ""; //Every letter in the word
  let timeOut = 70;
  let deleting = false; //Is declared for removing the text
  // Typing Effect function
  function loop() {
    if (count === words.length) {
      count = 0; //Keep looping after words are finished
    }
    word = words[count];
    if (deleting) {
      text = word.slice(0, --letterCount); //Deleting letters
    } else {
      text = word.slice(0, ++letterCount); //Adding letters
    }
    document.querySelector("#typing").textContent = text;
    timeOut = deleting ? 40 : 70;
    if (!deleting && text.length === word.length) {
      document.querySelector("#typing").textContent = text + "\xa0";
      timeOut = 2000;
      deleting = true;
    } else if (deleting && text.length === 0) {
      timeOut = 100;
      deleting = false;
      count++;
    }
    setTimeout(loop, timeOut);
  }
  loop();
}
typeWriter();

// Skills Section
function whole(outerdata, skilldata, end) {
  let progressbar = document.querySelector(outerdata);
  let valuecontainer = document.querySelector(skilldata);
  let progressValue = 0;
  let speed = 30;
  let progressEndValue = end;
  let progress = setInterval(() => {
    progressValue++;
    valuecontainer.textContent = `${progressValue}%`;
    progressbar.style.background = `conic-gradient(
                #6bad20 ${progressValue * 3.6}deg,
                rgb(205, 227, 203) ${progressValue * 3.6}deg
            )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
whole("#htmlout", "#html", 80);
whole("#cssout", "#css", 65);
whole("#jsout", "#js", 45);
whole("#pyout", "#python", 30);
whole("#phpout", "#php", 40);
