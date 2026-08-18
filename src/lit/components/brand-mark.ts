import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('example-brand-mark')
export class BrandMark extends LitElement {
  static styles = css`
    a {
      display: inline-flex;
      align-items: center;
      gap: 0.625rem;
      color: inherit;
      font-weight: 700;
      text-decoration: none;
    }

    span {
      display: grid;
      width: 2rem;
      height: 2rem;
      place-items: center;
      border-radius: 50%;
      color: var(--example-color-paper);
      background: var(--example-color-ink);
      box-shadow: 3px 3px 0 var(--example-color-accent);
    }
  `;

  render() {
    return html`<a href="/" aria-label="Example, home"><span aria-hidden="true">E</span>Example</a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'example-brand-mark': BrandMark;
  }
}
