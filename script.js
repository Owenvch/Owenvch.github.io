document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // La etiqueta <html>

    // 1. Cargar el tema guardado en la última visita
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        // Actualizar el emoji al cargar (si es 'dark', mostrar el sol)
        if (savedTheme === 'dark') {
            toggleButton.textContent = '☀️';
        } else {
            toggleButton.textContent = '🌙';
        }
    } else {
        // Si no hay tema guardado, usar el valor por defecto del HTML ('light')
        toggleButton.textContent = '🌙';
    }

    // 2. Manejar el clic del botón
    toggleButton.addEventListener('click', () => {
        let currentTheme = htmlElement.getAttribute('data-theme');
        let newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // Aplicar el nuevo tema
        htmlElement.setAttribute('data-theme', newTheme);
        
        // Guardar la preferencia
        localStorage.setItem('theme', newTheme);

        // Cambiar el emoji del botón
        if (newTheme === 'dark') {
            toggleButton.textContent = '☀️';
        } else {
            toggleButton.textContent = '🌙';
        }
    });
});
