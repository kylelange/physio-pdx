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
    $("<h6>In short, NO, but your insurance may still reimburse your cost. The point of 'Cash Pay' clinic design is to remove the restrictions the insurance companies place on therapists by dictating how many visits, how long the visits are, and what services are deemed 'necessary'. Each of those aspects of care are all clinical decisions, which in an ideal setting, should be made by the therapist based on the patient's specific presentation. Each time you are seen at Physio PDX, you pay for services at that time, just like you would for acupuncture visits, or a massage for example. Then, as a courtesy to you, I directly submit what's called a 'Super Bill' to your insurance company.  Based on what kind of plan you have, and what amount you have met towards your deductible for the year, and what your co-pays are, the insurance company will reimburse you directly for what you have paid. That decision to reimburse you, and at what amount, is entirely up to your insurance company. Any claims appeals are to be handled directly by you and your insurance provider, which is no different than any other time you use your health insurance benefits. </h6>").hide().appendTo("#faqAnswer").fadeIn(800);
  });

  $("#faqQ2").click(function(){
    $("#faqAnswer").empty();
    $("<h6>Initial evaluations are the most expensive sessions, as they are the sessions where we learn about you, complete a thorough history and physical exam, and try initial treatment. Initial evaluation: $180/untimed (plan for an hour of face to face time, and 15 min of billing/paperwork). 60 min Follow-up visits: $150/hr. </h6>").hide().appendTo("#faqAnswer").fadeIn(800);
  });

  $("#faqQ3").click(function(){
    $("#faqAnswer").empty();
    $("<h6>As a physical therapist, I am an expert of diagnosis and treatment of musculoskeletal conditions, most of which impair your ability to move and function in your day to day life without limitations or discomfort. Our professional governing body, the American Physical Therapy Association (APTA) has a wonderful resource page linked below which provides good background information on common conditions any physical therapist can treat successfully. I personally excel at treating persistent pain and conditions that have been non-responsive to other conservative treatment approaches. I enjoy the challenge of working through a patient’s history and finding the pieces of the puzzle that eventually help me lead them into a better recovery. I specialize in conditions of the jaw, head, and neck. I have a specific interest in all aspects of Temporomandibular Disorders (TMD, previously known as TMJ), chronic headache conditions, whiplash, and concussion injuries. As a highly trained manual therapist, my advanced clinical reasoning and handling skills make successfully treating these complex conditions interesting and extremely rewarding.</h6>").hide().appendTo("#faqAnswer").fadeIn(800);
  });

  $("#faqQ4").click(function(){
    $("#faqAnswer").empty();
    $("<h6>Firstly, our bodies are constantly changing. Whether we want to admit it or not, our bodies change and shift with the natural course of time. Secondly, our bodies are incredible at sub-conscious self-preservation and adaptation to the mechanical stresses of their daily tasks and positions. Any subtle (or not so subtle) changes to our lifestyle have the potential to influence how our bodies adapt and behave, and this is a constant, every day type process. What was tried in your last PT episode of care may no longer be appropriate for you to try now based on how much time has past, and what factors may be playing into prolonging your painful state. Working with a therapist that understands how to evaluate the current version of you, and match you to a treatment course that is both appropriate for your present condition, and practical for fitting into your day-to-day life, while also projecting some general guidelines for how things should change for you over time, is absolutely crucial to your recovery. If you are willing to give PT another chance, I’d love the opportunity to be this therapist for you, and rekindle your faith in physical therapy.</h6>").hide().appendTo("#faqAnswer").fadeIn(800);
  });

  $("#faqQ5").click(function(){
    $("#faqAnswer").empty();
    $("<h6><strong>What should I wear to treatment?</em><br><br>For the ease of evaluating how your body moves naturally, please bring or wear work out type clothing in which you feel comfortable. Occasionally, exposure of the region we are focusing on may be necessary. This will always take place only with your permission, and in the privacy of a treatment room. <br><br><em>Will I be sore after treatment?</strong><br><br>It depends. Everyone is different, and every condition presents in a unique way within the context of the individual. That said, I typically observe most people have some level of relief after our initial session together, followed by a potential increase in symptoms a few hours after the session.  Again, I stress that this is very patient dependent, and does not occur at all for some individuals. </h6>").hide().appendTo("#faqAnswer").fadeIn(800);
  });

  $("#faqQ6").click(function(){
    $("#faqAnswer").empty();
    $("<h6>The number of visits, length of each visit and how frequently they happen is always negotiable, based on your treatment needs, time constraints, and financial preference. On average, follow-up session are an hour long, and most conditions are well managed by 5-8 visits. My goal is to see you improve and become capable of maintaining your rehabilitation gains independently. If that isn’t happening, I need to reconsider whether PT is the best course of action in treating your condition, or I need to re-evaluate your condition and change our treatment approach to improve outcomes. I will not advocate for you to continue seeing me if you are not seeing or feeling significant objective progress in 3-4 sessions, max.</h6>").hide().appendTo("#faqAnswer").fadeIn(800);
  });

});
