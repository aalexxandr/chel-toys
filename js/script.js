$( document ).ready(function() {
  $('.questions .questions_item').on('click', function(){
    var answer = $(this).children('.questions_item_answer');
    if ($(this).hasClass('active_answer')) {
      $(this).removeClass('active_answer');
    } else {
      $(this).addClass('active_answer');
    }
    answer.toggle(200);
  });
  $('.phone_menu_button').on('click', function(){
    $(this).toggleClass('phone_menu_button_active');
    $('.header_top_panel_menu_toggle').toggle(200);
    $('.phone_main_menu_toggle').toggle(200);
  });
});
