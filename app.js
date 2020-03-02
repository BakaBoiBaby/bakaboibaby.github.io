var hour, min, sec, todaysDate;
//const destinationDate = new Date("March 20, 2020").getTime();
const destinationDate = new Date("February 29, 2020").getTime();

(function main(){
    countdownStart();
})();

function countdownStart(){

	  todaysDate = new Date();
    hour = todaysDate.getHours();
    hour = formatTime(hour);
    hour = formatTwoDigits(hour);
    min = todaysDate.getMinutes();
    min = formatTwoDigits(min);
    sec = todaysDate.getSeconds();
    sec = formatTwoDigits(sec);

    let presentTime = todaysDate.getTime();
    let timeBefore = destinationDate - presentTime;
    let timeAfter =  presentTime - destinationDate;
    setTimeout(countdownStart, 1000);

    if(timeBefore < 0){
      document.getElementById("timetext").innerHTML = "Days has passed";
    	document.getElementById("daysLeft").innerHTML = Math.floor(timeAfter/(1000*60*60*24));
   		document.getElementById("hoursLeft").innerHTML = Math.floor(timeAfter % (1000*60*60*24)/(1000*60*60));
    	document.getElementById("minLeft").innerHTML = Math.floor(timeAfter % (1000*60*60) / (1000*60));
    	document.getElementById("secLeft").innerHTML = Math.floor(timeAfter % (1000*60) / 1000);
    }
    else{
      document.getElementById("timetext").innerHTML = "Days before the day";
    	document.getElementById("daysLeft").innerHTML = Math.floor(timeBefore/(1000*60*60*24));
   		document.getElementById("hoursLeft").innerHTML = Math.floor(timeBefore % (1000*60*60*24)/(1000*60*24*2));
    	document.getElementById("minLeft").innerHTML = Math.floor(timeBefore % (1000*60*60) / (1000*60));
    	document.getElementById("secLeft").innerHTML = Math.floor(timeBefore % (1000*60) / 1000);
    }
}

function formatTime(time){
    time = ((time + 11) % 12 + 1);
    return time;
}

function formatTwoDigits(time){
    if(time < 10){
        time = "0" + time;
    }
    return time;
}
