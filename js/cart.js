$(function () {
  //加減按鈕

  // 抓值
  var currentN = parseInt($('#number').val());
  // 清空

  // $('.add').click(function (e) {
  //   e.preventDefault();


  // 加
  $('.max').click(function () {
    if (currentN < 20) {
      $('#number').val(currentN += 1);

    } else {
      $('#number').val(20);

    }
    return false;
  });

  // 減

  $('.min').click(function () {
    if (currentN > 0) {
      $('#number').val(currentN -= 1);
    } else {
      $('#number').val(0);
    }
    return false;


  });

  // });

  // 換圖
  $('.other_img li img').click(function () {
    var N = $(this).attr('id').substr(3);
    $('#mainImg').attr('src', './img/product' + N + '.png');
  });

  $('#mainImg').click(function () {
    $(this).attr('src', './img/product1.png');
  });


  //放大鏡


  $(".zoom").each(function () {
    var $this = $(this);
    $this.mlens({
      imgSrc: $this.attr("data-big"),
      lensShape: "circle", // 放大鏡形狀 circle(圓形), square(方形)
      lensSize: ["60%", "27.6%"], // 放大鏡長寬 (可使用 px 或百分比 %)
      borderSize: 2, // 放大鏡邊框寬度 (px)
      borderColor: "#FFF1F1", // 放大鏡邊框顏色色碼
      borderRadius: 0, // 如果放大鏡為方形 設定圓角程度
      overlayAdapt: true,
      zoomLevel: 1,
      responsive: true,// 圖片是否自適應
      left: 50
    });
  }).parent().css("position", "relative");








});