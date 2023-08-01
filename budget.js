let budget = 0;
//let tablaBody = document.getElementById('tablabody');
const Expenselist = []; //Array para almacenar datos

const form = document.getElementById("incomeform");
const formExpense = document.getElementById("expenseForm");

class expense {
    constructor (naming,Expname,amount,type){
        this.Name = naming;
        this.Expname = Expname;
        this.Amount = amount;
        this.Etype = type;
    }
}

function submitIncome() {
    // Get the input value + pareafloat 
    const campoIncome = parseFloat(document.getElementById("incomeinput").value);

    // valido los datos que sean nñumeros y mayores a cero con un if
    if(!isNaN(campoIncome) && campoIncome > 0){
        document.getElementById("incomeValue").textContent = campoIncome;// Display the income value on the page
    }else{
        alert("Por favor, ingresa un número mayor a 0");
    }
    }
    //agrego un addevent listener para validar el boton submit que viene del campo del form
    form.addEventListener("submit",(ev) =>{
        ev.preventDefault();
        submitIncome() 
    })
    
function submitExpense() {
    let username = document.getElementById("userName").value;
    //valido que tena un mín de palabras 
    if(!isNaN(username) || username.length < 3) {
        alert("solo se aceptan más de 3 letras y sin números");
    }else{
        document.getElementById("userName").textContent = username;
    }

    let expensename =  document.getElementById("expenseName").value;

    let expensetype = document.getElementById("expenseType").value;
    
    let expenseamount =  parseFloat(document.getElementById("expenseAmount").value);

    if(!isNaN(expenseamount) && expenseamount > 0){
        document.getElementById("expenseAmount").textContent = expenseamount;// mismo comportamiento que el income
    }else{
        alert("Por favor, ingresa un gasto con monto mayor a 0"); //este da OK
    }

    const newExpense = new expense(username,expensename,expenseamount,expensetype);
    Expenselist.push(newExpense);

    console.table(Expenselist);
}

//fuera de la función valido el submit con un eventlistener
    formExpense.addEventListener("submit",(ev) =>{
        ev.preventDefault();
        submitExpense() 
    })

    const sumadegastos = Expenselist.reduce((total,expense) => total + expense.Amount,0)

    console.log("el total de todos los gastos ingresados es "+ sumadegastos);

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