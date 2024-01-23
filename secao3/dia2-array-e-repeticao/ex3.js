const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1){
    let numbersDisplay = numbers[index]
    console.log(numbersDisplay);
}
let numbersSum = 0;

for (let index = 0; index < numbers.length; index += 1){
    numbersSum += numbers[index];
}

console.log(numbersSum);


let numbersMedia = numbersSum / numbers.length;
console.log(numbersMedia);

if (numbersMedia > 20) {
    console.log (`O valor da média aritmética é maior que 20`)
} else {
    console.log (`O valor da média aritmética é menor que 20`)
}

let winnerNumber = numbers[0];
for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] > winnerNumber){
     winnerNumber = numbers[index];
    }
}
console.log(winnerNumber);

let oddNumbers = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
      oddNumbers += 1;
    }
     if (oddNumbers !== 0){
        console.log(` O total de numeros ímpares é ${oddNumbers}.`)

     }else {
        console.log(`Nenhum valor ímpar encontrado`);
    }
    } 