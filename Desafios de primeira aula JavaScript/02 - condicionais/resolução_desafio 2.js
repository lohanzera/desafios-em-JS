
const gas = 4.95; eta = 2.80; car = 5; km = 200;
const tipo_combusvivel = 'gasolina';


const litro = km / car;

if (tipo_combusvivel === 'gasolina') {
    const gasto = litro * gas;
    
    console.log(gasto.toFixed(2));

} else { 
    const gasto = litro * eta;

    console.log(gasto.toFixed(2));
}


