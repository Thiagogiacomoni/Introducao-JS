// Funções recursivas
// a função chama ela mesma
// tem um limite

function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);