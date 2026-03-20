// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 


const list = document.querySelector('ul.usersList');
if (!list) {
  console.error('No found!');
} else {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((users) => {
      list.innerHTML = users.map((u) => `<li>${u.name}</li>`).join('');
    })
    .catch((error) => {
      console.error('Fetch users failed:', error);
      list.innerHTML = '<li>Failed to load users</li>';
    });
}