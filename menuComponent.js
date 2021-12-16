class LateralMenu extends HTMLElement {
  constructor() {
    super()

    this.build()
  }

  build() {
    const shadow = this.attachShadow({'mode': 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}








customElements.define('lateral-menu', LateralMenu)