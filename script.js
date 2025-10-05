// --- Lógica del Carrusel (Slider) ---
const slides = document.querySelectorAll('.carrusel-slide');
let currentSlide = 0;

function showSlide(index) {
    // Oculta todas las diapositivas
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    // Muestra la diapositiva actual
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Inicializa el carrusel
showSlide(currentSlide);
// Añade los event listeners a los botones (necesitas añadir los botones en HTML)
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Automático (opcional)
setInterval(nextSlide, 5000); // Cambia cada 5 segundos

// --- Lógica del Formulario ---
document.getElementById('formulario-pedido').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
    const mensajeEnvio = document.getElementById('mensaje-envio');

    // Validación simple
    if (!nombre || !email || !producto || cantidad < 1) {
        alert('Por favor, complete todos los campos y asegúrese de que la cantidad es válida.');
        return;
    }

    // Aquí iría la lógica para ENVIAR los datos (por ejemplo, a un servidor o un servicio de email)
    console.log('Datos del Pedido:', { nombre, email, producto, cantidad });

    // Muestra un mensaje de éxito y resetea el formulario
    mensajeEnvio.style.display = 'block';
    this.reset();
    
    // Oculta el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeEnvio.style.display = 'none';
    }, 3000);
});