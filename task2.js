// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const input = document.querySelector('#userNameInput');
const button = document.querySelector('#getUserButton');
const cityEl = document.querySelector('#userCity');

if (!input || !button || !cityEl) {
  console.error('Task2: Required DOM elements not found.');
} else {
  button.addEventListener('click', () => {
    const name = input.value.trim();
    if (!name) {
      cityEl.textContent = 'Enter user name';
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((users) => {
        const user = users.find(
          (u) => u.name.toLowerCase() === name.toLowerCase()
        );
        if (!user) {
          cityEl.textContent = 'User not found';
        } else {
          cityEl.textContent = user.address?.city || 'City not found';
        }
      })
      .catch((error) => {
        console.error('Fetch users failed:', error);
        cityEl.textContent = 'Failed to load user info';
      });
  });
}