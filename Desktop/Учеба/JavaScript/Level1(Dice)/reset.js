//Задание 5: Перезапись объекта (Сброс)
//Напишите функцию resetUser, которая принимает объект user
//Внутри функции переопределите параметр user, присвоив ему совершенно новый объект { name: "Guest", age: 0 }

function resetUser(user) {
    user = { name: "Guest", age: 0 };
}

// Проверка работы функции
let currentUser = { name: "Иван", age: 40 };
console.log("До вызова функции:", currentUser); // { name: "Иван", age: 40 }

resetUser(currentUser);
console.log("После вызова функции:", currentUser); // ?
console.log("Изменилось ли имя?", currentUser.name); // ?