const detectar = detect.parse(navigator.userAgent);
const boton = document.querySelector(".ejemplo-link");

console.log(detectar.device.family);

if(detectar.device !== null) {
    if(detectar.device.family === 'Android') {
        boton.setAttribute("href", './pdf/Ejemplo-Reporte-semanal.pdf');
        alert("Eres android");
    }
}