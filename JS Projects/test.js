const duration = 60; // Total seconds to count down
const startTime = Date.now();

const timer = setInterval(() => {

  const secondsElapsed = (Date.now() - startTime) / 1000;

  let remainingTime = duration - secondsElapsed;

  if (remainingTime <= 0) 
  {
    remainingTime = 0;
    clearInterval(timer);
  }

  console.log(remainingTime.toFixed(0)); 
}, 1000);
