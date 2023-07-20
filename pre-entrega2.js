// Tool to calculate your actual budget 

//let totalExpenses = 0; //lo comento porque viene de lo aprendido viejo
let budget = 0;

//primero pedirmos el dato del totalincome que va a restar el usuario

let income = parseFloat(prompt("Indique su ingreso mensual")); //parseamos ya que son número + floeat porque son comas

// No aceptamos budget en negativo, esto ya sería estar deuda (puede ser para más adelante). Ponemos un While para que 
//sea mayor a 0 el dato que queremos repetir

while(income != isNaN(income)){
    if (income > 0 ){
        alert("Su ingreso total es: "+ income +"$");
        break;
    }else{
    alert ("El ingreso no puede ser menor o igual a 0. Por favor, vuelva a ingresar este campo");
    }
income = parseFloat(prompt("Indique su ingreso mensual"));
}


// ENTREGA 2 


const Expenselist = []; //Array para almacenar datos

//Creo una constante para que se haga lista (ya esta const Expenselist = [];)
//Hago un class para poner los conceptos que necesito de la expense

class expense {
    constructor (name,amount,type){
        this.name = name;
        this.amount = amount;
        this.Etype = type;
    }
    showexpense(){
        alert ("El gasto "+ this.name + " de " + this.amount + "$ ha sido ingresado")
    }
}

for(const expense of Expenselist){
    expense.showexpense();//muestra todos los expenses cargados con el alert de arriba
}

//Pido los datos al usuario del expense para que siga la estructura de arriba 
function createExpense (){
    let name = prompt("Ingrese el nombre del gasto");
    let amount = parseFloat(prompt("Ingrese el monto del gasto"));
        /*if (amount < 0) {
            alert("Por favor, ingrese un monto válido mayor a 0.")}
    
       /* ó 
        if (isNaN(amount)){
            alert ("Error, this should be a number");
            createExpense()
        }
    }*/
    let type = prompt("Ingrese el categoría del gasto");
    const newExpense = new expense(name,amount,type);
    Expenselist.push(newExpense);
}

let opcion = prompt("¿Quieres agregar un nuevo gasto? Si/No").toLowerCase();

while (opcion != "no") {
    createExpense();
    opcion = prompt('¿Quieres agregar un nuevo gasto? Si/No').toLowerCase();
}

console.table(Expenselist);

/*for(const expense of Expenselist){
    expense.showexpense();//muestra todos los expenses cargados con el alert de arriba. Unos por uno te repasa el alert de cada gasto 
}*/

/*Yo solo quiero mostrar el total de gastos en un alert. en el REDUCE tenemos que poner el array como primer factpr y después la propiedad 
que esta adentro del array Expenselist es el array y expense es la estructura del class */
const sumadegastos = Expenselist.reduce((total,expense) => total + expense.amount,0)

alert("el total de todos los gastos ingresados es "+ sumadegastos);
console.log("el total de todos los gastos ingresados es "+ sumadegastos);

//primera entrega para mos

const calculatebudget = (totalincome,totalbudget) => {return totalincome - totalbudget}

let totalbudget = calculatebudget (income,sumadegastos);

console.log(totalbudget);

//alert ("El total de su budget es: "+ totalbudget +"$"); 

if (totalbudget <0){
    alert ("Usted se ha excedido de su budget por:"+ totalbudget +"$.");
}else{
    alert("Su budget disponible en este mes es de: "+ totalbudget+"$.");
}

