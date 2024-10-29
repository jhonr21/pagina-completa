import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
@charset "UTF-8";
:host {
  --bbva-web-progress-bar-bg-color: var(--colorsSecondary300, ${unsafeCSS(foundations.colors.secondary300)});
  display: block;
  box-sizing: border-box;
  font-size: var(--typographyTypeSmall, ${unsafeCSS(foundations.typography.typeSmall)});
  line-height: var(--lineHeightTypeSmall, ${unsafeCSS(foundations.lineHeight.typeSmall)});
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
}

demo-web-container {
  max-width: 800px;
  margin: auto;
}

#app__content {
  padding: 16px;
}

demo-web-container {
  max-width: 800px;
  margin: auto;
  padding-top: 40px; /* Ajusta el espacio en la parte superior */
}

demo-web-container::part(nav) {
  display: block; /* Asegúrate de que el nav esté visible */
  margin-top: 40px; /* Ajusta el espacio superior según lo necesites */
}

/* Estilo de la sección de introducción */
.intro {
  padding: 40px;
  background-color: rgb(25, 115, 210); /* Color rojo Pokébola */
  color: white; /* Color de texto blanco para mayor contraste */
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4); /* Sombra más pronunciada */
  position: relative; /* Para posicionar los decorativos */
  border-radius: 15px; /* Bordes redondeados */
  font-family: "Pokemon", sans-serif; /* Fuente estilo Pokémon */
  margin-top: 2rem;
}

/* Efecto de texto */
.intro h1 {
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Sombra de texto más pronunciada */
  margin-bottom: 12px;
}

.intro p {
  font-size: 20px;
  font-weight: 500;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Sombra de texto */
}

/* Decoraciones adicionales - Pokébola */
.intro::before,
.intro::after {
  content: ""; /* Contenido vacío para usar imágenes */
  position: absolute;
  background-image: url("https://upload.wikimedia.org/wikipedia/en/0/0d/Pokeball.png"); /* URL de la Pokébola */
  background-size: contain; /* Ajusta el tamaño de la imagen */
  background-repeat: no-repeat; /* Evita repetir la imagen */
  width: 60px; /* Ajusta según el diseño deseado */
  height: 60px; /* Ajusta según el diseño deseado */
}

.intro::before {
  top: 10px;
  left: 20px;
  animation: float 2s ease-in-out infinite; /* Animación de flotación */
}

.intro::after {
  bottom: 10px;
  right: 20px;
  animation: float 2s ease-in-out infinite; /* Animación de flotación */
}

/* Animación de flotación */
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
`;
