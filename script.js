function updateCountdown() {
   const currentDate = new Date();
   const currentYear = currentDate.getFullYear();
   const nextYear = new Date(currentYear + 1, 0, 1);
   const timeRemaining = nextYear.getTime() - currentDate.getTime();

   const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

   const countdownText = document.getElementById('countdownText');
   const countdownElement = document.getElementById('countdown');

   countdownText.textContent = 'Час до наступного Нового року:';
   countdownElement.textContent = `${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд`;
}

document.getElementById('countdownButton').addEventListener('click', function () {
   const countdownContainer = document.getElementById('countdownContainer');

   countdownContainer.style.display = 'block';
   this.style.opacity = '0';

   // Оновлюємо лічильник кожну секунду
   const countdownInterval = setInterval(function () {
      updateCountdown();

      // Перевіряємо, чи наступив Новий рік
      if (timeRemaining <= 0) {
         clearInterval(countdownInterval);
      }
   }, 1000);
});
