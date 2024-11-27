// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");

        // Simulate transition effect using manual function
        function transitionPostBox(element, display) {
            const interval = 10;
            const steps = 1000 / interval;
            const increment = 1 / steps;
            let opacity = display ? 0 : 1;
            opacity = display ? increment : -increment;

            function changeOpacity() {
                opacity = parseFloat(element.css("opacity")) + parseFloat(opacity.toFixed(2));
                element.css("opacity", opacity);

                if (opacity >= 1 || opacity <= 0) {
                    clearInterval(transition);
                    element.css("opacity", "");
                    element.css("display", display ? "block" : "none");
                }
            }

            const transition = setInterval(changeOpacity, interval);
        }

        // Iterate over each post-box
        $(".post-box").each(function () {
            const $this = $(this);
            if (value == "all" || $this.hasClass(value)) {
                transitionPostBox($this, true);
            } else {
                transitionPostBox($this, false);
            }
        });

        // Update active filter
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});


//nav
let menu = document.querySelector('.menu');
let mobilenav = document.querySelector('.mobile-nav');

menu.addEventListener('click',function(){
    mobilenav.classList.toggle('active');
});