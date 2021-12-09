document.querySelector("#boton1");
document.querySelector("#boton2");
document.querySelector("#boton3");
document.querySelector("#boton4");

function repreguntarNombre (){
    var nombre = prompt("Ingresa tu nombre");
    if(!nombre){
        repreguntarNombre();
    }
    return nombre;
}
function preguntarNombre(){
    var nombre = repreguntarNombre();
    console.log("Un gusto " + nombre)
    return false;
}

preguntarNombre();

    document.getElementById("boton1").addEventListener("click", function() {
  
      console.log("Correcto!");

     });
    
        document.getElementById("boton2").addEventListener("click", function() {
        console.log("Incorrecto");
        
        });


            document.getElementById("boton3").addEventListener("click", function() {
           console.log("incorrecto");
     
        });
        
   

                document.getElementById("boton4").addEventListener("click", function () {
                console.log("incorrecto");
                
            }
         );
          
        
         

