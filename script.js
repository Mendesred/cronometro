var cronomentro_id = 0;
var hora = ''
var timerSalvo = ''
var cont = 0
function initCronometro() {
  var timer_horas = document.getElementById("timerHoras");
  var timer_minutos = document.getElementById("timerMinutos");
  var timer_segundos = document.getElementById("timerSegundos");
  var timer_desimo = document.getElementById("timerDesimo");

  var h=0;m=0;s=0;d=0;
  
  cronomentro_id = setInterval(function () {
    timer_horas.innerHTML = h < 10 ? '0'+ h : h;
    timer_minutos.innerHTML = m < 10 ? '0'+ m : m;
    timer_segundos.innerHTML = s < 10 ? '0'+ s : s;
    timer_desimo.innerHTML = d < 10 ? '0'+ d : d;
    if(d<9){ d+=1 }
    else if(s < 59){ d=0 ; s+=1 }
    else if(m < 59){ d=0 ; s=0 ; m+=1 }
    else if(h < 23){ d=0 ; s=0 ; m=0 ; h+=1}
    let dec_h = h >10 ? h: `0${h}`;
    let dec_m = m> 10 ? m: `0${m}`;
    let dec_s = s> 10 ? s: `0${s}`;
    let dec_d = d> 10 ? d: `0${d}`;


    timerSalvo=(`${dec_h}:${dec_m}:${dec_s}:${dec_d}`) 

  },100);
}

function gravar() {
  cont < 9? cont +=1 : cont = 1;
  document.getElementById(`timerSalvo${cont}`).innerHTML = (`${timerSalvo} ${cont}`);
}
function zeraCronometro() {
  clearInterval(cronomentro_id);
  timer_horas = document.getElementById("timerHoras").innerHTML = "00";
  timer_minutos = document.getElementById("timerMinutos").innerHTML = "00";
  timer_segundos = document.getElementById("timerSegundos").innerHTML = "00";
  timer_desimo = document.getElementById("timerDesimo").innerHTML = "00";

  console.log(hora)
}
