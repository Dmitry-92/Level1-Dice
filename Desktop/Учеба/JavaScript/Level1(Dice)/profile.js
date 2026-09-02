//Задание 4: Безопасное обновление профиля
//Напишите функцию updateAge, которая принимает два параметра:
//1. user — объект пользователя вида { name: "Алексей", age: 25 }
//2. newAge — новое число для возраста
//Условие: Функция должна изменить возраст внутри объекта и вернуть этот же измененный объект

function updateAge(user, newAge) {
    user.age = newAge;
    return user;
}

// Проверка работы функции
const person = { name: "Анна", age: 30 };
console.log("До вызова функции:", person); // { name: "Анна", age: 30 }

const updatedPerson = updateAge(person, 31);

console.log("После вызова функции - person:", person); // { name: "Анна", age: 31 }
console.log("После вызова функции - updatedPerson:", updatedPerson); // { name: "Анна", age: 31 }
console.log("Один ли это объект?", person === updatedPerson); // true (ссылаются на один объект)