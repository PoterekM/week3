
$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();
     var number = parseInt($("#userNumber").val());



// function {
     var userArray = [];

    for (var index = 1; index <= userNumber; index+1) {
      if (index % 15 === 0) {
        $("number").append("<li>"+"Ping-Pong!"+"</li>");}
      else if (index % 3 === 0) {
        $("number").append("<li>"+"Ping!"+"</li>");}
      else if (index % 5 === 0) {
        $("number").append("<li>"+"Pong!"+"</li>");}
      else{
        $("number").append("<li>"+ index +"</li>");}
        return userArray.push(index);
//
// return userArray;
    };

 $("#output").number("userArray");

  });
});
