let nombre, correo, mensaje;

let formulario = document.querySelector('#form');


formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
nombre = document.getElementById('nombre').value
correo = document.getElementById('correo').value
mensaje = document.querySelector('textarea').value
ValidarData(nombre,correo,mensaje)
guardarLocalStorage(nombre,correo,mensaje)
}

function ValidarData(nombre,correo,mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        swal("Error pute", "Oppss estupide!..", "error");
    }
}
function guardarLocalStorage(nombre,correo,mensaje){
    localStorage.setItem('Nombre',nombre);
    localStorage.setItem('Correo',correo);
    localStorage.setItem('mensaje',mensaje);
    ListaData()
}                 

function ListaData() {
    let nombreUs = localStorage.getItem('Nombre');
    let correoUs = localStorage.getItem('Correo');
    let mensajeUs = localStorage.getItem('mensaje');
    swal("Bien hecho pute!");
}