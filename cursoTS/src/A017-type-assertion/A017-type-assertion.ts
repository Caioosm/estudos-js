//condicional
const body1 = document.querySelector('body');
if(body1) body1.style.background = 'red';

//Non-null assertion (!)
const body2 = document.querySelector('body')!;
if(body2) body2.style.background = 'red';

//Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
if(body3) body3.style.background = 'red';
