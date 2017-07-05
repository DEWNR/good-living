/**
 * Apply progressive enhancements as applicable.
 *
 * Requires prepare.js and jQuery
 *
 * Must be concatenated and minified before use in a production environment.
 **/
 
// @codekit-prepend "../../../includes/jquery/jquery.mobile.custom.1409290931.js";





/* = Prepare the page = */

/* == Navigation == */

// Add navigation toggles

$("[data-js=primary-navigation-toggle]").on("click", function() { primaryNavigation.toggle(); return false; });

$("[data-js=primary-navigation-close]").on("click", function() { primaryNavigation.close(); return false; });

$("[data-js=primary-navigation]").on("swipeleft", function(){
    
    primaryNavigation.close(); return false;
    
});


// Close the navigation menu when the Escape key is pressed

$(document).keyup(function(e) {

    if (e.which == 27)  {
    
        primaryNavigation.close(); return false;
        
    }
    
});





/* == Print == */

$("[data-js=print]").on("click", function() { window.print(); return false; });





/* == Email == */

$("[data-js=email]").on("click", function() {
    
    var mailSubject = encodeURI(thisPage.title);
    
    var mailBody = encodeURI("I thought you might like this post: "+thisPage.url);
    
    window.location.href = "mailto:?subject="+mailSubject+"&body="+mailBody;
    
    return false;
    
});





/* == Related posts == */

// Remove check to see if the current page is included as a related post.

relatedPostCleanup(thisPage.id);





/*== Browser compatibility check == */

browserCompatibilityCheck();





/* = Functions = */

/* == Browser compatibility warnings == */

function browserCompatibilityCheck() {

    var isMajor, isMinor, majorHTML, minorHTML;
    
    // Check for major issues with browser compatibility
    
    isMajor = !Modernizr.backgroundsize || !Modernizr.inlinesvg || !Modernizr.generatedcontent || !Modernizr.boxsizing;
    
    
    // Check for minor issues with browser compatiblity
    
    isMinor = !Modernizr.rgba || !Modernizr.opacity || !Modernizr.cssgradients || !Modernizr.fontface || !Modernizr.csstransitions;
    
    
    // Set the corresponding warning messages
    
    majorHTML = '<div class="island  island--small  island--danger"><div class="wrapper  island__content"><p><strong class="island__highlight">Warning!</strong> The browser you&rsquo;re using is not able display this site correctly. <a href="http://whatbrowser.org/">Upgrade your browser</a> for a better experience.</p></div></div>';
    
    minorHTML = '<div class="island  island--small  island--warning"><div class="wrapper  island__content"><p><strong class="island__highlight">Warning!</strong> The browser you&rsquo;re using does not support all the features of this site. <a href="http://whatbrowser.org/">Upgrade your browser</a> for a better experience.</p></div></div>';
    
    
    // Add the warning to the DOM, if required
    
    if (isMajor) {
    
        $("body").prepend(majorHTML);
        
    } else if (isMinor) {
    
        $("body").prepend(minorHTML);
        
    }
    
}




/* == Navigation == */

primaryNavigation = new Object;

primaryNavigation.open = function() {
    $("[data-js=primary-navigation]").addClass("primary-navigation--active");
}

primaryNavigation.close = function() {
    $("[data-js=primary-navigation]").removeClass("primary-navigation--active");
}

primaryNavigation.toggle = function() {
    $("[data-js=primary-navigation]").toggleClass("primary-navigation--active");
}





/* == Related posts == */

// Remove check to see if the current page is included as a related post.

function relatedPostCleanup(pageID) {

    $("[data-js=related-posts] .navigation-tile--"+pageID).remove();

    if ($("[data-js=related-posts] .navigation-tile").length) {

        $("[data-js=related-posts]").removeClass("hidden");
        
    } else {

        $("[data-js=related-posts]").remove();
        
    }
    
}