const db = firebase.firestore();
const boton = document.querySelector(".ejemplo-link");

const formulario = document.getElementById("contacto");
// const d = db.collection("usuarios").where("correo", '==', "erickfco1999@gmail.com").get()
// .then(snapshot => {
//     console.log(snapshot.empty);
//     snapshot.forEach(doc => {
//         // Do something
//         console.log(doc.id);
//     });
// })

const usuarios = async(datos) => {
    var existe = false, id_usuario = "";
    await db.collection("usuarios").where("correo", '==', datos.correo).get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            id_usuario = doc.id;
            existe = doc.exists;
        });
    })

    if(existe === true) {
        await db.collection("mensajes").add({
            correo: datos.correo,
            mensaje: datos.mensaje,
            id_usuario: id_usuario
        })
        id_usuario = "";
        alert("Mensaje enviado");
    } else {
        let usuario_ = await db.collection("usuarios").add({
            nombre: datos.nombre,
            apellido: datos.apellido,
            correo: datos.correo,
        })
        const id_ = usuario_.id;

        await db.collection("mensajes").add({
            usuario: datos.correo,
            mensaje: datos.mensaje,
            id_usuario: id_
        })
        existe = false;
        alert("Mensaje enviado");
    }

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