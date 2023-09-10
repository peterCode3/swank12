function addBoxShadow(element) {
  setTimeout(() => {
    element.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
  }, 3000);
}

addBoxShadow(document.querySelector(".circle-content"));



let count = 0;
const digitElement = document.getElementById('digit');
const duration = 3000; // 3 seconds
const interval = 30; // Update every 30 milliseconds

const step = (100 / (duration / interval));

function updateCounter() {
  digitElement.textContent = Math.round(count);
  count += step;

  if (count > 100) {
    clearInterval(counterInterval);
    count = 100;
  }
}

const counterInterval = setInterval(updateCounter, interval);
