function switchLanguage(pickedLanguage) {
    if (pickedLanguage == "es"){
        var previousLanguageElements = document.querySelectorAll('[lang="es"]');
        previousLanguageElements.forEach(function(item) {
            if (item.classList.contains("section__header")) {
                item.style.display = "inline-block";
            } else {
                item.style.display = "block";
            }
        })

        var languageElements = document.querySelectorAll('[lang="en"]');
        languageElements.forEach(function(item) {
            item.style.display = "none";
        })
    } else {
        var previousLanguageElements = document.querySelectorAll('[lang="en"]');
        previousLanguageElements.forEach(function(item) {
            if (item.classList.contains("section__header")) {
                item.style.display = "inline-block";
            } else {
                item.style.display = "block";
            }
        })

        var languageElements = document.querySelectorAll('[lang="es"]');
        languageElements.forEach(function(item) {
            item.style.display = "none";
        })
    }

    var pageName = window.location.pathname.split('/').pop();
    // console.log(pageName)
    if (pageName == "contact.html") {
        changeContactFormPlaceholders()
    }
} 

function changeSelectedLanguageText(pickedLanguage) {
    if (pickedLanguage == "es") {
        document.querySelector(".selected-lang").innerText = "Español";
        document.querySelector(".selected-lang").classList.add("es");
        document.querySelector(".selected-lang").classList.remove("en");
    }
    else {
        document.querySelector(".selected-lang").innerText = "English";
        document.querySelector(".selected-lang").classList.add("en");
        document.querySelector(".selected-lang").classList.remove("es");
    }
}

function hideLangMenuDropDown() {
    langMenuDropdown.style.display = "none";
    document.querySelector(".selected-lang").classList.remove("yh-language-picker--active");
}

function setLanguage(language) {
    localStorage.setItem('language', language);
}

function getLanguage() {
    var pickedLanguage = localStorage.getItem('language');
    if (!!pickedLanguage) {
        changeSelectedLanguageText(pickedLanguage)
        return localStorage.getItem('language')
    }else {
        setLanguage("en")
        return "en"
    }
}

switchLanguage(getLanguage());

var langMenu = document.querySelector(".lang-menu");
var langMenuDropdown = document.querySelector(".lang-menu ul");
var langMenuDropdownPick = document.querySelectorAll('.lang__option');

langMenu.addEventListener('click', function(e){
    langMenuDropdown.style.display = "block";
    document.querySelector(".selected-lang").classList.add("yh-language-picker--active");
    e.stopPropagation();
})

langMenuDropdownPick.forEach(function(item) {
    item.addEventListener('click', function(e) {
        var pickedLanguage = item.getAttribute("class").split(" ")[0];
        console.log(pickedLanguage);
        hideLangMenuDropDown();
        setLanguage(pickedLanguage); 
        switchLanguage(pickedLanguage); 
        changeSelectedLanguageText(pickedLanguage)
    })
})

window.addEventListener('click', function() {
    hideLangMenuDropDown();
})


function changeContactFormPlaceholders() {
    var activeLanguage = localStorage.getItem('language');
    var formPlaceholderText = {
        es: {
            user_name: "Nombre",
            user_last_name: "Apellidos",
            user_email: "Correo Electrónico",
            user_telephone: "Número de teléfono",
            cta_contact: "¡Contactanos!",
            user_state: "Estado"
        },
        en: {
            user_name: "First name",
            user_last_name: "Last name",
            user_email: "Email",
            user_telephone: "Phone number",
            cta_contact: "Contact us!",
            user_state: "State"
        }
    }

    document.querySelector("input[name='user_name']").placeholder = formPlaceholderText[activeLanguage].user_name;
    document.querySelector("input[name='user_last_name']").placeholder = formPlaceholderText[activeLanguage].user_last_name;
    document.querySelector("input[name='user_email']").placeholder = formPlaceholderText[activeLanguage].user_email;
    document.querySelector("input[name='user_telephone']").placeholder = formPlaceholderText[activeLanguage].user_telephone;
    document.querySelector("input[name='cta_contact']").value = formPlaceholderText[activeLanguage].cta_contact;
    document.querySelector("input[name='user_state']").placeholder = formPlaceholderText[activeLanguage].user_state;
}

// utility functions
if(!Util) function Util () {};

Util.addClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.add(classList[0]);
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.remove(classList[0]);
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function(el, className, bool) {
  if(bool) Util.addClass(el, className);
  else Util.removeClass(el, className);
};