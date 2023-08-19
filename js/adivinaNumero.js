function adivinarNumero() {
    let min = 1;
    let max = 100;
    let intentos = 0;
    let numeroPensado = 0;

    const iniciarBtn = document.getElementById("iniciar");
    const resultadoElement = document.getElementById("resultado");

    iniciarBtn.addEventListener("click", function() {
        numeroPensado = Math.floor(Math.random() * 100) + 1;
        intentos = 0;
        resultadoElement.textContent = "Piensa en un número del 1 al 100 y espera a que adivine...";
        adivinar();
    });

    function adivinar() {
        const guess = Math.floor((min + max) / 2);
        intentos++;

        const respuesta = prompt(`¿Es ${guess} el número que pensaste? (responde "sí", "mayor" o "menor")`);

        if (respuesta === "sí" || respuesta === "si") {
            resultadoElement.textContent = `¡Adiviné el número ${guess} en ${intentos} intentos!`;
        } else if (respuesta === "mayor") {
            min = guess + 1;
            adivinar();
        } else if (respuesta === "menor") {
            max = guess - 1;
            adivinar();
        } else {
            resultadoElement.textContent = "Respuesta inválida. Por favor, responde 'sí', 'mayor' o 'menor'.";
        }
    }
}

adivinarNumero();
  