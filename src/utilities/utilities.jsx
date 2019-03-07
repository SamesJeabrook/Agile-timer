export function convertSecondsToTime(time){
  let minutes;
  let seconds;
  if(time < 0){
    minutes = ~~(Math.abs(time) / 60);
    seconds = Math.abs(time) - minutes * 60;
  }else{
    minutes = ~~(time / 60);
    seconds = time - minutes * 60;
  }

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  
  return{
    minutes,
    seconds
  }
};