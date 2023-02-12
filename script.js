window.onload=function(){
    var bar = document.getElementById("progress-bar");
    window.addEventListener("scroll", function(){
        //adding px is vital otherwise it will not work properly
    var totalScroll = window.pageYOffset;
    var totalHeight = document.body.offsetHeight - window.innerHeight;
    var amountScrolled = totalScroll / totalHeight; //this is a number between 0 and 1, with 1 being the bottom of the page
    var totalWidth = document.body.offsetWidth;

    bar.style.width = totalWidth * amountScrolled + 'px';
    })
    
    
    
    }


