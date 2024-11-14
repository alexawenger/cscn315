// jquery.js - jQuery animations for the joke section

$(function () {
    // Fade in and slide effect for the joke section when the page loads
    $("#joke").css({ opacity: 0, left: "-50px" }).show().animate({
      opacity: 1,
      left: "0"
    }, 1000); // 1000ms for a smooth transition effect
  
    // Fade-out/fade-in animation for each new joke
    $("#new-joke-btn").on("click", function () {
      // Fade out the joke content
      $("#joke-info").fadeOut(300, function () {
        // When fade out completes, fetch a new joke and fade it in
        $("#joke-info").fadeIn(300);
      });
    });
  });
  