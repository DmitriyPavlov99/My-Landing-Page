
$(function () {
  setTimeout(startAnimMain,0)
});
function startAnimMain() {
    
  $('.main_photo-settings').hide().fadeTo(2000,1)
    if($(window).width() > 750) {
      $('.main_name, .main_text, .main_buttons, .main_sponsored').hide().slideDown(2000).fadeTo(2000,1);
    } else if ($(window).width() < 750) {
      $('.main_name, .main_buttons, .main_sponsored').hide().slideDown(2000).fadeTo(2000,1);
    }
}