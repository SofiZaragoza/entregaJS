let budget = 0;
//let tablaBody = document.getElementById('tablabody');
const Expenselist = []; //Array para almacenar datos

console.log(document.body);
console.dir(document.body);

function submitIncome() {
    // Get the input value
    const campoIncome = parseInt(document.getElementById("incomeinput").value);

    // Display the income value on the page
    document.getElementById("incomeValue").textContent = campoIncome;
    }
    //validar el dato con un while > submit = con lo qu nos enseño la profe en la última clase 
function validar(ev){//es el comportamiento por default poner e o ev 
        if(campoIncome.value <= 0 ){
            ev.preventDefault();//frena el envio de evento. 
            alert('Ingrese nombre o email faltante en los campos');
        } 
    }
    

// TENGO QUE VALIDAR LOS DATOS QUE QUIERA VALIDAR DEL FORM > NO USAR MÁS PROMPT! TENGO QUE PEDIR LOS DATOS Y VALIDARLOS

/*campoEmail.addEventListener('input', () => {
    if(!campoEmail.value.includes('@') || !campoEmail.value.includes('.')){
        document.getElementById('mensaje').innerText = "No olvides el @ ni el . 🚨";
    }else{
        document.getElementById('mensaje').innerText = "";
    }
}) 

/*let formulario = document.getElementById('formulario'); //pongo un let y linkeo forumalario con el html formulario
formulario.addEventListener('submit', validar);//digo que cuando se use el submit del HTML me haga una función que se llama validar

function validar(ev){//es el comportamiento por default poner e o ev 
    if(campoNombre.value == '' || campoEmail.value == ''){
        ev.preventDefault();//frena el envio de evento. 
        alert('Ingrese nombre o email faltante en los campos');
    } 
}
    
// VALIDAR NOMBRES
/*
 let campoNombre = document.getElementById('nombre'); //llama al HTML por el id que le damos a cada propiedad de html 
 let campoEmail = document.getElementById('email');
 //onkeyup marca la acción de teclear sobre el campo de email. Podemos indicar con JS min y mayor
 campoNombre.onkeyup = () => {
     if(campoNombre.value.length < 3){
         console.log('Nombre de menos de 3 letras'); //esto puede ser un alert
         campoNombre.style.color = 'red';
     }else{
         campoNombre.style.color = 'black';
     }

// TENGO QUE GUARDAR LOS CAMPOS DEL ARRAY EN UN CLASS PARA GUARDARLOS EN EL CAMPO


/*ver los productos en tabla!! Yo tengo que tener la sección "tabla body" creada en HTML para poder agarrar esa sección 
y poder insertar el agregar carrito en una tabla*/ 
//<td> son para las celdas internas de la tabla

/*function agregaracarrito (producto){
    carro.push(producto);
    console.table(carro);
    alert("agregaste"+ producto.nombre + " al carrito");
    tablaBody.innerHTML +=`
    <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
    </tr>
`;


 }*/