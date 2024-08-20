(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    
})(jQuery);


 // Modal slider gallery
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var galleryImages = document.querySelectorAll(".gallery-img");
var navBar = document.querySelector("nav");
var currentIndex = 0;

// Event listener for gallery images
galleryImages.forEach((img, index) => {
    img.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        currentIndex = index;
        document.body.classList.add("modal-open"); // Evita el desplazamiento del cuerpo
        navBar.style.visibility = "hidden"; // Oculta la barra de navegación sin quitar su espacio
    }
});

// Close modal function
function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Permite el desplazamiento del cuerpo nuevamente
    navBar.style.visibility = "visible"; // Muestra la barra de navegación al cerrar el modal
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    closeModal();
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Navigation for slider
document.querySelector(".prev").onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
    modalImg.src = galleryImages[currentIndex].src;
}

document.querySelector(".next").onclick = function() {
    currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
    modalImg.src = galleryImages[currentIndex].src;
}