let budget = 0;
//let tablaBody = document.getElementById('tablabody');
const Expenselist = []; //Array para almacenar datos

const form = document.getElementById("incomeform");
const formExpense = document.getElementById("expenseForm");
const tablabody = document.getElementById("tablaexpense");

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

    //VERI SI PUEDO SUMAR TODOS LOS INGRESOS Y MOSTRARLO EN EL TOTAL

    
function submitExpense() {
    let username = document.getElementById("userName").value;
    //valido que tena un mín de palabras 
    if(!isNaN(username) || username.length < 3) {
        alert("solo se aceptan más de 3 letras y sin números");
    }else{
        document.getElementById("userName").textContent = username;
        Expenselist.push(newExpense);
    }

    let expensename =  document.getElementById("expenseName").value;

    let expensetype = document.getElementById("expenseType").value;
    
    let expenseamount =  parseFloat(document.getElementById("expenseAmount").value);

    if(!isNaN(expenseamount) && expenseamount > 0){
        document.getElementById("expenseAmount").textContent = expenseamount;// mismo comportamiento que el income
    }else{
        alert("Por favor, ingresa un gasto con monto mayor a 0"); //este da OK
    }

    /*const newExpense = new expense(username,expensename,expenseamount,expensetype);
    Expenselist.push(newExpense);
    console.table(Expenselist);*/
    
    const sumadegastos = Expenselist.reduce((total,expense) => total + expense.Amount,0)

    console.log("testing de gastos "+ sumadegastos);

    const totalExpenseElement = document.getElementById("totalexpensemonth");
    totalExpenseElement.textContent = `Total Expense: ${sumadegastos}`;
    
    tablaexpense.innerHTML +=`
    <tr>
        <td>${newExpense.Name}</td>
        <td>${newExpense.Expname}</td>
        <td>${newExpense.Etype}</td>
        <td>${newExpense.Amount}</td>
    </tr>
`; 
}

//fuera de la función valido el submit con un eventlistener
    formExpense.addEventListener("submit",(ev) =>{
        ev.preventDefault();
        submitExpense() 
    })


const calculatebudget = (totalincome,totalbudget) => {return totalincome - totalbudget}

let totalbudget = calculatebudget (campoIncome,sumadegastos);

console.log(totalbudget);
    

// FALTA VALIDAR BIEN EL SUBMIT
// FALTA ENTENDER COMO PONER EL TOTAL DE EXPENSES EN DONDE TIENE QUE IR
//FALTA HACER EL REDUCE DE LOS DATOS

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
`; */ 