
$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();
     var number = parseInt($("#userNumber").val());

     var userArray = [];
     



    forEach(var index = 1; index <= number; index+1) {
      if (index % 15 === 0) {
        userArray.push$("number").append("<li>"+"Ping-Pong!"+"</li>");}
      else if (index % 3 === 0) {
        userArray.push.$("number").append("<li>"+"Ping!"+"</li>");}
      else if (index % 5 === 0) {
        userArray.push.$("number").append("<li>"+"Pong!"+"</li>");}
      else{
        userArray.push.$("number").append("<li>"+ index +"</li>");}
        return userArray.push(index);
//
// return userArray;
    };

 $("#output").text("userArray");

  });
});
