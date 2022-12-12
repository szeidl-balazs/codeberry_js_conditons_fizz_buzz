function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    context.fillRect(175,100,100,100);  

}

window.addEventListener("load", pageLoaded);