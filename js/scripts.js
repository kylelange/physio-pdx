// Business Logic
var databases = [];
function Comment (name, email, comment){
  this.name = name;
  this.email = email;
  this.comment = comment;
}

// User Interface Logic
$(document).ready(function(){
  $("#form-comment").submit(function(){
    event.preventDefault();
    $("#output").hide();
    var inputName = $("#name-input").val();
    var inputEmail = $("#email-input").val();
    var inputComment = $("#comment-input").val();
    var newComment = new Comment(inputName, inputEmail, inputComment);
    databases.push(newComment);

    $("#output").append("<h2> Thanks "+newComment.name+", we will be in touch soon.</h2>")
    $("#output").slideDown(1000);
    $("#output").slideUp(1500);

  });

// lookup answer on j'ena's files
  $("#myCarousel").click(function(){

  });
});
