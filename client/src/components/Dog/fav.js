import $ from "jquery"

$(function() {
    $(".heart").on("click", function() {
      $(this).toggleClass("is-active");
    });
  });




