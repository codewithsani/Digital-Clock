const hourSpan = document.getElementById("hour");
const minuteSpan = document.getElementById("minute");
const secondSpan = document.getElementById("seconds");
const amorpmSpan = document.getElementById("amorpm");

function changetTime() {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let amorpm;
  hourSpan.textContent = hour;
  minuteSpan.textContent = minute;
  secondSpan.textContent = seconds;
  if (hour >= 0 && hour <= 12) {
    amorpm = "AM";
  } else {
    amorpm = "PM";
  }
  amorpmSpan.textContent = amorpm;
}

setInterval(changetTime, 1000);
