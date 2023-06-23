function getDiaSemanaTexto (diaSemana) {
let diaSemanaTexto;

    switch(diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sabado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}

function getMes(mesAno) {
    let mesDoAno;

    switch(mesAno) {
    case 0:
        mesDoAno = 'Janeiro';
        return mesDoAno;
    case 1:
        mesDoAno = 'Fevereiro';
        return mesDoAno;
    case 2:
        mesDoAno = 'Março';
        return mesDoAno;
    case 3:
        mesDoAno = 'Abril';
        return mesDoAno;
    case 4:
        mesDoAno = 'Maio';
        return mesDoAno;
    case 5:
        mesDoAno = 'Junho';
        return mesDoAno;
    case 6:
        mesDoAno = 'Julho';
        return mesDoAno;
    case 7:
        mesDoAno = 'Agosto';
        return mesDoAno;
    case 8:
        mesDoAno = 'Setembro';
        return mesDoAno;
    case 9:
        mesDoAno = 'Outubro';
        return mesDoAno;
    case 10:
        mesDoAno = 'Novembro';
        return mesDoAno;
    case 11:
        mesDoAno = 'Dezembro';
        return mesDoAno;
    default:
        mesDoAno = '';
        return mesDoAno;
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
const mes = data.getMonth();
const mesDoAno = getMes(mes);
const anoAtual = data.getFullYear();
document.getElementById('meuH1').innerHTML = `${diaSemanaTexto}, ${diaSemana} de ${mesDoAno} de ${anoAtual} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;

