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
    $("<h6>In short, NO, but your insurance may still reimburse your cost. The point of 'Cash Pay' clinic design is to remove the restrictions the insurance companies place on therapists by dictating how many visits, how long the visits are, and what services are deemed 'necessary'. Each of those aspects of care are all clinical decisions, which in an ideal setting, should be made by the therapist based on the patient's specific presentation. Each time you are seen at Physio PDX, you pay for services at that time, just like you would for acupuncture visits, or a massage for example. Then, as a courtesy to you, I directly submit what's called a 'Super Bill' to your insurance company.  Based on what kind of plan you have, the insurance company may reimburse you directly for what you have paid. That decision to reimburse you, and at what amount, is entirely up to your insurance company. Any claims appeals are to be handled directly by you and your insurance provider. </h6>").hide().appendTo("#faqAnswer").fadeIn(800);
  });

  $("#faqQ2").click(function(){
    $("#faqAnswer").empty();
    $("<h6>Initial evaluations are the most expensive sessions, as they are the sessions where we learn about you, complete a thorough history and physical exam, and try initial treatment. Initial evaluation: $180/untimed (plan for an hour of face to face time, and 15 min of billing/paperwork). 60 min Follow-up visits: $150/hr. </h6>").hide().appendTo("#faqAnswer").fadeIn(800);
  });

  $("#faqQ3").click(function(){
    $("#faqAnswer").empty();
    $("<h6>As a physical therapist, I am an expert of diagnosis and treatment of musculoskeletal conditions, most of which impair your ability to move and function in your day to day life without limitations or discomfort. Our professional governing body, the <a href='https://www.apta.org/'>American Physical Therapy Association (APTA)</a> has a wonderful resource page linked below which provides good background information on common conditions any physical therapist can treat successfully. I have a specific interest in all aspects of Temporomandibular Disorders (TMD, previously known as TMJ), chronic headache conditions, whiplash, and concussion injuries. I specialize in conditions of the jaw, head, and neck. I personally excel at treating persistent pain and conditions that have been non-responsive to other conservative treatment approaches. As a highly trained manual therapist, my advanced clinical reasoning and handling skills make successfully treating these complex conditions interesting and extremely rewarding.</h6>").hide().appendTo("#faqAnswer").fadeIn(800);
  });

  $("#faqQ4").click(function(){
    $("#faqAnswer").empty();
    $("<h6>Whether we want to admit it or not, our bodies change and shift with the natural course of time. Secondly, our bodies are incredible at sub-conscious self-preservation and adaptation to the mechanical stresses of their daily tasks and positions. Any subtle (or not so subtle) changes to our lifestyle have the potential to influence how our bodies adapt and behave. What was tried in your last PT episode of care may no longer be appropriate for you to try now based what factors may be playing into prolonging your painful state. Working with a therapist that understands how to evaluate the current version of you, and match you to a treatment course that is both appropriate for your present condition, and practical for fitting into your day-to-day life, while also projecting some general guidelines for how things should change for you over time, is absolutely crucial to your recovery. If you are willing to give PT another chance, I’d love the opportunity to be this therapist for you, and rekindle your faith in physical therapy.</h6>").hide().appendTo("#faqAnswer").fadeIn(800);
  });

  $("#faqQ5").click(function(){
    $("#faqAnswer").empty();
    $("<h6><strong>What should I wear to treatment?</em><br><br>For the ease of evaluating how your body moves naturally, please bring or wear work out type clothing in which you feel comfortable. Occasionally, exposure of the region we are focusing on may be necessary. This will always take place only with your permission, and in the privacy of a treatment room. <br><br><em>Will I be sore after treatment?</strong><br><br>It depends. Everyone is different, and every condition presents in a unique way within the context of the individual. That said, I typically observe most people have some level of relief after our initial session together, followed by a potential increase in symptoms a few hours after the session.  Again, I stress that this is very patient dependent, and does not occur at all for some individuals. </h6>").hide().appendTo("#faqAnswer").fadeIn(800);
  });

  $("#faqQ6").click(function(){
    $("#faqAnswer").empty();
    $("<h6>The number of visits, length of each visit and how frequently they happen is always negotiable, based on your treatment needs, time constraints, and financial preference. On average, follow-up session are an hour long, and most conditions are well managed by 5-8 visits. My goal is to see you improve and become capable of maintaining your rehabilitation gains independently. If that isn’t happening, I need to reconsider whether PT is the best course of action in treating your condition, or I need to re-evaluate your condition and change our treatment approach to improve outcomes. I will not advocate for you to continue seeing me if you are not seeing or feeling significant objective progress in 3-4 sessions, max.</h6>").hide().appendTo("#faqAnswer").fadeIn(800);
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
    $("<p>She endeavors to improve other healthcare and fitness based clinician’s understanding of the field of Physical Therapy. She often spends time building relationships across disciplines that allow her to educate providers about physical therapy’s role in movement and general wellness of their patients. <br><br>Dr. Stuhr recently served as the Chair of the Continuing Education Committee for the <a href='http://www.opta.org/'> Oregon Physical Therapy Association</a>, the state branch of the national organization, the American Physical Therapy Association.</p>").hide().appendTo("#triAnswer").fadeIn(800);
  });

  //service DOM manip. for answers
  $("#serveQ1").click(function(){
    $("#serveAnswer").empty();
    $("<h6>Comprehensive, efficient evaluation, expert level treatment, and detailed education in practical approaches to self-management and prevention of movement or pain related conditions.  Have you tried PT before and not seen results, felt understood, or learned how to properly prevent your symptoms from returning? If so, give us a chance to show you what physical therapy has to offer you when delivered at the highest standard.<h6>").hide().appendTo("#serveAnswer").fadeIn(800);
  });

  $("#serveQ2").click(function(){
    $("#serveAnswer").empty();
    $("<h6>Whether you’ve been in a recent or old car accident, have had headaches since you were a teenager, or have jaw pain, locking or clicking for years, Physio PDX has the knowledge and skill required to help you find relief from these more persistent conditions.<h6>").hide().appendTo("#serveAnswer").fadeIn(800);
  });

  $("#serveQ3").click(function(){
    $("#serveAnswer").empty();
    $("<h6>Also known as TMJ, or temporomandibular disorders is a class of conditions that can cause severe impairments in a person’s ability to talk, chew, yawn, and breath comfortably. Dr. Stuhr is particularly interested in treating this population of patients and has received additional training in this area of practice through her fellowship program. Additionally, she teaches the orthopedic content related to TMD to students in Physical Therapy School and both Pacific University and George Fox University.<h6>").hide().appendTo("#serveAnswer").fadeIn(800);
  });

  $("#serveQ4").click(function(){
    $("#serveAnswer").empty();
    $("<h6>If it’s been a while since you went to the gym and want to get back at it, or if you have a specific goal in mind you need help reaching, and have no idea how to start, come in and talk! Maybe you’ve never even been to a gym, but feel like it’s time to start; let us help you get there. This program is about providing you with a bridge between wherever you are now, and where you want to end up. Depending on your needs and wants, through our sessions we’ll provide you with the education about your body, movement, and appropriate fitness dosing to allow you safely achieve your fitness goals without fear or risk of injury. Come in let us help you find your way to feeling like the best version of yourself.<h6>").hide().appendTo("#serveAnswer").fadeIn(800);
  });

  $("#serveQ5").click(function(){
    $("#serveAnswer").empty();
    $("<h6>This service is here to provide you with an opportunity to get answers. Maybe you are already working with another PT, and just want some feedback about what you are doing with treatment. Or maybe you are working with another provider that just wants a second set of hands and eyes on your condition. Come on in, bring your questions, and we’ll provide you with a thorough evaluation and feedback on what your next best steps may be.<h6>").hide().appendTo("#serveAnswer").fadeIn(800);
  });

  $("#serveQ6").click(function(){
    $("#serveAnswer").empty();
    $("<h6>Did you trip and twist your knee coming down the stairs? Bent over to lift something and can’t stand back up? Woke up on the wrong side of the bed, and can’t turn your neck to check your blind spot? Big or small, new or old, if you are dealing with a condition you just want someone to check out and get some help with understanding or treating, come on in. We’ll evaluate you, teach you how to manage things yourself, and make some suggestions about what to do next, if additional treatment seems warranted. Physical therapy is not always the best first course of treatment. However, as musculoskeletal experts and doctors of our field, physical therapist are able to quickly, and effectively spot when a presentation is not within our scope or practice to treat. So, don’t worry, if your condition needs additional evaluation, we will know, and be able to recommend what next steps to take and where to seek additional care.<h6>").hide().appendTo("#serveAnswer").fadeIn(800);
  });

  //Form link "answers"
  $("#form1").click(function(){
    $("#formAnswer").empty();
    $("<h6><a href='#forms'>FORM PDF download link HERE</a><h6>").hide().appendTo("#formAnswer").fadeIn(800);
  });

  $("#form2").click(function(){
    $("#formAnswer").empty();
    $("<h6><a href='#forms'>FORM PDF download link HERE</a><h6>").hide().appendTo("#formAnswer").fadeIn(800);
  });

  $("#form3").click(function(){
    $("#formAnswer").empty();
    $("<h6><a href='#forms'>FORM PDF download link HERE</a><h6>").hide().appendTo("#formAnswer").fadeIn(800);
  });

  $("#form4").click(function(){
    $("#formAnswer").empty();
    $("<h6>TEXT HERE<h6>").hide().appendTo("#formAnswer").fadeIn(800);
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
