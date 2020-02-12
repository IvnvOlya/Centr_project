"use strict";

function calc() {
    
    let calc_list = document.getElementById("calc_list");
    
    let result = document.getElementById("result"); 

    let price = 0;
    price += parseInt(calc_list.options[calc_list.selectedIndex].value);
   

    result.innerHTML = price;
}

