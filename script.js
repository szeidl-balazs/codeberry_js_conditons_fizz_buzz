function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let size = 50;
    positionX = 20;
    positionY = 15;

    for (i = 1; i <=15; i++) {

        if ( i % 15 === 0) {
            context.fillStyle = 'rgba(0,255,0,.5)';
        } else if ( i % 5 === 0) {
            context.fillStyle = 'rgba(255,255,0,.5)';
        } else if ( i % 3 === 0) {
            context.fillStyle = 'rgba(0,0,255,.5)';
        } else {
            context.fillStyle ='rgba(0,0,0,.5)';
        }

        context.fillRect(positionX,positionY,size, size);
        
        positionX += 20;
        positionY +=15;
        

    }
      

}

window.addEventListener("load", pageLoaded);