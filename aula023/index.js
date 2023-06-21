/*


false -> 0, '', "", ``, null, undefined, NaN

*/

// functionfalaOi() {
//     return 'Oi';
// }
// let vaiExecutar = 'Thiago';
// 
// console.log(vaiExecutar && falaOi());

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log( a || b || c || d || e);
