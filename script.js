let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30 + day.getMinutes() / 2;
  let mm = day.getMinutes() * 6 + day.getSeconds() / 10;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let hours = document.getElementById('hour');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');

  let h = day.getHours().toString().padStart(2, '0');
  let m = day.getMinutes().toString().padStart(2, '0');
  let s = day.getSeconds().toString().padStart(2, '0');

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}, 1000);
