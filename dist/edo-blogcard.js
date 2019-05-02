
  import '@polymer/iron-ajax/iron-ajax.js';

  import {LitElement, html} from 'lit-element'

  export default class EdoBlogcard extends LitElement {
    static get properties() {
      return {
        url: String
      };
    }
    handleResponse(e) {
      console.log('EVENT', e);
    }


    render() {
    return html`<style>
    </style>
      <iron-ajax auto="" url="${this.url}" handle-as="text" @response="${this.handleResponse}" debounce-duration="300">
      </iron-ajax>
    `
    }

  }

  window.customElements.define('edo-blogcard', EdoBlogcard);
