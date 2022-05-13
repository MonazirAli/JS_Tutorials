//document.getElementById("count-el").innerText = 5
let count_el = document.getElementById("count-el");
let save_el = document.getElementById("save-el");
let count = 0; 
function increment1(){
    count++;
    count_el.innerText=count;
    console.log(count);
}

function save1(){
    let countStr=count+" - ";
    save_el.textContent+=countStr;//save_el.innerText+=countStr;
    count_el.textContent=0;
    count=0;
}

