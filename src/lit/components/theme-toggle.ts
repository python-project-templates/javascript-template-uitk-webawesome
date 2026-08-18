import '@awesome.me/webawesome/dist/components/button/button.js';
import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { initTheme, toggleTheme, type ResolvedTheme } from '../theme.js';

@customElement('example-theme-toggle')
export class ThemeToggle extends LitElement {
  @state() private theme: ResolvedTheme = 'light';

  static styles = css`
    wa-button::part(base) {
      border-color: var(--example-color-line);
      color: var(--example-color-ink);
      background: var(--example-color-paper);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.theme = initTheme();
  }

  private toggle() {
    this.theme = toggleTheme();
  }

  render() {
    const next = this.theme === 'dark' ? 'light' : 'dark';
    return html`<wa-button size="s" aria-label=${`Switch to ${next} mode`} @click=${this.toggle}>
      ${next === 'dark' ? 'Dark' : 'Light'}
    </wa-button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'example-theme-toggle': ThemeToggle;
  }
}
