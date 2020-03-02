//Global Variables
var hour, min, sec, todaysDate;
const destinationDate = new Date("March 20, 2020").getTime();

//Auto Runs Code
(function main(){
    countdownStart();
})();

function countdownStart(){

    //Gather Time Variables
	  todaysDate = new Date();

    let presentTime = todaysDate.getTime();
    let timeBefore = destinationDate - presentTime;
    let timeAfter =  presentTime - destinationDate;
    setTimeout(countdownStart, 1000);

    //After the designated date has passed
    if(timeBefore < 0){
      document.getElementById("timetext").innerHTML = "Days has passed";
    	document.getElementById("daysLeft").innerHTML = Math.floor(timeAfter/(1000*60*60*24));
   		document.getElementById("hoursLeft").innerHTML = Math.floor(timeAfter % (1000*60*60*24)/(1000*60*60));
    	document.getElementById("minLeft").innerHTML = Math.floor(timeAfter % (1000*60*60) / (1000*60));
    	document.getElementById("secLeft").innerHTML = Math.floor(timeAfter % (1000*60) / 1000);
    }
    //Before the designated date has passed
    else{
      document.getElementById("timetext").innerHTML = "Days before the day";
    	document.getElementById("daysLeft").innerHTML = Math.floor(timeBefore/(1000*60*60*24));
   		document.getElementById("hoursLeft").innerHTML = Math.floor(timeBefore % (1000*60*60*24)/(1000*60*24*2));
    	document.getElementById("minLeft").innerHTML = Math.floor(timeBefore % (1000*60*60) / (1000*60));
    	document.getElementById("secLeft").innerHTML = Math.floor(timeBefore % (1000*60) / 1000);
    }
}
