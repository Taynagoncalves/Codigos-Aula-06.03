/*Curso de Desenvolviemento de Sistema
Professora - Júlia
SENAI
Estudante: Tayna 
---------------------------------------------------------------------------------------------
OBJETIVO: Faça um programa que receba 10 números inteiros, calcule e mostre a quantidade
de números pares e a quantidade de números ímpares.
---------------------------------------------------------------------------------------------
*/
let numeros = [1,2,3,4,5,6,7,8,9,10];
let pares = 0;
let impares = 0;
for(let i=0; i<10; i++){
    if(numeros[i]%2 ==0){
        pares++;
    }
    else{
        impares++;
    }
}