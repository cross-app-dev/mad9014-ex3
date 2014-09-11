// JavaScript Document

/****************************************
Write a function that runs AFTER the page has
finished loading.

Add a second function that will run each time the
menu toggle image is clicked. When the function
runs it checks to see if the nav area is displayed
(css style display:block). If it is not shown then
the function will display it, else hide it.

Attach the second function to the menu toggle
with the click event inside your first function.

Make sure you uncomment the CSS file
where it is setting the nav menu to
display:none;
****************************************/
/* Extra function to toggle value of CSS display property. Just to improve the code redability. */
var toggleDisplay = function (displayValue){

    /* style.display will only return a valid value ("none" or "block") when it’s explicitly set from JS or from the style attribute which
       is applied to the HTML tag in HTML file. Since it is set inside CSS file, it will retrun empty string for the first time only.
       Handle this corner case by checking if display value is empty string, just toggle it to block value. */
    return (("none" === displayValue) ||
             ("" === displayValue))? "block":"none";
}

/* According to second requirement, this function will run on each time, image is clicked. */
var onImageClicked = function (){

    console.log("image has been clicked");

    /* Get a reference to node element that represents the image whose class is mainnav. */
    var navElemNode = document.querySelector(".mainnav");

    /* Toggle display of main navigation element between none and block values. */
    navElemNode.style.display = toggleDisplay(navElemNode.style.display);
    //console.log("After toggling: ", navElemNode.style.display);
}

/* According to the first requirement, this function will run after loading the page. */
var onPageLoadingFinished = function(){

    console.log("webpage has been loaded successfully");

    /*  Get a reference to node element that represents the image whose class is menu-toggle. */
    var imgElemNode = document.querySelector(".menu-toggle");

    /* Set click event handler for the image node element. */
    imgElemNode.onclick = onImageClicked;
}

/* Make sure not to access web contents after loading the webpage successfully. */
window.onload = onPageLoadingFinished;
