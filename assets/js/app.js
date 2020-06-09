$(document).ready(function() {
  const mq = window.matchMedia("(min-width: 992px)");

  if (mq.matches) {
    $(".section-a .block").click(function() {
      $(".active").removeClass("active");
      $(this).addClass("active");
    });
  };
});
