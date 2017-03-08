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
    $("#serveAnswer").empty();
    $("<h6>Comprehensive, efficient evaluation, expert level treatment, and detailed education in practical approaches to self-management and prevention of movement or pain related conditions.  Have you tried PT before and not seen results, felt understood, or learned how to properly prevent your symptoms from returning? Has your previous PT experience excluded hands-on treatment? If so, give us a chance to show you what physical therapy has to offer you when delivered at the highest standard.<h6>").hide().appendTo("#serveAnswer").fadeIn(800);
  });

  $("#serveQ2").click(function(){
    $("#serveAnswer").empty();
    $("<h6>Also known as TMJ, or temporomandibular disorders is a class of conditions that can cause severe impairments in a person’s ability to talk, chew, yawn, and breathe comfortably. Dr. Stuhr is particularly interested in treating this population of patients and has several years pursuing additional training in this area of practice to continue imporving her skill set over time. She has researched this area of physical therapy extensively and teaches the orthopedic content related to TMD to students in Physical Therapy School and both Pacific University and George Fox University. She teaches her peers and colleagues in the PT and dentistry fields as well.<h6>").hide().appendTo("#serveAnswer").fadeIn(800);
  });

  $("#serveQ3").click(function(){
    $("#serveAnswer").empty();
    $("<h6>Whether you’ve been in a recent or old car accident, have had headaches since you were a teenager, been diagnosed with migranes, have jaw pain, locking, or clicking for years, Physio PDX has the knowledge and skill required to help you find relief from these more persistent conditions. Migrane headaches are one of the most frequently misdiagnosed conditions in health care. There are a great variety of headache types, some of which are very responsive to physical therapy and self-treatment types over time. Come in hand let us help you get a grip on your headache and or neck pain. <h6>").hide().appendTo("#serveAnswer").fadeIn(800);
  });

  $("#serveQ4").click(function(){
    $("#serveAnswer").empty();
    $("<h6>If it’s been a while since you went to the gym and you want to get back at it, or if you have a specific goal in mind you need help reaching, and have no idea how to start, come in and talk! Maybe you’ve never even been to a gym, but feel like it’s time to start; let us help you get there. This program is about providing you with a bridge between wherever you are now, and where you want to end up. Depending on your needs and wants, through our sessions we’ll provide you with the education about your body, movement, and appropriate fitness dosing to allow you safely achieve your fitness goals without fear or risk of injury. Come in and let us help you find your way to feeling like the best version of yourself.<h6>").hide().appendTo("#serveAnswer").fadeIn(800);
  });

  $("#serveQ5").click(function(){
    $("#serveAnswer").empty();
    $("<h6>This service is here to provide you with an opportunity to get answers. Maybe you are already working with another PT, and just want some feedback about what you are doing with treatment. Or maybe you are working with another provider that just want a second set of hands and eyes on your condition. Come on in, bring your questions, and we’ll provide you with a thorough evaluation and feedback on what your next best steps may be.<h6>").hide().appendTo("#serveAnswer").fadeIn(800);
  });

  $("#serveQ6").click(function(){
    $("#serveAnswer").empty();
    $("<h6>Did you trip and twist your knee coming down the stairs? Bent over to lift something and can’t stand back up? Woke up on the wrong side of the bed, and can’t turn your neck to check your blind spot? <br><br>Big or small, new or old, if you are dealing with a condition you just want someone to check out and get some help with understanding or treating, come on in. We’ll evaluate you, teach you how to manage things yourself, and make some suggestions about what to do next, if additional treatment seems warranted. <br><br>Physical therapy is not always the best first course of treatment. However, as musculoskeletal experts and doctors of our field, physical therapist are able to quickly, and effectively spot when a presentation is not within our scope or practice to treat. So, don’t worry. If your condition needs additional evaluation, we will know, and be able to recommend what next steps to take and where to seek additional care.<h6>").hide().appendTo("#serveAnswer").fadeIn(800);
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
