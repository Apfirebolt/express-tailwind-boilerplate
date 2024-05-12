$(document).ready(function () {
  // Code to be executed when the document is ready
  console.log("Hello, World!");

  // Init AOS
  AOS.init();

  $(".navigation li").hover(function () {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).children("ul").stop().slideDown(300);
    } else {
      $(this).children("ul").stop().slideUp(300);
    }
  });

  $("#closeMenuButton").click(function () {
    $("#mobileMenu").fadeOut(500, function () {
      $(this)
        .removeClass("opacity-100 scale-100")
        .addClass("opacity-0 scale-95");
    });
  });

  $("#openMenuButton").click(function () {
    $("#mobileMenu").fadeIn(500, function () {
      $(this)
        .removeClass("opacity-0 scale-95")
        .addClass("opacity-100 scale-100");
    });
  });

  // animate div with class hero
  // $(".hero").animate({
  //     opacity: 0.25,
  //     left: "+=50",
  //     height: "toggle"
  // }, 5000, function() {
  //     // Animation complete
  // });
});
