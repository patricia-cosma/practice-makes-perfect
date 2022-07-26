// we need to select the hand
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// create our function to run the clock
function setDate() {
    const now = new Date(); // grabbing the date

    const seconds = now.getSeconds(); // setting the seconds
    const secDegrees = ((seconds / 60) * 360) + 90; // for each second, the hand will have to be in a different position (getting the second, then multiply by degrees)
    // + 90 is there to offset what we styled with tranform (L67)
    // the seconds hand will move accoring to the specific degrees
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const minutes = now.getMinutes();
    const minDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  }

// we need the function to run every second:
setInterval (setDate, 1000);
setDate ();