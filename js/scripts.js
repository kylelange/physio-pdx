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
    $("#output").empty();
    var inputName = $("#name-input").val();
    var inputEmail = $("#email-input").val();
    var inputComment = $("#comment-input").val();
    var newComment = new Comment(inputName, inputEmail, inputComment);
    databases.push(newComment);
    $("#output").append("<h2> Thanks "+newComment.name+", we will be in touch soon.</h2>")
    $("#output").slideDown(1300);
    $("#output").slideUp(1300);
  });

// Carousel activation and indicators
  $("#myCarousel").carousel();
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
// Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });

//faq DOM manip. for answers
  $("#faqQ1").click(function(){
    $("#faqAnswer").empty();
    $("<p>Test Answer 1</p>").hide().appendTo("#faqAnswer").fadeIn(1000);
  });

  $("#faqQ2").click(function(){
    $("#faqAnswer").empty();
    $("<p>Test Answer 2</p>").hide().appendTo("#faqAnswer").fadeIn(1000);
  });

  $("#faqQ3").click(function(){
    $("#faqAnswer").empty();
    $("<p>Test Answer 3</p>").hide().appendTo("#faqAnswer").fadeIn(1000);
  });

  $("#faqQ4").click(function(){
    $("#faqAnswer").empty();
    $("<p>Test Answer 4</p>").hide().appendTo("#faqAnswer").fadeIn(1000);
  });

  $("#faqQ5").click(function(){
    $("#faqAnswer").empty();
    $("<p>Test Answer 5</p>").hide().appendTo("#faqAnswer").fadeIn(1000);
  });

  $("#faqQ6").click(function(){
    $("#faqAnswer").empty();
    $("<p>Test Answer 6</p>").hide().appendTo("#faqAnswer").fadeIn(1000);
  });

});
