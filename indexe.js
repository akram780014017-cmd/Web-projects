
const themeToggleBtn = document.getElementById('theme-toggle-desktop');
const bodyElement = document.body;


if (localStorage.getItem('theme') === 'dark') {
    bodyElement.classList.add('dark-theme');
    themeToggleBtn.querySelector('i').textContent = '☀️';
}


themeToggleBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    
   
    bodyElement.classList.toggle('dark-theme');
    
    const icon = themeToggleBtn.querySelector('i');
    
    if (bodyElement.classList.contains('dark-theme')) {
        icon.textContent = '☀️'; 
        localStorage.setItem('theme', 'dark');
    } else {
        icon.textContent = '🌙'; 
        localStorage.setItem('theme', 'light');
    }
});