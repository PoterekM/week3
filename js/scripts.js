
$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();
    var number = $("userNumber").val()


    for (var index = 1; index <= number; index+1) {
      if (index % 15 === 0) {
        $("userList").append("<li>"+"Ping-Pong!"+"</li>");}
      else if (index % 3 === 0) {
        $("userList").append("<li>"+"Ping!"+"</li>");}
      else if (index % 5 === 0) {
        $("userList").append("<li>"+"Pong!"+"</li>");}
      else{
        $("userList").append("<li>"+ index +"</li>");}
    };


  });
});
