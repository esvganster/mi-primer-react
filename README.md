# Práctica simple de React



## Qué hace cada archivo

- `src/App.jsx`: reúne los componentes e importa los datos.
- `src/datos/equipo.js`: contiene cinco personas con su id, nombre, rol y emoji.
- `src/componentes/Header/Header.jsx`: muestra el título que recibe.
- `src/componentes/Tarjeta/Tarjeta.jsx`: muestra el nombre, rol y emoji que recibe.
- `src/componentes/Lista/Lista.jsx`: usa `.map()` para crear una tarjeta por persona y `key` para identificar cada elemento.
- `src/componentes/Boton/Boton.jsx`: recibe texto, color y una función que se ejecuta al hacer clic.

## Cómo llegan los datos

```text
equipo.js → App → Lista → Tarjeta
```

En App se importa el arreglo:

```jsx
import { equipo } from './datos/equipo.js'
```

App lo envía a Lista mediante la prop `personas`:

```jsx
<Lista personas={equipo} />
```

Lista recorre las personas y pasa el nombre, rol y emoji de cada una a Tarjeta.

Las tres primeras tarjetas tienen datos escritos directamente en App. Las cinco siguientes usan los datos de equipo.js. Así se muestran las dos formas pedidas en la clase.

El botón llama a `saludar`, una función que muestra `alert('¡Hola, equipo!')`. No se utilizan `useState`, `onChange` ni formularios.
