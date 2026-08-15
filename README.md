# Paradise Nursery 🌿

**Paradise Nursery** es una aplicación web de comercio electrónico (Single Page Application) desarrollada con React, construida como proyecto final para el certificado de Coursera. La aplicación permite a los usuarios navegar por un catálogo de plantas de interior, categorizadas según sus propiedades, y gestionar su compra mediante un carrito de compras dinámico.

## 🚀 Características Principales

La aplicación consta de tres páginas principales, manejadas mediante enrutamiento del lado del cliente:

1. **Página de Aterrizaje (Landing Page):**
   * Imagen de fondo inmersiva.
   * Información sobre la misión y visión de Paradise Nursery.
   * Botón de "Comenzar" que redirige fluidamente al catálogo.

2. **Catálogo de Productos (Product List):**
   * Muestra una variedad de plantas organizadas en al menos tres categorías (Purificadoras, Aromáticas, Exóticas).
   * Cada tarjeta de producto incluye imagen, nombre, precio y un botón para añadir al carrito.
   * El botón se desactiva y cambia su estado visual una vez que el producto es añadido para evitar duplicados accidentales.

3. **Cesta de Compras (Shopping Cart):**
   * Resumen en tiempo real del costo total y la cantidad de artículos.
   * Capacidad de incrementar o disminuir la cantidad de cada planta individualmente.
   * Opción para eliminar productos específicos del carrito.
   * Botones funcionales para "Continuar Comprando" y "Pagar" (mockup).

## 🛠️ Tecnologías Utilizadas

* **React (v18):** Biblioteca principal para la construcción de la interfaz de usuario.
* **Vite:** Herramienta de construcción rápida y servidor de desarrollo.
* **Redux Toolkit & React-Redux:** Para el manejo predecible del estado global.
* **React Router DOM:** Para la navegación fluida sin recargas de página.

## ⚙️ Instalación y Configuración Local

Si deseas ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/ingdavid72/paradise-nursery.git](https://github.com/ingdavid72/paradise-nursery.git)
