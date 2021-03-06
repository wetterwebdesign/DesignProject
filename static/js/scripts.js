
// VALIDATE FORM

$(document).ready(function() {
  // from http://www.formvalidator.net/#reg-form
  $.validate({
    modules : 'location, date, security, file',
    onModulesLoaded : function() {
      $('#country').suggestCountry();
    }
  });

  // Restrict presentation length
  $('#presentation').restrictLength( $('#pres-max-length') );

  // Hide task on click
  $('.task').on('click', function (e) {
    $(this).toggleClass("completed");
  });

  // TOGGLE CLASS

  var removeClass = true;

  $("#userbarmenu").click(function () {
      $(this).toggleClass("openusermenu");
      removeClass = false;
  });

  $("html").click(function () {
    if (removeClass) {
      $("#userbarmenu").removeClass("openusermenu");
    }
      removeClass = true;
  });

  // OVERLAY MENU
  $( "#overlay-menu" ).click(function() {
    $( ".add-menu" ).addClass
    ('active');
    $( "body" ).addClass
    ('noscroll');
  });

  $( "#desktop-overlay-menu" ).click(function() {
    $( ".add-menu" ).addClass
    ('active');
    $( "body" ).addClass
    ('noscroll');
  });
  
  $( ".overlay-close" ).click(function() {
    $( ".add-menu" ).removeClass
    ( 'active' ); 
    $( "body" ).removeClass
    ( 'noscroll' ); 
  });

  // DATEPICKER
  $( "#datepicker" ).datepicker();

  $('#datepicker').on('focus', function(e) {
    e.preventDefault(); e.stopPropagation();
    window.scrollTo(0,0); //the second 0 marks the Y scroll pos. Setting this to i.e. 100 will push the screen up by 100px. 
    $( "#ui-datepicker-div" ).addClass
    ('datepickeradjust');
  });

  $('#datepicker').on('focusout', function(e) {
    $( "#ui-datepicker-div" ).removeClass
    ('datepickeradjust');
  });

});
// FULLY REFERENCE JQUERY AFTER THIS

// SHOW PASSWORD
function toggler(e) {
  if( e.innerHTML == 'Show password' ) {
    e.innerHTML = 'Hide password'
    document.getElementById('passwordField').type="text";
  } else {
    e.innerHTML = 'Show password'
    document.getElementById('passwordField').type="password";
  }
}

// GROW TEXTAREA
function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (25+o.scrollHeight)+"px";
}

