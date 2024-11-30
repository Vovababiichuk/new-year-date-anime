const countdownText = document.getElementById("countdownText");
const countdownElement = document.getElementById("countdown");
const yearElement = document.getElementById("year");
const countdownButton = document.getElementById("countdownButton");
const countdownContainer = document.getElementById("countdownContainer");

function getTimeRemaining() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const nextYear = new Date(currentYear + 1, 0, 1);
  const timeRemaining = nextYear - now;

  return {
    timeRemaining,
    currentYear,
    days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((timeRemaining / (1000 * 60)) % 60),
    seconds: Math.floor((timeRemaining / 1000) % 60),
  };
}

function updateCountdownDisplay() {
  const { days, hours, minutes, seconds } = getTimeRemaining();

  countdownText.textContent = "Час до наступного Нового року:";
  countdownElement.textContent = `${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд`;
}

document.addEventListener("DOMContentLoaded", () => {
  const { currentYear } = getTimeRemaining();
  yearElement.textContent = currentYear + 1;
});

countdownButton.addEventListener("click", () => {
  countdownContainer.style.display = "block";
  countdownButton.style.opacity = "0";

  // Update the countdown immediately before the interval starts
  updateCountdownDisplay();

  const intervalId = setInterval(() => {
    const { timeRemaining } = getTimeRemaining();

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      countdownElement.textContent = "Щасливого Нового року!";
    } else {
      updateCountdownDisplay();
    }
  }, 1000);
});
