const detectar = detect.parse(navigator.userAgent);
const boton = document.querySelector(".ejemplo-link");

if(detectar.device !== null) {
    if(detectar.device.family !== 'iPhone' && detectar.device.type !== 'Desktop') {
        alert("Eres android");
        boton.removeAttribute("href");
        boton.setAttribute("href", 'https://fir-demo-a94bb.web.app/pdf');
        boton.setAttribute("download", 'Ejemplo-Reporte-semanal.pdf');
    }
}