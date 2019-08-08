$(document).ready(function() {
  
  var scrollLink = $('.nav-link');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 900 );
  });
  

})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// code for smooth scroll to top
$(document).ready(function(){
    $('body,html').animate({
        scrollTop: 0
    }, 800);
$('#myBtn').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});
});  

