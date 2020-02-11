function calc() {
    //получаем ссылку на элемент Select (Тип дизайна)
    let calc_list = document.getElementById("calc_list");
    //получаем ссылку на чекбокс (Требуется верстка?)
    let result = document.getElementById("result"); 

    let price = 0;
    price += parseInt(calc_list.options[calc_list.selectedIndex].value);
   

    result.innerHTML = price;
}