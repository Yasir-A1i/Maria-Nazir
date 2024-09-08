const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener('click', () => {
    btn.style.left = '5px';
    btn.style.right = 'auto'; // Reset right
    btn.style.width = '80px'; // Reset right
});

btn2.addEventListener('click', () => {
    btn.style.left = '100px'; // Move 100px from the left
    btn.style.right = 'auto'; // Reset right
    btn.style.width = '100px';
});

btn3.addEventListener('click', () => {
    btn.style.left = 'auto'; // Reset left
    btn.style.right = '5px';
    btn.style.width = '120px'; // Align to the right
});