import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import styles from './home-page-styles';
import '@pokedex/pokemon-ux/pokemon-ux.js';

class HomePage extends cellsPage(LitElement) {
  static get is() {
    return 'home-page';
  }

  static get styles() {
    return [ styles ];
  }

  static get properties() {
    return {
      title: { type: String },
      subtitulo: { type: String },
      subtitulo2: { type: String },
      contact: { type: String },
      info: { type: String }
    };
  }
  constructor() {
    super();
    this.title = 'Bienvenido a Mi Página de Pokémon';
    this.subtitulo = 'Explora el mundo Pokémon y descubre información interesante.';
    this.subtitulo2 = '¡Aprende más sobre tus Pokémon favoritos!';
    this.contact = 'Contáctanos';
    this.info = 'Sobre Nosotros';
  }

  render() {
    return html`
      <section class="intro">
        <h1>${this.title}</h1>
        <p>${this.subtitulo}</p>
      </section>
  
      <section class="pokemon-container">
        <pokemon-ux class="fade-in"></pokemon-ux>
      </section>
    `;
  }
}

window.customElements.define(HomePage.is, HomePage);
