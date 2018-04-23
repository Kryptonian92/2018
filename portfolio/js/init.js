(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

// Projects section slide show
    $(document).ready(function(){
       $('.slider').slider();
     });

// Expandable images
     $(document).ready(function(){
       $('.materialboxed').materialbox();
     });

  }); // end of document ready
})(jQuery); // end of jQuery name space
