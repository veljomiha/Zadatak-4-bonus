/*ARROW*/   
    var accItem = document.getElementsByClassName('q-a-a');
    var accHD = document.getElementsByClassName('question-and-arrow');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'q-a-a close';
        }
        if (itemClass == 'q-a-a close') {
            this.parentNode.className = 'q-a-a open';
        }
    }
  
/*EMAIL VALIDATION*/ 
const emailField = document.getElementById("emailField");
const button = document.getElementById("button");
const response = document.getElementById("message");
const emailDiv = document.getElementById("email-div")

button.addEventListener("click", function () {
  const email = emailField.value;
  if (validateEmail(email)) {
    message.innerHTML = "Your email is correct";
    emailDiv.classList.remove("error-2");
    emailField.classList.remove("error");
    emailField.placeholder = "Enter your email address";
    emailDiv.classList.add("correct");
  } else {
    message.innerHTML = "Whoops, make sure it's an email";
    emailDiv.classList.remove("correct");
    emailField.classList.add("error");
    emailField.placeholder = "email@example/com";
    emailDiv.classList.add("error-2");
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/*CHANGE CONTENT*/
speedySearching.addEventListener("click", function () {
    illustrationTittle.innerHTML="Intelligent search";
    illustrationCont.innerHTML =" Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
    illuImg.src = "images/illustration-features-tab-2.svg";
    speedySearching.style.borderBottom = "2px solid #FA5959";
    easySharing.style.borderBottom = "1px solid rgba(73, 93, 207, 0.20012)";
    simpleBookmarking.style.borderBottom = "1px solid rgba(73, 93, 207, 0.20012)";
});

simpleBookmarking.addEventListener("click", function () {
    illustrationTittle.innerHTML="Bookmark in one click";
    illustrationCont.innerHTML ="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    illuImg.src = "images/illustration-features-tab-1.svg";
    simpleBookmarking.style.borderBottom = "2px solid #FA5959";
    speedySearching.style.borderBottom = "1px solid rgba(73, 93, 207, 0.20012)";
    easySharing.style.borderBottom = "1px solid rgba(73, 93, 207, 0.20012)";
});

easySharing.addEventListener("click", function () {
    illustrationTittle.innerHTML="Share your bookmarks";
    illustrationCont.innerHTML ="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
    illuImg.src = "images/illustration-features-tab-3.svg";
    easySharing.style.borderBottom = "2px solid #FA5959";
    speedySearching.style.borderBottom = "1px solid rgba(73, 93, 207, 0.20012)";
    simpleBookmarking.style.borderBottom = "1px solid rgba(73, 93, 207, 0.20012)";
});



/*BURGER*/
var burgerMenu = document.getElementById('burger-menu');
        var overlay = document.getElementById('menu');
        var modeImg = document.getElementById("bookmark-imgg");
        burgerMenu.addEventListener('click', function () {
            this.classList.toggle("close");
            overlay.classList.toggle("overlay");

            /*BOOKMARK WHITE*/
            if (modeImg.src.match("images/logo-bookmark.svg")) {
            modeImg.src = "images/bookmark-white.svg";
            modeImg.style.zIndex = "10";
            }
            else {
            modeImg.src = "images/logo-bookmark.svg";
            }
            
            /*SCROLL*/
            if(document.getElementsByTagName('html')[0].style.overflowY == "hidden"){
                document.getElementsByTagName('html')[0].style.overflowY = "auto";
            }
            else{
             document.getElementsByTagName('html')[0].style.overflowY = "hidden";

            }
        });

 

