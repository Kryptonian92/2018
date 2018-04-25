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

//scrollable gallery
     $(document).ready(function(){
       $('.carousel').carousel();
     });

//Resume Discovery
     $(document).ready(function(){
       $('.tap-target').tapTarget();
     });

//Resume Modal
     $(document).ready(function(){
       $('.modal').modal();
     });

     $(document).ready(function(){
       $('#download-button').onclick
     })

  }); // end of document ready
})(jQuery); // end of jQuery name space
