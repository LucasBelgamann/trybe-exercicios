// const myName = "Lucas";
// const birthCity = "Pinhais";
// let birthYear = 2001;
// birthYear = 2030;
// birthCity = "Curitiba";

// console.log(myName, birthCity, birthYear);
// console.log(birthYear);
// console.log(birthCity);

// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof patientEmail);
// console.log(typeof patientAge)

// const base = 5;
// let height = 8;
// const area = (3 * 8);
// const perimeter = base + height + area;

// console.log(base, height, area);
// console.log(area);
// console.log(perimeter);

// const notaDoLucas = 85;

// if (notaDoLucas >= 80) {
//     console.log("Parabéns, você foi aprovada(o)!");
// }
// else if (notaDoLucas < 80 && notaDoLucas >= 60) {
//     console.log("Você está na nossa lista de espera");
// }
// else {
//     console.log("Você foi reprovada(o)");
// }

let estatosDoProcesso = 'reprovada';

switch(estatosDoProcesso) {
    case 'aprovada':
        console.log('Candidato aprovado');
        break;

    case 'lista':
        console.log('Candidato na lista');
        break;

    case 'reprovada':
        console.log('Candidato reprovado');
        break;

    default:
        console.log('não se aplica');  
}
