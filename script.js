var counterDisplayElem = document.querySelector('.input');
var counterMinusElem = document.querySelector('.counter-minus');
var counterPlusElem = document.querySelector('.counter-plus');
var count = 0;

function updatedisplay(){
    counterDisplayElem.value = count;
}

function count1(){
    count++;
    updatedisplay();
}
counterPlusElem.onclick=count1


function count2(){
    count--;
    updatedisplay();
}

counterPlusElem.onclick=count1
counterMinusElem.onclick= count2

updatedisplay();