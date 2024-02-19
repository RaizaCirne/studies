let fistName = 'Joe';

// 1ª Exemplo: usando aspas 
const email = 'Hi ' + fistName +  ', \nThe meeting is confirmed! Andre'; // Essa escrita não é legal

// 2ª Exemplo: usando crase 
const email2 = `Hi ${fistName}, 
The meeting is confirmed! 
Andre`;


console.log(email);
console.log(email2);

// Template Literals: utilizar quando tiver a necessidade de manter a formatação da forma que você utiliza o código. 
