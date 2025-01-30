# E-commerce React App

¡Bienvenido a *E-commerce React App*! Este es un proyecto de tienda en línea desarrollado con React como parte del curso de React de CODERHOUSE.

## Descripción del Proyecto

Este proyecto es una aplicación de comercio electrónico que permite a los usuarios:

- Navegar por diferentes categorías de productos.
- Ver un catálogo de productos.
- Visualizar detalles de un producto específico.
- Ver un carrito de compras con un conteo de productos.
- Preparar la base para futuras funcionalidades como agregar productos al carrito, gestión de usuarios, pagos, etc.

## Características Principales

### Navegación

- *Barra de Navegación (NavBar):*
  - Lista de categorías clickeables.
  - Logo de la tienda que redirige a la página principal.
  - Icono del carrito de compras siempre visible.

- *Ruteo con React Router:*
  - /: Muestra el catálogo completo de productos.
  - /category/:categoryId: Muestra los productos filtrados por categoría.
  - /item/:itemId: Muestra el detalle de un producto específico.

### Componentes

- *NavBar:* Barra de navegación con enlaces a categorías y carrito.
- *ItemListContainer:* Contenedor que muestra la lista de productos.
- *ItemDetailContainer:* Contenedor que muestra el detalle de un producto.
- *Item:* Componente que muestra la información básica de un producto.
- *ItemDetail:* Componente que muestra información detallada de un producto.
- *CartWidget:* Icono del carrito con contador de productos.

## Tecnologías Utilizadas

- *React:* Biblioteca para construir interfaces de usuario.
- *React Router DOM:* Biblioteca para manejar ruteo y navegación en la aplicación.
- *Vite:* Herramienta de desarrollo rápida que proporciona un servidor de desarrollo y empaquetado eficiente.
- *JavaScript (JSX):* Para construir los componentes de React.
- *CSS:* Para estilizar los componentes y la aplicación.
- *HTML:* Estructura básica de la aplicación en el archivo index.html.

## Estructura del Proyecto

- node_modules/: Módulos de Node.js.
- src/: Carpeta principal del código fuente.
  - components/: Contiene los componentes reutilizables de la aplicación.
    - NavBar.jsx
    - CartWidget.jsx
    - ItemListContainer.jsx
    - ItemDetailContainer.jsx
    - Item.jsx
    - ItemDetail.jsx
  - App.jsx: Componente principal que integra los componentes.
  - App.css: Estilos para la aplicación.
  - index.css: Estilos globales adicionales.
  - main.jsx: Punto de entrada de la aplicación.
- public/: Archivos públicos y activos estáticos.
- package.json: Información del proyecto y dependencias.
- vite.config.js: Configuración de Vite.

## Uso de la Aplicación

Al abrir la aplicación, verás la barra de navegación en la parte superior con el logo de la tienda, las categorías y el icono del carrito con un número fijo. Puedes navegar entre categorías, ver el catálogo completo de productos y acceder al detalle de cada uno de ellos clickeando en el producto