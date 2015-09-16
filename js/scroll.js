$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#white-nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-custom').css('background-color', '#ffffff');
       } else {
          $('.navbar-custom').css('background-color', 'transparent');
       }
   });
});