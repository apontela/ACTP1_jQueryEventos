$(function () {
    $("li:nth-child(4)").append('<ul><li><a href="#">link 4.a</a></li></ul>').before('<li><a href="#">link 3.5</a></li>');
    $("li:nth-child(7)").prepend("😎 ").after('🙂')
})