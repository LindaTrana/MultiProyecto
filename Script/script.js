import countdown from "./DOM/cuenta_regresiva.js";
import menu from "./DOM/MenuHamburguesa.js";
import { digitalClock } from "./DOM/Reloj.js";
import { Alarma } from "./DOM/Reloj.js";
import { moveBall, shorcuts } from "./DOM/teclado.js";


const d=document;

d.addEventListener("DOMContentLoaded", (e)=>{
    menu(".equis",".panel",".menu a");
    digitalClock('#reloj','#activar-reloj','#desactivar-reloj')
    Alarma("assets/alarma.mp3",'#activar-alarma','#desactivar-alarma')
    countdown('countdown','January 30,2023 18:00:01','Felicidades')
});

d.addEventListener("keydown",e=>{
    shorcuts(e.type)
    moveBall(e,".ball",".stage")

})
