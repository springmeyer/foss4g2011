$(function() {
  var converter = new Showdown.converter();
  $("#user_input").keyup(function(){
    var txt = $("#user_input").val();
    var html = converter.makeHtml(txt);
    $("#result").html(html)
    $("#html_result").val(html.replace(/>/g, ">\n").replace(/</g, "\n<").replace(/\n{2,}/g, "\n\n"));
  });

    var txt = $("#user_input").val();
    var html = converter.makeHtml(txt);
    $("#result").html(html)
    $("#html_result").val(html.replace(/>/g, ">\n").replace(/</g, "\n<").replace(/\n{2,}/g, "\n\n"));
});
