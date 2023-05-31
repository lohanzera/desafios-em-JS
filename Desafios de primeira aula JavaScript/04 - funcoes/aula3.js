
function calcularImc(peso, altura) {
    return peso / Math.pow(altura , 2);
}

function classificarImc(IMC){
   
    if (IMC <18.5){
        return'Abaixo do peso';
    } else if (IMC >=18.5 && IMC <25) {
        return'Peso normal';
    } else if (IMC >= 25 && IMC < 30){
        return'Acima do peso';
    } else if (IMC >= 30 && IMC <40){
        return'Obeso';
    } else {
        return'Obesidade grave';
    }
}

(    function (){
const peso = 64.45; altura = 1.72;
const IMC = calcularImc(peso, altura);

console.log(IMC.toFixed(2));
console.log(classificarImc(IMC));

})();