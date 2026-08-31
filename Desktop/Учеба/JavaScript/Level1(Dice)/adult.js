//Задание 2: Проверка на совершеннолетие
//Напишите функцию isAdult, которая принимает один параметр: age (число)
//Если возраст 18 лет или больше — функция должна возвращать true
//Если меньше 18 — возвращать false

function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isAdult(20)); // должно вывести true
console.log(isAdult(15)); // должно вывести false
console.log(isAdult(18)); // должно вывести true (граничное значение)