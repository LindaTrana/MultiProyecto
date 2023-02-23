const d=document;

export function digitalClock(clock,btnPlay,btnStop){
    let clockTempo;
    
    d.addEventListener('click',e=>{
        if(e.target.matches(btnPlay)){
            clockTempo=setInterval(()=>{
                let clockHour=new Date().toLocaleString();
                d.querySelector(clock).innerHTML=`<h3>${clockHour}</h3>`
            },1000);
            e.target.disabled=true;
        }

            if(e.target.matches(btnStop)){
                clearInterval(clockTempo);
                d.querySelector(clock).innerHTML=null;
                d.querySelector(btnPlay).disabled=false;
            }
    })
}

export function Alarma(sound,btnPlay,btnStop){
    let alarmaTempo;
    const $alarma=d.createElement("audio");
    $alarma.src=sound;

    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            alarmaTempo=setTimeout(()=>{
                $alarma.play();

            },1500);
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmaTempo);
            $alarma.pause();
            $alarma.currentTime=0;
            d.querySelector(btnPlay).disabled=false;
        }
    })
    
}