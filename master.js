

// open settings box
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    
  this.classList.toggle("fa-spin");

  document.querySelector(".settings-box").classList.toggle("open");

}
// End


// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {

  document.documentElement.style.setProperty('--main-color', mainColors);

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {

      // Add Active Class
      element.classList.add("active");

    }

  });

}

// switch colors
const colorsli = document.querySelectorAll(".colors-list li"); 

// loop on all list item
colorsli.forEach(li => {

//   click on every list item 
  li.addEventListener("click", (e => {
    
    // set color on root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

  }));

});
// end


// switch buttons
const randomBackEl = document.querySelectorAll(".random-backgrounds span"); 

// loop on all list item
randomBackEl.forEach(span => {

//   click on every list item 
  span.addEventListener("click", (e) => {

    handleActive(e);

    e.target.classList.add("active");

    if (e.target.dataset.background === 'yes') {

        backgroundoption = true;

        randomaizeimgs();

    } else {

        backgroundoption = false;

        clearInterval(backgroundinterval);

    }

  });

});
// end


// random background image

    // image array
let imagesarray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

let backgroundoption = true

let backgroundinterval;

function randomaizeimgs() {

  if (backgroundoption === true){
        
    let landingpage = document.querySelector(".landing-page");

    backgroundinterval = setInterval(() => {
    
    let randomimgs = Math.floor(Math.random() * imagesarray.length);
    
    landingpage.style.backgroundImage = 'url("images/' + imagesarray[randomimgs] + '")';
    
    }, 500);

    };
};

// End


// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop >= (skillsOuterHeight + skillsOffsetTop - windowHeight)) {

    let allSkills = document.querySelectorAll(".skills .skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }

};
// END


let ourGallary = document.querySelectorAll(".gallery img");

ourGallary.forEach(img => {

img.addEventListener('click', (e) => {

  let overlay = document.createElement("div");

  overlay.className = 'popup-overlay';

  document.body.appendChild(overlay);

  let popupbox = document.createElement("div");

  popupbox.className = 'popup-box';

  if (img.alt !== null) {

    let imgheding = document.createElement("h3");

    let headText = document.createTextNode(img.alt);

    imgheding.appendChild(headText);

    popupbox.appendChild(imgheding);

  }

  let popupimg = document.createElement("img");

  popupimg.src = img.src;

  popupbox.appendChild(popupimg);

  document.body.appendChild(popupbox);

  let closeButton = document.createElement("span");

  let closeButtontext = document.createTextNode("x");

  closeButton.className = 'close-button';

  closeButton.appendChild(closeButtontext);

  popupbox.appendChild(closeButton);

  });

});

document.addEventListener("click", function (e) {
  
  if (e.target.className == 'close-button' | 'popup-overlay'){

    e.target.parentNode.remove();

    document.querySelector(".popup-overlay").remove();

  }

});
// END


const allLinks = document.querySelectorAll(".links a");

const allBullets = document.querySelectorAll(".nav-bullets .bullet ");

function scrolltohh (element) {

  element.forEach(ele => {
  
    ele.addEventListener('click', (e) => {

      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });

}
scrolltohh(allBullets);
scrolltohh(allLinks);
// END


// handle active state
function handleActive(ev){

  ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

  });

  ev.target.classList.add("active");


}
// END


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

  bulletsSpan.forEach(span => {

    span.classList.remove("active");

  });

  if (bulletLocalItem === 'block') {

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

  } else {

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");

  }

}

bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === 'show') {

      bulletsContainer.style.display = 'block';

      localStorage.setItem("bullets_option", 'block');

    } else {

      bulletsContainer.style.display = 'none';

      localStorage.setItem("bullets_option", 'none');

    }

    handleActive(e);

  });

});
// END

document.querySelector(".reset-options").onclick = function () {

  // localStorage.clear();
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets_option");

  // Reload Window
  window.location.reload();

};
// END

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

  // Stop Propagation
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");

};








