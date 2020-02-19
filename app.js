var hour, min, sec, todaysDate;
const destinationDate = new Date("March 20, 2020").getTime();

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
    let timeDifference = destinationDate - presentTime;
    setTimeout(countdownStart, 1000);

    if(timeDifference < 0){
    	document.getElementById("daysLeft").innerHTML = 0;
   		document.getElementById("hoursLeft").innerHTML = 0;
    	document.getElementById("minLeft").innerHTML = 0;
    	document.getElementById("secLeft").innerHTML = 0;
    }
    else{
    	document.getElementById("daysLeft").innerHTML = Math.floor(timeDifference/(1000*60*60*24));
   		document.getElementById("hoursLeft").innerHTML = Math.floor((timeDifference % (1000*60*60*24)/(1000*60*24)));
    	document.getElementById("minLeft").innerHTML = Math.floor((timeDifference % (1000*60*60) / (1000*60)));
    	document.getElementById("secLeft").innerHTML = Math.floor((timeDifference % (1000*60) / 1000));
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
