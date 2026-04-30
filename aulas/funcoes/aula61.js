//funcao geradora
function* geradora1(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

const g1 = geradora1();
const g2 = geradora2();

function* geradora3(){
    yield function(){
        console.log('Vim do y1');
    }

    yield function(){
        console.log('Vim do y2');
    }
}

const g3 = geradora3();

const func1 = g3.next().value;
const func2 = g3.next().value;

func1();
func2();