$(function() {
    // Declare variable nav as nav element
    var nav = $('#nav');
	//Sets default Y position of the navbar, where it sits before page is moved.
    var navHomeY = nav.offset().top;
	//Fixed status default to false on page load
    var isFixed = false;
	/*Uses jquery to grab elements of HTML.
	Grabs the window object as well as the element with the id "nav"*/
    var $w = $(window);
	//Declare scroll function
    $w.scroll(function() {
		//Uses jquery scrollTop to declare current vertical position of scrollbar
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
		// If navbar is not fixed but should be fixed to top, then position set to fix
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
		//If navbar is fixed but should not be fixed, then position set to static
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});
