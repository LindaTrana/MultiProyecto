let d = document;

export default function countdown(id, limitDate, finalmensaje) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60 * 60)),
      minuts=Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60 )),
      
      seconds=Math.floor((limitTime % (1000 * 60 )) / (1000));

    $countdown.innerHTML = `<h3>Faltan:
${days} dias 
${hours} horas 
${minuts} minutos
${seconds} segundos
</h3>`;

if(limitTime<0){
    $countdown.innerHTML=`<h3>${finalmensaje}</h3>`
}
  }, 1000);

}
