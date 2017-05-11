$(function() {
    
    var img = $('._theImage');
    var viewPort = $('._jsViewPort');
    var theHeight = viewPort.height();
    var theWidth = viewPort.width();
    var hor = -1;
    var speed = 100;
    var count = 0;
    var animator = start(speed);

    $(document).on('keydown', function(evt) {
         if (evt.keyCode == 37) {
             if (hor > -2) {
                 hor--;
             }
         }
         if (evt.keyCode == 39) {
             if (hor < 0) {
                 hor++;
             }
         }
         if (evt.keyCode == 38) {
             speed = speed - 10;
             resetInterval(speed)
         }
         if (evt.keyCode == 40) {
             speed = speed + 10;
             resetInterval(speed)
         }
    });


    function resetInterval(ms) {
        clearInterval(animator);
        animator = start(ms);
    }

    function start(milliseconds) {
        return setInterval(function() {
            img.css({ top : -theHeight * count, left : theWidth * hor});
            if (count == 9) {
                count = 0;
            } else {
                count++;
            }
        }, milliseconds);
    }

});