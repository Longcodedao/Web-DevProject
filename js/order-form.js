// -------------------- Working with NAVBAR -------------------------------
$(document).ready(function () {
  // var NavBar = document.getElementById("topnav");
  // var logo = document.getElementById("logo");
  // var navigate_options = document.getElementById("nav-option");
  // var sticky = NavBar.offsetTop;
  // if ($(window).width() > 960) {
  //     $(window).scroll(function () {
  //     if ($(window).scrollTop() > sticky + 100) {
  //         NavBar.classList.add("sticky");
  //         logo.classList.add("white-background");
  //         navigate_options.classList.add("white-background");
  //     } else {
  //     NavBar.classList.remove("sticky");
  //     logo.classList.remove("white-background");
  //     navigate_options.classList.remove("white-background");
  //     }
  // });
  // }
  // $listNav = $("li.nav-opt");
  // $("#hamburger-icon").on("click", function () {
  //     var scrollPosition = $(window).scrollTop();
  //     localStorage.setItem("scrollPosition", scrollPosition);
  //     $listNav.slideToggle(200);
  //     var storedScrollPosition = localStorage.getItem("scrollPosition");
  //     $(window).scrollTop(storedScrollPosition);
  //     console.log($(window).scrollTop());
  // });
  // if ($("window").width() > 600) {
  //     $listNav.show();
  // }
});

// --------------- JQUERY ANIMATE top to bottom scroll ------------------------------
$(document).ready(function () {
  // Scroll to bottom button
  $("#scrollToBottomBtn").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");

    return false;
  });

  // Scroll to top button
  $("#scrollToTopBtn").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $("html").animate({ scrollTop: 0 }, "slow"); // Added this line
    return false;
  });

  // Show/hide the buttons based on scroll position
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var windowHeight = $(this).height();
    var documentHeight = $(document).height();

    if (scrollTop > windowHeight / 2) {
      $("#scrollToTopBtn").addClass("active");
    } else {
      $("#scrollToTopBtn").removeClass("active");
    }

    if (scrollTop + windowHeight < documentHeight - windowHeight / 2) {
      $("#scrollToBottomBtn").addClass("active");
    } else {
      $("#scrollToBottomBtn").removeClass("active");
    }
  });

  // Check initial scroll position to show/hide the buttons
  $(window).trigger("scroll");

  $('#name').on('input', function() {
    validateName();
  });

  $('#email').on('input', function() {
    validateEmail();
  })

  $('#address').on('input', function(){
    validateAddress();
  })

  $('#phone').on('input', function() {
    validatePhone();
  })

});



function validateName(){
  var name = $('#name').val();

  if (name === ''){
    $('#name-error').html("Please enter your name");
    return false;
  } else {
    $('#name-error').html("");
    return true;
  }
}

function validateEmail(){
  var email = $('#email').val();
  console.log(email.indexOf('@'))

  // if (email === '' ){
  //   $('#email-error').html("Please enter your email");
  //   return false;
  // } else if (email.indexOf('@') === -1){
  //   $('#email-error').html("Please enter a valid email address");
  //   return false;
  // } else {
  //   $('#email-error').html("");
  //   return true;
  // }

  if (email === "") {
    $('#email-error').html("Please enter your email");
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    $('#email-error').html("Please enter a valid email address (for example: imSoStupidIcantTypeMyEmail@gmail.com).");
    return false;
  } else {
    $('#email-error').html("");
    return true;
  }
}

function validateAddress(){
  var address = $('#address').val();
  if (address === ''){
    $('#address-error').html("Please enter your address");
    return false;
  }else{
    $('#address-error').html("");
    return true;
  }
}

function validatePhone(){
  var phone = $('#phone').val();
  if (phone === "") {
    $('#phone-error').html("Please enter your phone number.");
    return false;
  } else if (!/^\d{10,11}$/.test(phone)) {
    $('#phone-error').html("Please enter a valid 10 or 11-digit phone number.");
    return false;
  } else{ 
    $('#phone-error').html("");
    return true;
  }
}