function digiclock(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let timezone="AM"
    if(hours == 0){
        hours = 12;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(hours > 12){
        hours -= 12;
        timezone="PM";
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds<10){
        seconds = "0" + seconds;
    }
    let time = hours + ":" + minutes + ":" + seconds + " " + timezone;
    console.log(time);
    let t=setTimeout(function(){digiclock()},3000);
}
digiclock();