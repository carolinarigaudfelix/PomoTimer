

function getTimeSeconds(seconds){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone:'UTC'
    });
}
const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
let seconds = 0
let interval;

function startTimer() {
    interval = setInterval(function(){
        seconds++;
        timer.innerHTML = getTimeSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('stop')){
        clearInterval(interval)
        timer.innerHTML = '00:00:00';
        timer.classList.remove('stopped')
        seconds=0
    }else if(el.classList.contains('pause')){
        pause.addEventListener('click', function(event){
            clearInterval(interval)
            timer.classList.add('stopped');

        });
    }else if(el.classList.contains('start')){
        start.addEventListener('click', function(event){
            timer.classList.remove('stopped');
            clearInterval(interval)
            startTimer();
        });
    }
})



