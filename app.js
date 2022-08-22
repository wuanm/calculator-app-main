/*const siete=document.getElementById("siete")
const ocho=document.getElementById("ocho")
const nueve=document.getElementById("nueve")
const seis=document.getElementById("seis")
const cinco=document.getElementById("cinco")
const cuatro=document.getElementById("cuatro")
const tres=document.getElementById("tres")
const dos=document.getElementById("dos")
const uno=document.getElementById("uno")
const cero=document.getElementById("cero")
const reset=document.getElementById("reset")
const igual=document.getElementById("igual")
const punto=document.getElementById("punto")
const mas=document.getElementById("mas")
const menos=document.getElementById("guion")
const equis=document.getElementById("equis")
const slach=document.getElementById("slach")

*/
const pantalla=document.querySelector(".main")
var operaciones=" ";
let contador=1;






const botones=[siete,ocho,nueve,seis,cinco,cuatro,tres,dos,uno,cero]

const borrados=[ del,reset]

const operadores=[slach,igual,mas,menos,equis,punto]

/*Recorrido de los numeros */
 botones.forEach(bot=>
    bot.addEventListener("click",function(){
        document.querySelector(".main").textContent+=bot.value;
    }));





  borrados.forEach(limpia =>
           limpia.addEventListener("click",function(){
            if (limpia.value == "reset")
                document.querySelector(".main").innerHTML =" ";
                let contador=1;
                console.log(contador)
           }))


           /* recoriendo los operadores y colocandolos en la variable operacion*/


operadores.forEach(op =>
         op.addEventListener("click",function(){
            
            if(contador==1 ){

                if (op.value =="-"){
                    document.querySelector(".main").innerHTML+=op.value;
                    operaciones=op.value;
                    contador++
                    console.log(operaciones)
                   
                } else if(op.value=="x"){
                    document.querySelector(".main").innerHTML+=op.value;
                    operaciones=op.value;
                    contador ++
                    
                } else if(op.value=="/"){
                    document.querySelector(".main").innerHTML+=op.value;
                    operaciones=op.value;
                    contador ++

                } else if(op.value=="+"){
                    document.querySelector(".main").innerHTML+=op.value;
                    operaciones=op;
                    contador ++
                    console.log(contador)
                    
            
            }else {
                if(op.value=="."){
                    document.querySelector(".main").innerHTML+=op.value;
                operaciones=op.value;
                }else if (op.value=="="){
                    console.log("juanma")
                }


                }
              
            } 
         
         }))
console.log(operaciones)

        