# MShop

**MShop** es una plataforma de comercio electrónico creada para la venta de productos electrónicos como computadoras, teléfonos, accesorios y otros dispositivos. Este proyecto es un portafolio personal para demostrar mis habilidades en desarrollo web y está diseñado para ofrecer una experiencia de compra interactiva y dinámica. **MShop** no está destinado a la distribución o uso comercial.

## 🚀 Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características Principales](#características-principales)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Contacto](#contacto)

## 💡 Descripción del Proyecto

**MShop** es una tienda en línea de electrónicos que permite a los usuarios explorar una amplia variedad de productos, añadirlos a su carrito y proceder con el proceso de compra. Está diseñado para ser intuitivo, con una navegación fluida y una experiencia de usuario optimizada.

El proyecto fue creado como parte de mi portafolio personal y no está destinado a la distribución comercial. **MShop** está basado en una arquitectura de front-end responsiva utilizando **React.js**, lo que garantiza una experiencia fluida y adaptable en dispositivos móviles y de escritorio.

## ⚙️ Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **React.js**: Framework de JavaScript para crear interfaces de usuario dinámicas y reactivas.
- **Tailwind CSS**: Framework de CSS para un diseño responsivo y fácil de personalizar.
- **Node.js**: Entorno de ejecución de JavaScript para el backend
- **Express.js**: Framework minimalista para construir APIs y gestionar solicitudes HTTP.
- **MongoDB**: Base de datos NoSQL para almacenar información sobre los productos, usuarios y pedidos.
- **Stripe**: Integración para pagos en línea (si aplica).
- **Git**: Control de versiones.
- **GitHub**: Repositorio y control de código fuente.

## ⭐ Características Principales

1. **Interfaz de usuario dinámica**: Basada en **React.js**, diseñada para ofrecer una experiencia de navegación intuitiva y fluida.
2. **Filtros de búsqueda avanzados**: Los usuarios pueden filtrar productos por categoría, marca, precio, etc.
3. **Carrito de compras**: Los usuarios pueden agregar productos a su carrito y proceder a la compra.
4. **Proceso de pago**: Integración con **Stripe** para gestionar pagos seguros en línea.
5. **Autenticación de usuarios**: Ingreso de usuarios mediante **Firebase** para un manejo de cuentas personalizadas.
6. **Responsive**: Optimización para dispositivos móviles y escritorios, utilizando **Tailwind CSS**.
7. **Gestión de productos**: Panel administrativo para agregar, eliminar y modificar productos.
8. **Comentarios y valoraciones de productos**: Los usuarios pueden dejar opiniones sobre los productos.

## 🔧 Instalación

Para ejecutar el proyecto en tu máquina local, sigue estos pasos:

### 1. Clonar el Repositorio

```bash
git clone https://github.com/Neotrix64/mshop
cd mshop
```

### 2. Instalación de Dependencias

Primero, asegúrate de tener **React, vite** instalado en tu máquina. Luego, instala las dependencias:

```bash
npm install
```

### 3. Configuración de Variables de Entorno

Para que el proyecto funcione correctamente, necesitas configurar algunas variables de entorno, tales como las claves de API de **Firebase**, **Stripe**, y cualquier otro servicio que utilices. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

```env
REACT_APP_STRIPE_API_KEY=your_stripe_api_key
```

### 4. Ejecutar el Proyecto

Una vez que hayas configurado las variables de entorno, ejecuta el proyecto con el siguiente comando:

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`.

## 🛠️ Uso

Al abrir la aplicación, los usuarios podrán:

- Navegar por diferentes categorías de productos.
- Buscar productos utilizando filtros avanzados.
- Agregar productos al carrito de compras.
- Iniciar sesión o registrarse para guardar sus preferencias y compras anteriores.
- Realizar pagos mediante **Stripe**.

### Acciones del Administrador:

Si tienes acceso de administrador, podrás:

- Añadir, editar o eliminar productos del catálogo.
- Gestionar pedidos y ver los detalles de las transacciones.
- Modificar la información de los productos, como precios, descripciones, y fotos.

## 🗂️ Estructura del Proyecto

Aquí te dejo una descripción general de la estructura del proyecto:

```
mshop/
│
├── public/                # Archivos estáticos (íconos, imágenes, etc.)
├── src/                   # Código fuente de la aplicación
│   ├── components/        # Componentes reutilizables de UI
│   ├── pages/             # Páginas de la aplicación (Home, Producto, Carrito, etc.)
│   ├── context/           # Gestión de estado global
│   ├── services/          # Servicios (API, Stripe, etc.)
│   ├── utils/             # Funciones de utilidad
│   ├── App.js             # Componente principal
│   └── index.js           # Punto de entrada de la aplicación
├── .env                   # Variables de entorno
├── package.json           # Dependencias y scripts de la aplicación
└── README.md              # Este archivo
```

## 🤝 Contribuciones

Las contribuciones a este proyecto son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios.
4. Haz un commit de tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
5. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
6. Crea un Pull Request.

## 📬 Contacto

Si tienes alguna pregunta o sugerencia sobre este proyecto, no dudes en contactarme:

- **Email**: gustavo_angel27@hotmail.com

---

### Notas adicionales:

Si necesitas modificar o agregar alguna característica, puedes hacerlo siguiendo las pautas descritas en el archivo de contribuciones. Recuerda que **MShop** está diseñado como un proyecto personal y no tiene fines comerciales.

---
