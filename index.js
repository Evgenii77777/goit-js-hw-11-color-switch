const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
}
let nonStop;
refs.btnStart.addEventListener('click', () => {
    nonStop = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)-1];
    }, 1000)
    refs.btnStop.removeAttribute('disabled');
    refs.btnStart.setAttribute('disabled', true);
});

refs.btnStop.addEventListener('click', () => {
    clearInterval(nonStop);
    refs.btnStart.removeAttribute('disabled');
    
})