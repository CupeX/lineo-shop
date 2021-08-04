//Sticky Header
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 40) {
        $(".sticky1").fadeIn();
    } else {
        $(".sticky1").fadeOut();
    }
    if (y > 700) {
        $(".sticky2").fadeIn();
    } else {
        $(".sticky2").fadeOut();
    }
});

//Price calculator new verison
$(document).ready(function () {
    var product_quantity = 1,
        qty = 1;
    console.log(product_quantity);
    console.log(qty);

    $(".orangeButton").click(function () {
        var product_quantity = $(this).attr("data-quantity");
        alert(`Odabrali ste ${product_quantity} proizvoda!`);
        productQty = document.getElementById("productQty");
        showQty = document.getElementById("dropText");
        productQty.innerHTML = product_quantity;
        showQty.innerHTML = `Imate ${product_quantity} proizvoda u kosarici`;
    });

    $(".tableBox").on("click", function () {
        var qty = $(this).data("quantity"),
            price = 49.99,
            newPrice = document.getElementById("newPrice"),
            newPrice1 = document.getElementById("newPrice1"),
            oldPrice = document.getElementById("oldPrice"),
            oldPrice1 = document.getElementById("oldPrice1"),
            price1 = (((price * (100 - 60.01)) / 100) * qty).toFixed(2) + " € + Besplatna dostava ",
            price2 = (((price * (100 - 69.01)) / 100) * qty).toFixed(2) + " € + Besplatna dostava ",
            price3 = (((price * (100 - 73.01)) / 100) * qty).toFixed(2) + " € + Besplatna dostava ",
            oldPriceCalc = price * qty + " €";

        $(".orangeButton").attr("data-quantity", qty);

        if (qty == 1) {
            newPrice.innerHTML = price1;
            oldPrice.innerHTML = oldPriceCalc;
            newPrice1.innerHTML = price1;
            oldPrice1.innerHTML = oldPriceCalc;
        }

        if (qty == 2) {
            newPrice.innerHTML = price2;
            oldPrice.innerHTML = oldPriceCalc;
            newPrice1.innerHTML = price2;
            oldPrice1.innerHTML = oldPriceCalc;
        }

        if (qty == 3) {
            newPrice.innerHTML = price3;
            oldPrice.innerHTML = oldPriceCalc;
            newPrice1.innerHTML = price3;
            oldPrice1.innerHTML = oldPriceCalc;
        }
    });
});

// Quantity selector (tableBox) starts here
(function togCell() {
    $(".backgroundSelect>td").click(function (e) {
        $(".backgroundSelect>td").removeClass("backgroundChange");
        $(this).addClass("backgroundChange");
    });
})();

// Quantity 2 selector (tableBox) starts here
(function togCell() {
    $(".backgroundSelect2>td").click(function (e) {
        $(".backgroundSelect2>td").removeClass("backgroundChange2");
        $(this).addClass("backgroundChange2");
    });
})();

// about section options

//Ovo ovako radi normalno, i mijenja activni "li"
/*$("#selectionLi>li").click(function () {
    let elements = $("#selectionLi>li"),
        length = elements.length;
    // describe = document.getElementsByClassName("describe"),
    // delivery = document.getElementsByClassName("delivery"),
    // customerRating = document.getElementsByClassName("customerRating");

    for (i = 0; i < length; i++) {
        $(elements[i]).removeClass("activeAbout");
        $(this).addClass("activeAbout");

        // sta mi treba sad
        // $(elements[i]).describe.toggleClass("hidden");
        // $(elements[i]).delivery.toggleClass("hidden");
        // $(elements[i]).customerRating.toggleClass("hidden");
    }
});

// Ovo mi radi posao, al' mislim da moze urednije da se napise
$(document).ready(function () {
    $("#describe").click(function () {
        $(".describe").show();
        $(".delivery, .customerRating").hide();
    });

    $("#delivery").click(function () {
        $(".delivery").show();
        $(".describe, .customerRating").hide();
    });

    $("#customerRating").click(function () {
        $(".customerRating").show();
        $(".describe, .delivery").hide();
    });
});
*/

// Zeljko Drljic solution

var li_items = $("#selectionLi > li");
var tabs = ["describe", "delivery", "customerRating"];
var tabs_length = tabs.length;

li_items.on("click", function () {
    var id = $(this).attr("id");

    $(li_items).removeClass("activeAbout");
    $(this).addClass("activeAbout");

    for (var i = 0; i < tabs_length; i++) $('div[class="' + tabs[i] + '"]').hide();

    $('div[class="' + id + '"]').show();
});

//Slide gallery
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dotImg");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active");
    }
    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";
}

//Slideshow ZOOM

// button for zooming
const zoom = document.getElementById("zoomSlides");
// bluring background
const overlay = document.getElementById("overlay");
// moving slide pictures in center of scren
const slides = document.getElementsByClassName("slidesContainer");
// prev and next arrows
const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");

$(document).ready(function () {
    $(zoom).click(function () {
        $(zoom).toggleClass("zoomPosition");
        $(prev).toggleClass("arrowsPosition");
        $(next).toggleClass("arrowsPosition");
        $(overlay).toggleClass("hidden");
        $(slides).toggleClass("zIndex");
        $("body").toggleClass("overflow");

        $(overlay).click(function () {
            if (!overlay.classList.contains("hidden")) {
                $(zoom).toggleClass("zoomPosition");
                $(prev).toggleClass("arrowsPosition");
                $(next).toggleClass("arrowsPosition");
                $(overlay).addClass("hidden");
                $(slides).toggleClass("zIndex");
                $("body").toggleClass("overflow");
            }
        });
    });
});
