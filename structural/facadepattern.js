/**
    The facade pattern provides a convenient higher-level interface to a larger body of code, 
    hiding its true underlying complexity. Think of it as simplifying the API being presented
    to other developers

    Facades are a structural pattern which can often be seen in JavaScript libraries like jQuery
*/

var addMyEvent = function( el,ev,fn ){
    if(el.addEventListener){
        el.addEventListener( ev,fn, false );
    } else if(el.attachEvent){
        el.attachEvent( 'on'+ ev, fn );
    } else{
    el['on' + ev] = fn;
    }
};

bindReady: function() {
    if (document.addEventListener) {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
        // A fallback to window.onload, that will always work
        window.addEventListener("load", jQuery.ready, false);
        // If IE event model is used
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", DOMContentLoaded);
        // A fallback to window.onload, that will always work
        window.attachEvent("onload", jQuery.ready);
    }
}