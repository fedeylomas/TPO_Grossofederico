(function(){
    var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');
    var validarNombre = function(e){
        if(formulario.nombre.value == 0) {
            alert("Completa el campo nombre")
            e.preventDefault();
        }
    };
    var validarRadio = function(e){
        if(formulario.sexo[0].checked == true || 
        formulario.sexo[1].checked == true) {
        } else {
            alert("Completa el campo sexo")
            e.preventDefault();
        }
    };
    var validarConsulta = function(e){
        if(formulario.consulta.value == 0) {
            alert("Ingrese su consulta")
            e.preventDefault();
        }
    };
    var validar = function(e){
        validarNombre(e);
        validarRadio(e);
        validarConsulta(e);
    };
    formulario.addEventListener('submit', validar);
}())
