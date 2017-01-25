// document.addEventListener("load", function(event) {
$(window).bind("load", function() {
    console.log('test');
    $(document).ready(function() {
        $("#main-body").removeClass("unloaded");
        $(".preloader-wrapper").removeClass("visible");
        $(".image-gallery-wrapper").addClass("loaded");
        $(".back-button").on("click", function() {
            window.history.back();
        })
        $.get("partials/sidebar-modal.html", function(data) {
            $(".modal-wrapper").html(data);
            $("#menuModal").on('show.bs.modal', function() {
                console.log('show');
                $(".float-menu .hamburger").addClass("closed");
            });
            $("#menuModal").on('hide.bs.modal', function() {
                $(".float-menu .hamburger").removeClass("closed");
            });
        });
        var textFields = $(".toi-text");
        var imgFields = $(".images-list img");
        if (imgFields.length > 0 && textFields.length > 0) {
            var activeImg = 0;
            var activeText = 0;
            var len = textFields.length;

            function changeImg() {
                $(imgFields[activeImg]).removeClass("visible");
                activeImg = (activeImg + 1) % len;
                $(imgFields[activeImg]).addClass("visible");
            }

            function changeText() {
                $(textFields[activeText]).removeClass("visible");
                activeText = (activeText + 1) % len;
                $(textFields[activeText]).addClass("visible");
            }
            setInterval(changeText, 4000);
            setInterval(changeImg, 4000);
        }
        var arrow = $(".arrow-wrapper");
        if (arrow) {
            arrow.on("click", function() {
                var toScroll = $(".first-section").height();
                // $(window).scrollTop(toScroll);
            })
        }
        // $(window).scroll(function() {
        $(window).on('scroll', function() {
            // $(window).on('DOMMouseScroll mousewheel', function() {
            var threshold = 200; // number of pixels before bottom of page that you want to start fading
            var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
            if (op <= 0) {
                arrow.hide();
            } else {
                arrow.show();
            }
            arrow.css("opacity", op);
        });
        // $('#full-page').fullpage();
        var pages = $("#full-page").children(".section");
        if (pages.length > 0) {
            $("#full-page").onepage_scroll({
                sectionContainer: ".section",
                loop: true,
                pagination: false,
                updateURL: false,
                beforeMove: function(index) {
                    console.info(index);
                    index -= 1;
                    switch (index) {
                        case 1:
                            break;
                        case 2:
                            break;
                        case 3:
                            $(".stats-grid-box").removeClass("anim-in-view");
                            break;
                        case 4:
                            // animated fadeInDown
                            break;
                    }
                },
                afterMove: function(index) {
                    console.log(index);
                    switch (index) {
                        case 1:
                            break;
                        case 2:
                            $(".upcoming-event-heading").addClass("animated fadeInUp");
                            $(".upcoming-event-wrapper img").addClass("animated fadeInUp");
                            break;
                        case 3:
                            $(".stats-grid-box").addClass("anim-in-view");
                            break;
                    }
                }
                // anim-in-view
            });
            $(".arrow-wrapper").on("click", function() {
                $("#full-page").moveDown();
            });
        }
    })
});