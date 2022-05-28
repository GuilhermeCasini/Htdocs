

let palavra = 'Dulcineia';

(function(){
 
  document.write(`Esta palavra tem ${palavra.length} caracteres <br>`);
  document.write(`Esta palavra  ${palavra} ficou ${palavra.toUpperCase()} <br>`);
  document.write(`A letra '${palavra[2]}' é o 3º carácter <br>`);
  document.write(`${palavra} ficou ${palavra.replace(palavra[2], 'X')}`);

})(palavra)