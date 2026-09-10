// Задание 1: Автомобиль
// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость)

const car = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2020,
    averageSpeed: 90 // км/ч
};

function showCarInfo(carObj) {
    console.log(`Автомобиль: ${carObj.manufacturer} ${carObj.model}`);
    console.log(`Год выпуска: ${carObj.year}`);
    console.log(`Средняя скорость: ${carObj.averageSpeed} км/ч`);
}

// Проверка
showCarInfo(car);

// Функция для подсчета необходимого времени для преодоления расстояния
// Учет: через каждые 4 часа дороги водителю необходим перерыв на 1 час
function calculateTravelTime(carObj, distance) {
    // Чистое время в пути (в часах)
    const travelTime = distance / carObj.averageSpeed;

    // Количество полных 4-часовых отрезков (сколько перерывов нужно)
    const restCount = Math.floor(travelTime / 4);

    // Общее время = время в пути + время на перерывы
    const totalTime = travelTime + restCount;
    return totalTime;
}

// Проверка
const distance = 1000; // км
const time = calculateTravelTime(car, distance);
console.log(`\nРасстояние: ${distance} км`);
console.log(`Необходимое время: ${time.toFixed(2)} ч`);