

function getTime(){
    clock = new Date();
    ctime = clock.getHours() + ':' + clock.getMinutes() + ':' + clock.getSeconds();
    document.getElementById("time").innerText =  ctime;
}

function initTime(){
    window.setInterval(getTime, 1);
}







