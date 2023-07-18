const header = document.querySelector('.countdown-display');
const timer = setInterval(countDown, 1000);

function countDown() {
  let number = header.textContent;
  if (number > 1) {
    number--;
    header.textContent = number;
  } else {
    header.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  }
}
