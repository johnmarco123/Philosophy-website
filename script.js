window.onload=function(){
    //PROGRESS BAR CODE START
    var bar = document.getElementById("progress-bar");
    window.addEventListener("scroll", function(){
        //adding px is vital otherwise it will not work properly
    var body = document.body,
    html = document.documentElement;

    /***************************************************************************************
    *    Title: How to get height of entire document with JavaScript?
    *    Author: Borgar
    *    Date: Jul 18, 2009
    *    Code version: 1.0
    *    Availability: https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
    *
    ***************************************************************************************/
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

    height -= window.innerHeight

    //distance scrolled from 1 - n
    var totalScroll = window.pageYOffset;

    //distance scrolled between 0 - 1 with 1 being the bottom of the page
    totalScroll /= height; 
    var totalWidth = document.body.offsetWidth;
    bar.style.width = totalWidth * totalScroll + 'px';
    })
        //PROGRESS BAR CODE END





    }


