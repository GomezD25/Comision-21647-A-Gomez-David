
// Función para actualizar la vista previa de la imagen
document.getElementById('imagenLink').addEventListener('input', function() {
    var imageUrl = this.value;
    var imagenPreview = document.getElementById('imagenPreview');
    
    if (imageUrl.trim() === '') {
        // Si el campo está vacío, ocultar la vista previa de la imagen
        imagenPreview.style.display = 'none';
    } else {
        // Si se ingresó un enlace, mostrar la vista previa de la imagen
        imagenPreview.style.display = 'block';
        imagenPreview.src = imageUrl;
    }
});