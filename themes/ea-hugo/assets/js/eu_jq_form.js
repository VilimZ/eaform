console.log('This site AAAAAAAAAAAAA.');

(function($) {
    "use strict";
        $(document).ready(function() {
                $('.modal-link').on('click', function() {
                $('body').addClass("modal-open");
            });
            $('.close-modal').on('click', function() {
                $('body').removeClass("modal-open");
            });
        });
}(jQuery));


/*
$(function() {
    $("#popup-trigger").click(function() {
      $('#popup-modal').show();
    });
  
    $(".close").click(function() {
      $("#popup-modal").fadeOut();
    });
  
    $("#popup-modal").click(function () {
      $("#popup-modal").fadeOut();
    }).children().click(function () {
      return false;
    });
  });


 */