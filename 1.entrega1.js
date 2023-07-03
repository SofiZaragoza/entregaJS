// Tool to calculate your actual budget 


let totalExpenses = 0;
let budget = 0;

//primero pedirmos el dato del totalincome que va a restar el usuario

let income = parseFloat(prompt("Indique su ingreso mensual")); //parseamos ya que son número + floeat porque son comas

// No aceptamos budget en negativo, esto ya sería estar deuda (puede ser para más adelante). Ponemos un While para que 
//sea mayor a 0 el dato que queremos repetir

while(income >= 0){
    if (income > 0 ){
        alert("Su ingreso total es: "+ income +"$");
        break;
    }else{
        alert ("El ingreso no puede ser menor o igual a 0. Por favor, vuelva a ingresar este campo");
    }
income = parseFloat(prompt("Indique su ingreso mensual"));
}

// hacer que solo sean mayor a cero  >>>> <input type="text" pattern="[0-9]{10}" />

//We will request the expenses data, they will need several, we place 3 times the option to request expense 

let expense1 = parseFloat(prompt("Ingrese su primer gasto")); //Me falta entender como simplicficar el pedido de data y que vaya todo al addexpense
let expense2 = parseFloat(prompt("Ingrese su segundo gasto"));
let expense3 = parseFloat(prompt("Ingrese su tercer gasto"));


const addExpense = (dato1,dato2,dato3) => {return dato1+dato2+dato3} 
   
let resultadodesuma = parseFloat(addExpense (expense1,expense2,expense3));

    alert ("El subtotal de sus gastos es: "+ resultadodesuma+"$");
    console.log("El subtotal: " + resultadodesuma);

// We are going to show the actual result of the current budget 

const calculatebudget = (totalincome,totalbudget) => {return totalincome - totalbudget}

let totalbudget = calculatebudget (income,resultadodesuma);

console.log(totalbudget);

//alert ("El total de su budget es: "+ totalbudget +"$"); 

if (totalbudget <0){
    alert ("Usted se ha excedido de su budget por:"+ totalbudget +"$.");
}else{
    alert("Su budget disponible en este mes es de: "+ totalbudget+"$.");
}