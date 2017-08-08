$(document).ready(function(){

  // Функция вызова Toggle
  function openToggle() {
    $(".page-header__wrapper").toggleClass("page-header__wrapper--active");
  }
  $('.btn-toggle').on('click', openToggle);

// Функция вызова меню успешной отправки и ошибки
  function pushForm(e) {
    e.preventDefault();
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var phone = $("input[name='phone']").val()
    var valid = re.test(phone);
    if (valid) {
      $('.overlay-success').show();
    } else {
      $('.overlay-error').show();
    }
    return valid;
  }
  $('.btn-push').on('click', pushForm);

// Закрыть предупрежждение об ошибки
$('.btn-error').click(function(){
  $('.overlay-error').hide();
});

// Закрыть предупрежждение об успешной отправки
$('.btn-success').click(function(){
  $('.overlay-success').hide();
});

});
