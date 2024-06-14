/**
 * 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida,
 *  compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado 
 * no vetor B.
 */

function criaVetor100(){
    let vetor100 = new Array(100);
    for (let i = 0; i < 100; i++) {  
        let valor = Math.floor(Math.random() * 10 - 5); 
        vetor100[i] = valor;
    }
    return vetor100;
}

function removeNulosNegativos(vetor){
    let vetorB = [];
    vetorB = vetor.filter(elemento => elemento > 0);
    console.log(vetor);
    console.log(vetorB);
}

let vetor100 = criaVetor100();
removeNulosNegativos(vetor100);

