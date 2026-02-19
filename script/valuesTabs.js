const valuesGallery = document.querySelectorAll(".card-value");
const valuesGalleryExtended = document.querySelectorAll(".values-gallery--extended");
const cardsValueExtended = document.querySelectorAll(".card-value--extended");

var valueCheck = "unidad";

// logic for mobile images to be purple
if (window.matchMedia("(max-width: 550px)").matches) {
    console.log('matches', cardsValueExtended[0])
    document.querySelector("[targetID='unidad'] img").src = "images/pages/about-us/valores/icon-unidad.svg"
    document.querySelector("[targetID='ingenio'] img").src = "images/pages/about-us/valores/icon-ingenio.svg"
    document.querySelector("[targetID='honestidad'] img").src = "images/pages/about-us/valores/icon-honestidad.svg"
    document.querySelector("[targetID='pasion'] img").src = "images/pages/about-us/valores/icon-pasion.svg"
    document.querySelector("[targetID='empatia'] img").src = "images/pages/about-us/valores/icon-empatia.svg"
}

for( i = 0; i < valuesGallery.length; i++) {
    console.log("#", valuesGallery[i])

    function switchIcon(element, target, isWhite = true) {
        var imagePath = "images/pages/about-us/valores/";
        var imgTarget = element.querySelector("img");
        var iconColor = isWhite ? "white-" : ""

        imgTarget.src = imagePath + iconColor +"icon-" + target + ".svg";
    }

    if (window.matchMedia("(min-width: 851px)").matches ) {
        valuesGallery[i].addEventListener("mouseover", function(e) {
            if(!!e.target.getAttribute("targetExtended") && e.target.getAttribute("targetExtended") != valueCheck) {
                var target = e.target.getAttribute("targetExtended");
                var cardExtended = document.querySelector('[targetID="'+target+'"]');

                var cardExtendedActive = document.querySelector(".card-value--extended--active");
                var cardValueActive = document.querySelector(".card-value--active");
                switchIcon(cardValueActive, cardValueActive.getAttribute("targetExtended"), false)

                cardExtendedActive.classList.remove("card-value--extended--active");
                cardExtended.classList.add("card-value--extended--active");

                cardValueActive.classList.remove("card-value--active");
                e.target.classList.add("card-value--active");

                valueCheck = target;
                switchIcon(e.target, target);  
            }
        })
    }

    // LOGIC FOR CLICKS ON TABLET 
    if (window.matchMedia("(max-width: 1024px)").matches && window.matchMedia("(min-width: 551px)").matches ) {
        valuesGallery[i].addEventListener("click", function(e) { 
            var tempSelector = e.target;
            
            if (tempSelector.nodeName == "IMG" || tempSelector.nodeName == "SPAN") {
                tempSelector = tempSelector.parentNode;
            }

            if(!!tempSelector.getAttribute("targetExtended") && tempSelector.getAttribute("targetExtended") != valueCheck) {
                var target = tempSelector.getAttribute("targetExtended");
                var cardExtended = document.querySelector('[targetID="'+target+'"]');
    
                var cardExtendedActive = document.querySelector(".card-value--extended--active");
                var cardValueActive = document.querySelector(".card-value--active");
                switchIcon(cardValueActive, cardValueActive.getAttribute("targetExtended"), false)
    
                cardExtendedActive.classList.remove("card-value--extended--active");
                cardExtended.classList.add("card-value--extended--active");
    
                cardValueActive.classList.remove("card-value--active");
                tempSelector.classList.add("card-value--active");
    
                valueCheck = target;
                switchIcon(tempSelector, target);  
            }
        })
    }

    
    // LOGIC FOR CLICKS ON MOBILE 
    if (window.matchMedia("(max-width: 1024px)").matches) {
        cardsValueExtended[i].addEventListener("click", function(e) { 
            if (e.target.nodeName == "SPAN" || !!e.target.classList.contains("card-value--extended__arrow-mobile") || e.target.nodeName == "IMG") {
                toggleAcordion(e.target.parentNode.querySelector(".card-value--extended__description"))
            } else if (e.target.nodeName == "svg") {
                toggleAcordion(e.target.parentNode.parentNode.querySelector(".card-value--extended__description"));
            } else if (e.target.nodeName == "path") {
                toggleAcordion(e.target.parentNode.parentNode.parentNode.querySelector(".card-value--extended__description"));
            } else {
                toggleAcordion(e.target.querySelector(".card-value--extended__description"));
            }

            function toggleAcordion(descriptionNode) {
                console.log(document.querySelector(".description--active"))
                var descriptionActive = document.querySelector(".description--active");
                if (!!descriptionActive) {
                    descriptionActive.classList.toggle("description--active");
                    if (descriptionActive != descriptionNode) descriptionNode.classList.toggle("description--active");
                } else {

                    descriptionNode.classList.toggle("description--active");
                }
            }
        })
    }
}
