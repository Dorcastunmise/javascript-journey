//  long method
function digitalClock() {
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours() + '';
    let minutes = date.getMinutes() + '';
    let seconds = date.getSeconds() + '';
    
    if(hours.length < 2) {
        hours = '0' + hours;
    }

    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if(seconds.length < 2) {
        seconds = '0' + seconds;
    }

    let weekDays = [
        'Sun', 'Mon', 'Wed', 'Thurs', 'Fri', 'Sat'
    ];

    let clock = weekDays[day] + ' ' +
     hours + ':' + 
     minutes + ':' + 
     seconds;
    
document.getElementById('clock').innerHTML = clock;
}
digitalClock();

setInterval(digitalClock, 1000);

//  short method
setInterval(myFunction, 1000);

            function myFunction() {
            let d = new Date();
            let everyday = ['Sun', 'Mon', 'Wed', 'Thurs', 'Fri', 'Sat'];
    document.getElementById('demo').innerHTML = 
    everyday[d.getDay()] + " " +
    d.getHours() + ":" +
    d.getMinutes() + ":" + 
    d.getSeconds();
}