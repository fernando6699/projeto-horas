const horas = window.document.getElementById('horas')
const minutos = window.document.getElementById('minutos') 
const segundos = window.document.getElementById('segundos')

const relogio = setInterval(function time(){
    let datetoday = new Date();
  let hr = datetoday.getHours();
  let min = datetoday.getMinutes();
  let seg = datetoday.getUTCSeconds();

if(hr<10) hr = '0'+ hr
if(min<10) min = '0'+ min
if(seg<10) seg = '0'+ seg

  horas.textContent = hr
  minutos.textContent = min
  segundos.textContent = seg
})
