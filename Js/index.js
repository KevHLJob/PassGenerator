var password=document.getElementById("password");

var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var passwordLength = 12;
 var password = "";


 //El bucle nos ayudara aumentar los caracteres a 12
 for (var i = 0; i <= passwordLength; i++) {
    //variable que sirve para traer los caracteres de una manera aleatoria
    var randomNumber = Math.floor(Math.random() * chars.length);
    //el password nos guarda el valor aleatorio con el rango de 12 caracteres unicamente
    password += chars.substring(randomNumber, randomNumber +1);
   }

   document.getElementById("password").value = password;


//funcion que nos genera la contraseña aleatoria
   function genPassword() {
      // declaracion de variables
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    //ciclo que aumenta la variable 1 hasta que sea igual a 12 o menor
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
}
//función la cual tendremos para copiar la contraseña aleatoria
   function copyPassword() {
    var copyText = document.getElementById("password");
    //funcion que nos selecciona el campo.
    copyText.select();
    document.execCommand("copy");  
  }