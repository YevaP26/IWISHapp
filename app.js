// index.js або app.js
const express = require('express');
const app = express();
const db = require('./db'); // підключення до файлу db.js

app.use(express.json()); // для обробки JSON-запитів

// Приклад GET-запиту для перевірки
app.get('/', (req, res) => {
    res.send('Привіт, база даних працює!');
});

// Приклад POST-запиту для додавання нового користувача
app.post('/users', (req, res) => {
    const { username, email, password } = req.body;
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            console.error('Помилка при додаванні користувача:', err.message);
            res.status(500).json({ error: 'Помилка при додаванні користувача' });
        } else {
            res.status(201).json({ message: 'Користувач доданий успішно', userId: result.insertId });
        }
    });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено на порту ${PORT}`);
});
