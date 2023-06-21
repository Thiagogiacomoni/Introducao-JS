/*
Entre 0 - 11 -> Bom dia
entra 12 - 17 -> Boa tarde
entra 18 - 23 -> Boa noite
*/

// if pode ser usado sozinho
// sempre que utilizo a palavra else preciso de um if antes
// eu posso ter quantos else if eu quiser na checagem
// só se pode ter um else na cheagem 
// Podemos usar condições sem else if, utilizando apenas if e else 

// const hora = 10;
// if (hora >= 0 && hora <= 11) {
//     console.log('Bom dia!');
// } else if (hora <= 17 ) {
//     console.log('Boa tarde!');
// } else if (hora <= 23) {
//     console.log('Boa noite!');
// } else {
//     console.log('Está hora é inválida')
// }

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}