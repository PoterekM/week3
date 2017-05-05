
$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();
     var number = $("userNumber").val();

     var userArray = [];
     userArray = userArray.push(index);

    for (var index = 1; index <= number; index+1) {
      if (index % 15 === 0) {
        $("userArray").append("<li>"+"Ping-Pong!"+"</li>");}
      else if (index % 3 === 0) {
        $("userArray").append("<li>"+"Ping!"+"</li>");}
      else if (index % 5 === 0) {
        $("userArray").append("<li>"+"Pong!"+"</li>");}
      else{
        $("userArray").append("<li>"+ index +"</li>");}

        userArray = userArray.push(index)
    };

 $("#userList").show();

  });
});
