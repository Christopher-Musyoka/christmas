// Snow generator
const snowContainer = document.querySelector('.snow');
const snowflakesCount = 50;

for (let i = 0; i < snowflakesCount; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.fontSize = (Math.random() * 24 + 12) + 'px';
  snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
  snowflake.style.opacity = Math.random();
  snowContainer.appendChild(snowflake);
}