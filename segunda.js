const pantalla=document.querySelector(".main")
const primero=document.getElementById("primero").checked=true;
const arrayRadios=[document.getElementsByName("theme")]
const radio=document.querySelector(".radio")


/*array de el teclado de la calculadora */
const botones=[cero, uno,dos, tres,cuatro,cinco,seis,siete,ocho,nueve,punto];
const signos=[slash,igual,mas,menos,equis];
const btnEspecial=[del,reset];


/*variables auxiliares */
var contenedor=" ";
var selecion=0;
var seleccioneIgual=false;


/*variables auxiliares para hacer la operacion que */
var valor1;
var valor2=" ";
var operar=" ";


/*Operaciones de la calculadora */
numero()
sigOperaciones()
opcionesPantalla()
cambioTheme()


/*Funciones de la calculadora */
function limpiarPantalla(){
    pantalla.innerHTML=" ";
    valor1=0;
    valor2=0;
     operar=" ";
     selecion=0;
     contenedor=" ";
     seleccioneIgual=false;

}
/*funcion para retroceder un espacio */
function retrocedeUnEspacio(){
    if(seleccioneIgual==false){
    let retroceso=" ";
    retroceso=pantalla.innerHTML
    var sinUlValor=retroceso.substring(0,retroceso.length-1)
    pantalla.innerHTML=sinUlValor;

    }else{
        pantalla.innerHTML
    }
}
/*Recoremos los botones para saber se hubo un click y cual fue apretado */
function numero(){
    botones.forEach(btn=>
        btn.addEventListener("click",function(){
            if(operar==" "){
                if(seleccioneIgual==false){
                    valor1=pantalla.textContent+=btn.value;
                } else if(seleccioneIgual==true){
                    valor1=pantalla.textContent;
                }
            }else{
                pantalla.textContent+=btn.value;
                 valor2+=btn.value;
                 
                
            }
           
          
        })
        )
    };

    
/*recoremon los signos de operaciones */
function  sigOperaciones(){
    signos.forEach(btn=>
        btn.addEventListener("click",function(){
            if (btn.value=="="){
                resolver()
                valor1=0;
                valor2=0;
                operar=" ";
                seleccioneIgual=true;
                

            }else{
                pantalla.textContent+=btn.value;
                operar=btn.value;
            }
          
        }))




};
/*opciones "del" y "reset"    funciones estan correctas y funcionando*/
function opcionesPantalla(){
    btnEspecial.forEach(btn=>
    btn.addEventListener("click",function(){
        if(btn.value=="reset"){
            limpiarPantalla() 
             
        }else if (btn.value=="del"){
            retrocedeUnEspacio()
        }
    }))
};

/*operacion deacuerdo a su signo de operacion */
function resolver(){
    var total;
    switch(operar){
        case "+":
            total=parseFloat(valor1) +  parseFloat(valor2);
            break
        case "-":
            total=parseFloat(valor1) -  parseFloat(valor2);
            break
        case "x":
            total=parseFloat(valor1) *  parseFloat(valor2);
            break
        case "/":
            total=parseFloat(valor1) /  parseFloat(valor2);
            break

    }
    pantalla.textContent=total;
  
};


/*cambio de theme de la calculadora*/
function cambioTheme(){
    arrayRadios.forEach(rdio =>
        rdio.forEach(rdio2=>
            rdio2.addEventListener("click",function(){
                var coloresArray=[]
                console.log(rdio2.value)
                if(rdio2.value=="primero" &&  rdio2.checked==true){
                    document.documentElement.style.setProperty("--cuerpoBacgroun","hsl(222, 26%, 31%)");
                    document.documentElement.style.setProperty("--contenedor","hsl(223, 31%, 20%)");
                    document.documentElement.style.setProperty("--screen","#181f32");
                    document.documentElement.style.setProperty("--leltraScreen","white")
                    document.documentElement.style.setProperty("--headerBackgound","(#3b4664)");
                    document.documentElement.style.setProperty("--fondoColorBoton","white")
                    document.documentElement.style.setProperty("--teclasEspeciales","hsl(225, 21%, 49%)");
                    document.documentElement.style.setProperty("--teclaigual","hsl(6, 63%, 50%)");
                    document.documentElement.style.setProperty("--leEspecialesPan","white");
                    document.documentElement.style.setProperty("--colorNumeroa"," hsl(221, 14%, 31%)");
            
                }else if (rdio2.value=="segundo" &&  rdio2.checked==true){
                    document.documentElement.style.setProperty("--cuerpoBacgroun","hsl(0, 0%, 90%)");
                    document.documentElement.style.setProperty("--contenedor","#d3cdcd");
                    document.documentElement.style.setProperty("--screen","#eeeeee");
                    document.documentElement.style.setProperty("--leltraScreen","black")
                    document.documentElement.style.setProperty("--headerBackgound"," hsl(0, 0%, 90%)");
                    document.documentElement.style.setProperty("--fondoColorBoton","white")
                    document.documentElement.style.setProperty("--teclasEspeciales","hsl(185, 58%, 25%)");
                    document.documentElement.style.setProperty("--teclaigual","hsl(25, 98%, 40%)");
                    document.documentElement.style.setProperty("--leEspecialesPan","hsl(60, 10%, 19%)");
                    document.documentElement.style.setProperty("--colorNumeroa"," hsl(0, 0, 100%)");  
                }else if (rdio2.value=="tercero" &&  rdio2.checked==true){
                    document.documentElement.style.setProperty("--cuerpoBacgroun","hsl(268, 75%, 9%)");
                    document.documentElement.style.setProperty("--contenedor"," hsl(268, 71%, 12%)");
                    document.documentElement.style.setProperty("--screen","#1e0836");
                    document.documentElement.style.setProperty("--leltraScreen","#feec4c")
                    document.documentElement.style.setProperty("--headerBackgound","  hsl(268, 75%, 9%)");
                    document.documentElement.style.setProperty("--fondoColorBoton","#331b4d")
                    document.documentElement.style.setProperty("--fondoColorRaton"," #6b34ac");  
                    document.documentElement.style.setProperty("--teclasEspeciales"," hsl(285, 91%, 52%)");
                    document.documentElement.style.setProperty("--teclaigual","hsl(177, 92%, 70%)");
                    document.documentElement.style.setProperty("--leEspecialesPan"," white");
                    document.documentElement.style.setProperty("--colorNumeroa"," #ffe546");     
        }                                                        
       }) 
        )
    
    );
};
    


