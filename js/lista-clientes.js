document.addEventListener('DOMContentLoaded', function() {
    const tablaBody = document.getElementById('clientes-tabla-body');
    const noClientesMsg = document.getElementById('no-clientes');

    // Cargar clientes desde LocalStorage
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    if (clientes.length === 0) {
        // Si no hay clientes, mostrar el mensaje
        noClientesMsg.style.display = 'block';
    } else {
        // Si hay clientes, ocultar el mensaje y poblar la tabla
        noClientesMsg.style.display = 'none';
        clientes.forEach(cliente => {
            const fila = document.createElement('tr');

            fila.innerHTML = `
                <td>${cliente.nombre}</td>
                <td>${cliente.email}</td>
                <td>${cliente.destino}</td>
                <td>${cliente.personas}</td>
                <td>${cliente.fecha}</td>
                <td>${cliente.comentarios}</td>
            `;
            tablaBody.appendChild(fila);
        });
    }
});