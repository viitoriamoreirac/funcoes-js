
function calcularMaiorMenor() {
    let a = parseInt(document.getElementById('valor1').value);
    let b = parseInt(document.getElementById('valor2').value);
    let c = parseInt(document.getElementById('valor3').value);
    let d = parseInt(document.getElementById('valor4').value);
    let e = parseInt(document.getElementById('valor5').value);
  
    let valores = [a, b, c, d, e];
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);
  
    document.getElementById("resultado-maior-menor").innerHTML = "Maior valor: " + maior + "<br>Menor valor: " + menor;
  }
  
  function verificarVogal() {
    let c = document.getElementById('caractere').value;
  
    let vogais = ['a', 'e', 'i', 'o', 'u'];
  
    if (vogais.includes(c.toLowerCase())) {
      document.getElementById("resultado-vogal").innerHTML = "É uma vogal";
    } else {
      document.getElementById("resultado-vogal").innerHTML = "Não é uma vogal";
    }
  }
  
  function calcularLimites() {
    let li = parseInt(document.getElementById('limite-inferior').value);
    let ls = parseInt(document.getElementById('limite-superior').value);
  
    let somatorio = 0;
    let numerosPares = [];
  
    for (let i = li + 1; i < ls; i++) {
      if (i % 2 === 0) {
        numerosPares.push(i);
        somatorio += i;
      }
    }
  
    document.getElementById("numeros-pares").innerHTML = "Números pares no intervalo: " + numerosPares.join(", ");
    document.getElementById("somatorio").innerHTML = "Somatório dos números pares: " + somatorio;
  }
  
  function ordenarValores() {
    let a = parseInt(document.getElementById('valor-a').value);
    let b = parseInt(document.getElementById('valor-b').value);
    let c = parseInt(document.getElementById('valor-c').value);
  
    let ordenados = [a, b, c];
    ordenados.sort(function(x, y) {
      return x - y;
    });
  
    document.getElementById("resultado-ordem").innerHTML = "Valores em ordem crescente: " + ordenados.join(", ");
  }
  
  function verificarPositivoNegativo() {
    let x = parseInt(document.getElementById('valor-x').value);
  
    if (x > 0) {
      document.getElementById("resultado-positivo-negativo").innerHTML = "É um valor positivo";
    } else if (x < 0) {
      document.getElementById("resultado-positivo-negativo").innerHTML = "É um valor negativo";
    } else {
      document.getElementById("resultado-positivo-negativo").innerHTML = "É um valor neutro";
    }
  }
  
  function verificarParImpar() {
    let y = parseInt(document.getElementById('valor-y').value);
  
    if (y % 2 === 0) {
      document.getElementById("resultado-par-impar").innerHTML = "É um número par";
    } else {
      document.getElementById("resultado-par-impar").innerHTML = "É um número ímpar";
    }
  }  


  
  