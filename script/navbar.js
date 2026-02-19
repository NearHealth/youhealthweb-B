var myNav = document.querySelector('.yh-header__ribbon');
var whiteContentY = document.querySelector('.yh-header');

window.onscroll = function () { 
    // console.log(document.documentElement.scrollTop, whiteContentY.offsetHeight);
    if (document.documentElement.scrollTop >= (whiteContentY.offsetHeight - 46)) {
        // console.log('fñlkadjfa')
        // LOGO IMG
        document.querySelector(".yh-logo").classList.add("yh-logo--purple");
        document.querySelector(".yh-logo").classList.remove("yh-logo--white");
        // LANGUAGE BUTTON
        document.querySelector(".selected-lang").classList.add("yh-button--transparent--black");
        document.querySelector(".selected-lang").classList.remove("yh-button--transparent");
        document.querySelector("ul.language--dropped").classList.add("purple");
        // NAV BAR
        document.querySelector(".nav-header").classList.add("nav-header--purple");
        document.querySelector(".nav").classList.add("nav-header--purple");

    } 
    else {
        // LOGO IMG
        document.querySelector(".yh-logo").classList.add("yh-logo--white");
        document.querySelector(".yh-logo").classList.remove("yh-logo--purple");
        // LANGUAGE BUTTON
        document.querySelector(".selected-lang").classList.add("yh-button--transparent");
        document.querySelector(".selected-lang").classList.remove("yh-button--transparent--black");
        document.querySelector("ul.language--dropped").classList.remove("purple");
        // NAV BAR
        document.querySelector(".nav-header").classList.remove("nav-header--purple");
        document.querySelector(".nav").classList.remove("nav-header--purple");
    }
};