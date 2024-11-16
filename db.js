// db.js
const mysql = require('mysql2');

// Створення підключення
const connection = mysql.createConnection({
    host: 'localhost', // або інший хост
    user: 'root',      // ваш MySQL користувач
    password: 'ваш_пароль', // замініть на свій пароль
    database: 'wishlist_app' // назва вашої бази даних
});

// Перевірка підключення
connection.connect((err) => {
    if (err) {
        console.error('Помилка підключення до бази даних:', err.message);
    } else {
        console.log('Підключення до бази даних успішне!');
    }
});

module.exports = connection;
