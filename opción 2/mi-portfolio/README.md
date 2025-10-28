# Mi Portafolio

Este proyecto es un portafolio personal que muestra mis proyectos y habilidades. La aplicación está construida utilizando React y TypeScript, y está diseñada para ser una página de biografía que presenta mis trabajos de manera atractiva.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
mi-portfolio
├── public
│   └── index.html         # Página principal que carga la aplicación
├── src
│   ├── main.tsx          # Punto de entrada de la aplicación
│   ├── App.tsx           # Componente principal que gestiona las rutas
│   ├── pages
│   │   └── Home.tsx      # Componente que muestra la lista de proyectos
│   ├── components
│   │   ├── Header.tsx     # Componente del encabezado
│   │   ├── ProjectCard.tsx # Componente que representa un proyecto individual
│   │   └── Footer.tsx     # Componente del pie de página
│   ├── data
│   │   └── projects.ts    # Datos de los proyectos
│   ├── styles
│   │   └── globals.css    # Estilos globales de la aplicación
│   └── types
│       └── index.ts       # Tipos e interfaces utilizados en la aplicación
├── package.json           # Configuración de npm
├── tsconfig.json          # Configuración de TypeScript
├── vite.config.ts         # Configuración de Vite
└── README.md              # Documentación del proyecto
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```
npm install
```

## Uso

Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```
npm run dev
```

Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar un pull request. Cualquier mejora o sugerencia es bienvenida.

## Licencia

Este proyecto está bajo la Licencia MIT.