# E-commerce React App

¡Bienvenido a *E-commerce React App*! Este es un proyecto de tienda en línea desarrollado con React como parte del curso de React de CODERHOUSE.

## Descripción del Proyecto

Este proyecto es una aplicación de comercio electrónico que permite a los usuarios:

- Navegar por diferentes categorías de productos.
- Ver un catálogo de productos.
- Visualizar un carrito de compras con un conteo de productos (por ahora hardcodeado).
- Preparar la base para futuras funcionalidades como agregar productos al carrito, gestión de usuarios, pagos, etc.

## Características Principales

- *Barra de Navegación (NavBar):*
  - Lista de categorías clickeables (aún sin funcionalidad de redirección).
  - Logo de la tienda, por el momento solo el titulo.
  - Icono del carrito de compras siempre visible.
  
- *Widget del Carrito (CartWidget):*
  - Icono de carrito.
  - Indicador numérico (hardcodeado) mostrando la cantidad de productos en el carrito.

- *Contenedor de Productos (ItemListContainer):*
  - Recibe una prop greeting y muestra un mensaje de bienvenida.
  - Preparado para mostrar una lista de productos en el futuro.

## Tecnologías Utilizadas

- *React*: Biblioteca para construir interfaces de usuario.
- *Vite*: Herramienta de desarrollo rápida que proporciona un servidor de desarrollo y empaquetado eficiente.
- *JavaScript (JSX)*: Para construir los componentes de React.
- *CSS*: Para estilizar los componentes y la aplicación.
- *HTML*: Estructura básica de la aplicación en el archivo index.html.

## Estructura del Proyecto

- *node_modules/*: módulos.
- *src/*: Carpeta principal del código fuente.
  - *components/*: Contiene los componentes reutilizables de la aplicación.
    - *NavBar.jsx*: Componente de la barra de navegación.
    - *CartWidget.jsx*: Componente del icono del carrito.
    - *ItemListContainer.jsx*: Componente contenedor para mostrar productos.
  - *App.jsx*: Componente principal que integra los componentes.
  - *App.css*: Estilos para la aplicación.
  - *index.css*: Estilos globales adicionales.
  - *main.jsx*: Punto de entrada de la aplicación.
- *public/*: Archivos públicos y activos estáticos.
- *package.json*: Información del proyecto y dependencias.
- *vite.config.js*: Configuración de Vite.

## Uso de la Aplicación

Al abrir la aplicación, deberías ver la barra de navegación en la parte superior con el logo de la tienda, las categorías y el icono del carrito con un número fijo.
Debajo de la barra de navegación, verás el mensaje de bienvenida proporcionado por ItemListContainer.
Actualmente, las categorías y el carrito no tienen funcionalidad interactiva, pero sirven como base para futuras implementaciones.
