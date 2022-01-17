const form = document.getElementById("formulario");

form.addEventListener('submit', (e) => {
    e.preventDefault();    
    const correo = form["correo"].value;
    const mensaje = form["mensaje"].value;

    // U2lzdGVtYXM5OQ%3D%3D

    if(correo !== null && mensaje !== null) {
        Email.send({
            SecureToken: "69158f15-b75d-4d0e-ac6c-19b95d12f0db",
            To : "erickfco1999@gmail.com",
            From : "erickfco1999@gmail.com",
            Subject : "Comentario",
            Body : mensaje,
        }).then(
            message => {
                alert("mail sent successfully")
                form.reset();
        }
        ).catch(
            error => console.log(error)
        )

        console.log("Mensaje enviado");
    } else {
        alert("Debe llenar todos los campos");
    }
})