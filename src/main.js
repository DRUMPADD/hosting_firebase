const db = firebase.firestore();


const formulario = document.getElementById("contacto");

const usuarios = async(datos) => {
    let usuario_ = await db.collection("usuarios").add({
        nombre: datos.nombre,
        apellido: datos.apellido,
        correo: datos.correo,
    })
    const id_ = usuario_.id;

    await db.collection("mensajes").add({
        id_usuario: id_,
        mensaje: datos.mensaje
    })

    alert("Mensaje enviado");
}


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = formulario["nombres"].value;
    const apellido = formulario["apellidos"].value;
    const correo = formulario["correo"].value;
    const mensaje = formulario["mensaje"].value;
    
    const info_contacto = { nombre, apellido, correo, mensaje };

    if(nombre === "" && apellido === "" && correo === "" && mensaje === "") {
        alert("Debes llevar");
    } else {
        usuarios(info_contacto);
        formulario.reset();
    }


});