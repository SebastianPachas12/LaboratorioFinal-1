function adivinaElNumero(){
let numeroAlAzar = (Math.floor(Math.random() * 10) + 1)
console.log(numeroAlAzar)

let numeroUsuario = Number(prompt("Ingrese un numero e intentaré adivinarlo"))
let intentos = 5


while (intentos >= 1) {
        if (numeroUsuario === numeroAlAzar){
            alert("Adivinaste el numero! Has ganadon el juego")
            document.getElementById('resultado').textContent = "Fin del juego"
            document.getElementById('button-star').textContent = "Reiniciar Juego"
            break
        } else {
            alert("Sigue intentando ...")
        }

        let cercania = Math.abs(numeroUsuario - numeroAlAzar)
        if(cercania <= 3){
        alert("Estas muy cerca")
        } else{
        alert("Estas muy lejos")
        }
        
        intentos = intentos - 1

        alert(`Te quedan ${intentos} intentos`)

        if(intentos === 0){
            alert("Fin del jeugo")
        } else {
            numeroUsuario = Number(prompt("Ingrese otro numero"))
        }
    
    }
  

}

