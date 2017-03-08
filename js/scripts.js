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
    $("#faqA1").fadeToggle(600, "swing");
  });

  //toggle example w/out jquery
  // var fadeMe = $(".faqA2");
  // $("#faqQ2").on("click", function(){
	//    fade(fadeMe[0]);
  // });
  //
  //
  // var fade = function(e) {
	// (e.classList.contains("fadeOut"))? e.classList.remove("fadeOut") : e.classList.add("fadeOut");
  // }

  $("#faqQ2").click(function(){
    $("#faqA2").fadeToggle(600, "swing");
  });

  $("#faqQ3").click(function(){
    $("#faqA3").fadeToggle(600, "swing");
  });

  $("#faqQ4").click(function(){
    $("#faqA4").fadeToggle(600, "swing");
  });

  $("#faqQ5").click(function(){
    $("#faqA5").fadeToggle(600, "swing");
  });

  $("#faqQ6").click(function(){
    $("#faqA6").fadeToggle(600, "swing");
  });

  //Bio answers
  $("#tri-clinical").click(function(){
    $("#triAnswer").empty();
    $("<p>Sarah H. Stuhr, PT, DPT, FAAOMPT, is a graduate of University of Colorado Denver Doctor of Physical Therapy program.  She then gained extensive training in orthopedic manual physical therapy at the University of Illinois in Chicago (UIC.) This training allowed her to become a Fellow of the American Academy of Orthopedic Manual Physical Therapy. <br><br>Dr. Stuhr began practicing in 2009. In addition to general orthopedic conditions, her practice, Physio PDX, specializes in the care of patients with complex musculoskeletal conditions, persistent pain, and patients with temporomandibular dysfunction (TMD), traditionally know as 'TMJ'.</p>").hide().appendTo("#triAnswer").fadeIn(800);
  });

  $("#tri-education").click(function(){
    $("#triAnswer").empty();
    $("<p>Dr. Stuhr serves as Adjunct Faculty at Pacific University, assisting in both Orthopedics and Anatomy classes. She also serves as a clinical instructor for physical therapy students training in the field. As a patient at Physio PDX, you may encounter a student being trained by Dr. Stuhr as part of your care. However, Dr. Stuhr will always be the primary provider.<br><br>Dr. Stuhr has been published in the Journal of Manual and Manipulative Therapy (JMMT), and reviews grant proposals as a Research Committee member for AAOMPT. She also lectures on a variety of topics, though primarily highlighting assessment and treatment of temporomandibular dysfunction (TMD.)</p>").hide().appendTo("#triAnswer").fadeIn(800);
  });

  $("#tri-advocate").click(function(){
    $("#triAnswer").empty();
    $("<p>She endeavors to improve other healthcare and fitness based clinician’s understanding of the field of Physical Therapy. She often spends time building relationships across disciplines that allow her to educate providers about physical therapy’s role in movement and general wellness of their patients. <br><br>Dr. Stuhr recently served as the Chair of the Continuing Education Committee for the <a href='http://www.opta.org/' target='_blank'> Oregon Physical Therapy Association</a>, the state branch of the national organization, the American Physical Therapy Association.</p>").hide().appendTo("#triAnswer").fadeIn(800);
  });

  //service DOM manip. for answers
  $("#serveQ1").click(function(){
    $("#serveA1").fadeToggle(600, "swing");
  });

  $("#serveQ2").click(function(){
    $("#serveA2").fadeToggle(600, "swing");
  });

  $("#serveQ3").click(function(){
    $("#serveA3").fadeToggle(600, "swing");
  });

  $("#serveQ4").click(function(){
    $("#serveA4").fadeToggle(600, "swing");
  });

  $("#serveQ5").click(function(){
    $("#serveA5").fadeToggle(600, "swing");
  });

  $("#serveQ6").click(function(){
    $("#serveA6").fadeToggle(600, "swing");
  });

  //Form link "answers"
  $("#form1").click(function(){
    $("#formPDF1").fadeToggle(600, "swing");
  });

  $("#form2").click(function(){
    $("#formPDF2").fadeToggle(600, "swing");
  });

  $("#form3").click(function(){
    $("#formPDF3").fadeToggle(600, "swing");
  });

  $("#form4").click(function(){
    $(".tile2").removeClass("form4-MB")
    $("#formPDF4").fadeToggle(600, "swing");
  });

});

//smooth scroll function
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//iOS 5/6 mobile fix attempt

$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) {
    e.stopPropagation();
});

$('body')
.on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); })
.on('touchstart.dropdown', '.dropdown-submenu', function (e) { e.preventDefault(); });

jQuery(document).ready( function (){
    jQuery('.dropdown-toggle')
        .on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); })
        .on('touchstart.dropdown', '.dropdown-submenu', function (e) { e.preventDefault(); })
    })
