/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = NaN; //insira o valor final da variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

estudo = "Olá" / 500; //aqui foi feita a atribuição no escopo global e o tipo foi modificado com a estrutura condicional if que recebeu como parâmetro o método Number.isNaN

if (Number.isNaN(estudo)) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/

