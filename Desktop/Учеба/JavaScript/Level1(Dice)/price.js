//Задание 3: Форматирование цены
//Напишите функцию formatPrice, которая принимает два параметра: 
//amount (число) и currency (строку с символом валюты)
//Функция должна возвращать строку в формате: "<amount> <currency>"

function formatPrice(amount, currency) {
    return amount + " " + currency;
}

console.log(formatPrice(500, "₽"));    // "500 ₽"
console.log(formatPrice(100, "$"));    // "100 $"
console.log(formatPrice(2500, "€"));   // "2500 €"