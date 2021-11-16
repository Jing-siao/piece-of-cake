$(function () {
  var countA = 0;
  var countB = 0;
  var countC = 0;
  $('#favorite').click(function () {
    if (countA == 0) {
      $(this).parent().css({
        background: "#bc2a26"
      });
      $(this).attr('src', './icon/icons8-favorite-folder-26.png');
      $(this).css({
        opacity: "1"
      });
      countA++;

    } else {
      $(this).parent().css({
        background: "#FBD9D9"
      });
      $(this).attr('src', 'https://img.icons8.com/metro/26/000000/likes-folder.png');
      countA = 0;
    };
  });


  $('#like').click(function () {
    if (countB == 0) {
      $(this).parent().css({
        background: "#bc2a26"
      });
      $(this).attr('src', './icon/icons8-facebook-like-24.png');
      $(this).css({
        opacity: "1"
      });
      countB++;

    } else {
      $(this).parent().css({
        background: "#FBD9D9"
      });
      $(this).attr('src', 'https://img.icons8.com/material/24/000000/facebook-like--v1.png');
      countB = 0;
    };
  });

  $('#share').click(function () {
    if (countC == 0) {
      $(this).parent().css({
        background: "#bc2a26"
      });
      $(this).attr('src', './icon/icons8-share-rounded-24.png');
      $(this).css({
        opacity: "1"
      });
      countC++;

    } else {
      $(this).parent().css({
        background: "#FBD9D9"
      });
      $(this).attr('src', 'https://img.icons8.com/material-sharp/24/000000/share-rounded.png');
      countC = 0;
    };
  });

});