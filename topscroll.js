var topBtn = document.getElementById('back-to-top');
var docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

docHeight = docElem.scrollHeight;
if(docHeight != 0) {
    offset = (docHeight / 4);
}

window.addEventListener('scroll', function(){
    scrollPos = docElem.scrollTop;
    if(scrollPos > offset) {
        topBtn.className = 'visible';
    } else {
        topBtn.className ='';
    }
})

topBtn.addEventListener('click', function(e){
    e.preventDefault();

    var scrollInterval = setInterval(function(){
        if(scrollPos != 0) {
            window.scrollBy(0, -60);
        }else {
            clearInterval(scrollInterval);
        }
    }, 10);
})