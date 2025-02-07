// Дождёмся полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Отменяем стандартное поведение отправки формы

    // Очищаем предыдущее сообщение
    messageDiv.textContent = '';

    // Получаем значения пароля и подтверждения пароля
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Валидация: проверка совпадения паролей
    if (password !== confirmPassword) {
      messageDiv.textContent = 'Пароли не совпадают!';
      messageDiv.style.color = 'red';
      return;
    }

    // Если дополнительные проверки не требуются, выводим сообщение об успешной регистрации
    messageDiv.textContent = 'Регистрация прошла успешно!';
    messageDiv.style.color = 'green';

    // Опционально: очистка формы после успешной регистрации
    form.reset();
  });
});
