$(function () {
  // hamburger icon 的切換
  // 漢堡選單出現
  $("button.hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $('.nav').toggle("slide", { direction: "right" }, 500);
  });

  // 子選單 
  //進來先判斷
  if ($(window).width() <= 991) {
    $('.social_block').on('click', function () {
      $(this).children().slideToggle();
    });
  } else {
    $('.social_block').off('click');
  };

  //resize

  $(window).on('resize', function () {
    var count = 0;
    if ($(window).width() > 991) {

      $('.social_link_list').css({
        display: "none"
      });
      $('.social_block').off('click');
    } else {
      $('.social_block').on('click', function () {
        if (count == 0) {
          $(this).children().slideDown();
          count++;
        } else {
          $(this).children().slideUp();
          count = 0;
        }
      });
    };
  });

  //搜尋視窗

  $('.fake_search').click(function () {
    $('.search_slide').slideToggle();
  });
  $('.input_slide button').click(function () {
    $('.search_slide').slideUp();
  });

});
