// ハンバーガーメニュー
$(function () {
  $('.js-l-header__burger-btn').click(function () {
    $(this).toggleClass('active')

    if ($(this).hasClass('active')) {
      $('.js-l-header__burger-menu').addClass('active')
    } else {
      $('.js-l-header__burger-menu').removeClass('active')
    }
  })
})
// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように
$('#menu a[href]').on('click', function (event) {
  $('.js-l-header__burger-btn').trigger('click')
})
// ×ボタン押したらハンバーガーメニューが閉じるように
$('.js-l-header__burger-menu').on('click', function (event) {
  $('.js-l-header__burger-btn').trigger('click')
})

// ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});
