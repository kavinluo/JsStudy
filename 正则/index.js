let msg = 'Hello world!' ;

console.log(msg.charCodeAt(0));
console.log(msg.charCodeAt(1));

console.log(msg.codePointAt(0));


let str = 'gutyuytyu'

console.log(str.includes('t')) // true

console.log(str.startsWith('g')); // true

console.log(msg.endsWith("llo"));

//  repeat() repeat 重复项

console.log('x.repeat(4','x'.repeat(4)); // xxxx

let indent = ''.repeat(4)
let indentLeve = 0
let newindent = indent.repeat(++indentLeve)
console.log(newindent)
