# coderReact
# E-commerce de Especias, Sales y Rubs Gourmet
# Cecilia Zucchino

Este proyecto es un e-commerce desarrollado en React para una tienda de especias, sales y rubs gourmet. El enfoque principal ha sido la funcionalidad del sitio, mientras que el estilo se ha implementado utilizando CSS vanilla. Aunque Bootstrap está instalado en el proyecto, no se utiliza actualmente.

El proyecto incluye las siguientes características:

- Navegación entre páginas
- Visualización de productos
- Carrito de compras
- Proceso de checkout


Siguiendo los requisitos del enunciado en https://docs.google.com/document/d/1LCUJENfyEWRuAizTOcSmvCkrX7yIMtiKAteic3uKzsU/edit?pli=1 

User story/brief: 
● Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles. 
● Desde el detalle se debe poder ver la descripción, foto y precio e ingresar al carrito una cantidad indicada de unidades. 
● Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la 	orden con el precio total. 
● Al ingresar su nombre, apellido, teléfono y e-mail debe activarse el botón de ‘realizar compra’.
● Al clickear ‘realizar compra’ deberá guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden. 

Aclaraciones:
○ Contar con algún acceso visible a la vista de carrito (idealmente en el menú de navegación) que debe alojarse en el route /cart. 
- Si el carrito está vacío el ícono no será renderizado y por lo tanto no se verá pero de todas maneras se puede acceder al mismo desde /cart y mostrará un mensaje diciendo que está vacío con un botón para volver al inicio (además de la navbar)
- Si el carrito tiene uno o más productos se verá a la izquierda en la navbar y al hacer click en el mismo se redireccionará a /cart
- Si un producto no tiene stock no se puede agregar al carrito porque se inhabilita el botón "Agregar al carrito"
- Además, no se puede agregar más unidades de las que hay en stock porque el contador del detalle solo llega hasta el numero que hay de stock


Estructura del Proyecto
La estructura de archivos y carpetas principales del proyecto es la siguiente:

├── public/              # Imagenes
├── src/                 
│   ├── components/      # Componentes reutilizables
│   ├── context          # Context del proyecto
|   |__ Data             # products.js. Array de productos. No lo borro porque lo necesito en caso de querer cargar collection a Firebase con helpers
│   ├── App.jsx          # Componente principal de la aplicación
|   |── App.css          # Estilos del componente principal de la aplicación
│   └── index.js         # Punto de entrada
|   └── services         # firebaseConfig ,helpers (llenar collection de Firestore * ) y deleteOrders (vaciar collection de Firestore)
├── package.json         # Archivo de configuración de dependencias y scripts
└── README.md            # Este archivo




