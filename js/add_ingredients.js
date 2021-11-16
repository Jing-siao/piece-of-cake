$(function () {
  //加食材
  $('.ingredient .add_ingredients button').click(function () {
    $('.ingredient .add_ingredients').before('<label for="ingredients"><input type="text" name="ingredients" id="ingredients"><img src="https://img.icons8.com/windows/26/000000/trash.png" /></label>'
    );
    //刪食材
    $('.ingredients label img').click(function () {
      $(this).parent().remove();
    });

  });

  //加食材
  $('.crust .add_ingredients button').click(function () {
    $('.crust .add_ingredients').before('<label for="ingredients"><input type="text" name="ingredients" id="ingredients"><img src="https://img.icons8.com/windows/26/000000/trash.png" /></label>'
    );
    //刪食材
    $('.ingredients label img').click(function () {
      $(this).parent().remove();
    });

  });

  //全域刪食材
  $('.ingredients label img').click(function () {
    $(this).parent().remove();
  });






  //做法新增與刪除
  var i = $('.photo_step p').length
  //新增作法
  $('#addSteps').click(function () {
    var i = $('.photo_step p').length
    $('.add_steps').before('<div class="photo_step"><span><p>5</p><img src="https://img.icons8.com/windows/26/000000/trash.png"></span><div class="step"><div class="photo"><div class="upload_img"><label for="image" class="image">&oplus; image upload<input type="file" name="image" id="image"></label></div></div><textarea name="step1" id="step1" cols="111" rows="14"></textarea></div></div>');
    //刪作法

    $('.photo_step span img').click(function () {
      $(this).parent().parent().remove();
      var N = $('.photo_step span');
      for (j = 0; j < i; j++) {
        N.find("p:first").each(function (j) {
          $(this).text(j + 1);
        });
      }

    });
    $('.photo_step p').last().text(i + 1);
  });
  //全域刪作法
  $('.photo_step span img').click(function () {
    $(this).parent().parent().remove();
    var N = $('.photo_step span');
    for (j = 0; j < i; j++) {
      N.find("p:first").each(function (j) {
        $(this).text(j + 1);
      });
    }

  });

});