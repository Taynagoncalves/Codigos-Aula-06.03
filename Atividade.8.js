/*Curso de Desenvolviemento de Sistema
Professora - Júlia
SENAI
Estudante: Tayna 
---------------------------------------------------------------------------------------------
OBJETIVO: Faça um programa que receba 10 números inteiros, calcule e mostre a quantidade
de números pares e a quantidade de números ímpares.
---------------------------------------------------------------------------------------------
*/
   

 let numeros = [7, 19, 22, 88, 102, 32, 90, 111, 99, 2];
 let par = 0;
 let impar = 0; 
 
 for (let i = 0; i < numeros[i] ; i++) {
    if (numeros[i] % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}

console.log("Quantidade de números pares: " + par);
console.log("Quantidade de números ímpares: " + impar);


