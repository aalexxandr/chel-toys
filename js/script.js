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
});
