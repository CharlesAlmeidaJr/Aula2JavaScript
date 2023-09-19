console.log('---- Array ----')

let array = ['string', 1, true, false, ['array1'], ['array2'], ['array3'],['array4']];
console.log(array);

//forEach
array.forEach(function(item, index){
    console.log (item, index)
});

//push
array.push('novo item');
console.log(array)

//pop - apaga um item do final
array.pop();
console.log(array);

//shift - apaga um item do inicio
array.shift();
console.log(array);

//adiciona um item no inicio
array.unshift('novo item no inicio');
console.log(array)

//retorna o indice 
console.log(array.indexOf(true));

//apaga alguns itens do array
array.splice(array, 3);
console.log(array);

let novoArray = array.slice(0,3);
console.log(novoArray);


console.log('----Objeto----')

let object = {String: 'string', Number: 1, Boolean: true, array: ['array'], objectInterno:{
    objectInterno: 'objeto interno'}}
    console.log(object.Boolean);

var string = object.String;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);


console.log('----Desestruturação de objeto-----')

const {String, Boolean, objectInterno} = object
console.log(String)
console.log(Boolean)
console.log(objectInterno)


console.log('---- Estruturas de decisão if/else -----')
var jogador1 = 1;
var jogador2 = 2;
var placar = true;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'):
console.log('jogadores inválidos');   

if (jogador1 != -1 && jogador2 != -1) {
    if (jogador1 > 0) {
    console.log('jogador 1 marcou ponto');
        if(jogador2 > 0){
            console.log('jogador 2 marcou ponto');
        }
    } else if(jogador2 > 0){
    console.log('jogador 2 marcou ponto');
    } else {
    console.log('ninguem marcou ponto');
    }

    console.log('-----Switch----')

    switch (placar){
        case jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
        case jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
        default:
            console.log('Ninguem ganhou')
    }
}


console.log('----Laços de repetição for-----')

let array2 = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
    
let object2 = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3:
'valor3',}

for (let indice = 0; indice < array2.length; indice++){
    console.log(indice);
}

console.log('----for/in-----')

//for/in executa repetição a partir de uma propriedade
//com array
for (let i in array2){
    console.log(i);
}

//com object
for (i in object2){ //percorre cada propriedade do objeto
    console.log(i);
}

console.log('----for/of-----')

//for/of - executa repetição a partir de valor
//com array
for (i of array2) {
    console.log(i);
}

//com objeto
for (i of object2.propriedade1){
    console.log(i);
}

console.log('----while-----')

var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

console.log('----do/while-----')

a = 0;
do {
    a++;
    console.log(a);
} while (a < 10)

console.log('------Funções------')

function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo);
}
    
mensagem('Tudo certo!','finalizamos');

console.log('------Expressões de Funções------')

//com nomeação
var funcao = function(){
    console.log('Mensagem de função de expressão')
}
funcao();

console.log('------Arrow function------')

var funcao2 =  () => {
    console.log('Sou uma arrow function')
}
funcao2();


    
