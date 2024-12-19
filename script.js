document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.nav-button.active').classList.remove('active');
        button.classList.add('active');
        
    });
});
