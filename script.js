$(document).ready(function(){
  var tag = $('.person__tag'),
      backgrd = $('.modal__background'),
      navBackgrd = $('.nav__background')
      modalForm = $('.modal__order'),
      modalSuccess = $('.modal__success'),
      window = $('.window'),
      button = $('.button'),
      burger = $('.burger'),
      list = $('.nav__burger-list'),
      link = $('.nav__link'),
      body = $('body');

      tag.removeClass('animation');

      $('.nav__link, .bottom__link').click(function(e){
        e.preventDefault();
        
        let href = $(this).attr('href');
        let offset = $(href).offset().top;
        $('body, html').animate({
          scrollTop: offset,
        }, 500);
    });
    
      function scrollFormOn(){
        body.addClass('locker');
        backgrd.addClass('background_show');
        modalForm 
                .css('display', 'block')
                .animate({opacity: 1, top: '50%'}, 280);
    };

      function scrollFormOff(){
        body.removeClass('locker');
        backgrd.removeClass('background_show');
          setTimeout( function(){
            modalForm.css('display', 'none')
            modalSuccess.css('display', 'none')
            }, 300);
            modalForm.animate({opacity: 0, top: '40%'}, 280);
            modalSuccess.animate({opacity: 0, top: '40%'}, 280);
            
    };

      button.on('click', scrollFormOn);
      backgrd.on('click', scrollFormOff);
      burger.on('click', function(event){
        event.preventDefault();

        list.slideDown(400); 
        navBackgrd.addClass('background_show');
    });
      
      list.mouseleave( function(event){
        event.preventDefault();

        list.css('display', 'none'); 
    });

      link.on('click', function(event){
        event.preventDefault();

        list.slideUp(400);
        navBackgrd.removeClass('background_show');
    });

      navBackgrd.on('click', function(event){
        event.preventDefault();

        list.slideUp(400);
        navBackgrd.removeClass('background_show');
    });

});



  

