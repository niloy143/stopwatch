var timeStart = document.getElementById('timeStart');
var playPause = document.getElementById('play-pause');
var retry = document.getElementById('retry');

var hour = 0;
var hourShow;

var minute = 0;
var minuteShow;

var second = 0;
var secondShow;

var miliSecond = 0;
var miliSecondShow;

var cholok = 'play';
let settInterval;

function timerFunction(){
    miliSecond++;
    if(miliSecond == 100) {
        miliSecond = 0;
        second++;
    }
    if(second == 60){
        second = 0;
        minute++;
    }
    if(minute == 60) {
        minute = 0;
        hour++;
    }

    miliSecond < 10 ? miliSecondShow = '0'+miliSecond : miliSecondShow = miliSecond;

    second < 10 ? secondShow = '0'+second : secondShow = second;

    minute < 10 ? minuteShow = '0'+minute : minuteShow = minute;

    hour < 10 ? hourShow = '0'+hour : hourShow = hour;

    timeStart.value = hourShow+':'+minuteShow+':'+secondShow+':'+miliSecondShow;
}

playPause.addEventListener('click', playPauseAction);

window.onkeypress = function(event) {
    if (event.which == 32) {
      playPauseAction();
    }
}

function playPauseAction() {
    if(cholok === 'play') {
        settInterval = setInterval(timerFunction, 10);
        cholok = 'pause';
        playPause.src = 'image/circle-pause-solid.svg';
    }else if (cholok === 'pause') {
        clearInterval(settInterval);
        cholok = 'play';
        playPause.src = 'image/circle-play-solid.svg';
    }
}

retry.addEventListener('click', retryAction);

function retryAction(){
    clearInterval(settInterval);
    cholok = 'play';
    playPause.src = 'image/circle-play-solid.svg';
    miliSecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    timeStart.value = '00:00:00:00';
}

