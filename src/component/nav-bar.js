/* eslint-disable no-undef */
class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<h1>Country Finder</h1>';
  }
}
customElements.define('nav-bar', NavBar);
