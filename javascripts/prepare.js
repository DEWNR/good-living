/**
 * Detect browser capabilities for use in CSS and scripts
 *
 * Must be concatenated and minified before use in a production environment.
 **/
 
/* Remove Modernizr-style "no-inlinesvg" class before Modernizr runs, and replace the "no-retina" with "retina" if required. (These are included by default to prevent different versions of the same image from being displayed if JavaScript is disabled.) */
(function () {

     var htmlElement = document.querySelector("html");
     
     htmlElement.className = htmlElement.className.replace(/(?:^|\s)no-inlinesvg(?!\S)/, '' );
     
     if (window.devicePixelRatio > 1) {

        htmlElement.className = htmlElement.className.replace( /(?:^|\s)no-retina(?!\S)/ , '' );
        
        htmlElement.className += " retina";
        
    }
     
}());

// @codekit-append "../../../includes/modernizr/modernizr.custom.45448.js";