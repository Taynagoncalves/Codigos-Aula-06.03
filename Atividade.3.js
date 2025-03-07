/*Curso de Desenvolviemento de Sistema
Professora - Júlia
SENAI
Estudante: Tayna 
---------------------------------------------------------------------------------------------
OBJETIVO: Crie um programa que receba o nome do aluno, o nome da UC, a nota do aluno e
retorne seu desempenho. Considere que:
0 a 6 = Baixo desempenho
6 a 8 = Bom desempenho
8 a 10 = Excelente desempenho
---------------------------------------------------------------------------------------------
*/

 let nomeAluno = "Tayna";
 let nomeUC =  "Matematica";
 let nota = 10;

   if(nota >= 0 && nota <= 6){
      console.log("O aluno", nomeAluno,  "da UC", nomeUC, "teve um baixo desempenho");
   } else if(nota >= 6 && nota <= 8){
      console.log("O aluno", nomeAluno, "da UC", nomeUC, "teve um bom desempenho ");
   }  
     else if(nota >= 8 && nota <= 10){
        console.log("O aluno", nomeAluno, "da UC", nomeUC, "teve um execelente desempenho"); 
           
     }