/* 

Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null.
Оно означает, что «значение не было присвоено».
Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined:

*/ 
const oneExample;  
console.log(oneExample)

let twoExample = 44;
twoExample = underfained;
console.log(twoExample)