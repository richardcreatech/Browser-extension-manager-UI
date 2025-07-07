const toggleMe = document.querySelectorAll('.toggleMe');

for (let i of toggleMe) { 
    i.addEventListener('click', () => {
        i.classList.toggle('hiddenToggle');
    });
}