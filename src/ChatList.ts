import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import './ChatMessage'; // eslint-disable-line

export class ChatList extends LitElement {
  @property()
  bubbleColors: string[];

  @property({ type: Boolean })
  rounded: boolean;

  @property()
  messages: Array<{
    content: string;
    role: string;
    timestamp: Date;
  }>;
  

  static styles = css`
    .messages-wrap {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: helvetica neue, arial, sans-serif;
      outline: solid 1px #ddd;
      overflow: hidden;
    }
    .messages {
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      padding: 100px 10px 40px 10px;
      max-height: 400px;
      height: 400px;
    }

    .messages-header {
      z-index: 2;
      position: absolute;
      top: 0;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;

      background: #fff;
      border-bottom: 0.717px solid #ddd;
      box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.05);
      padding: 18.588px 0px;
    }

    .messages-wrap.rounded {
      border-radius: 5px;
    }
  `;

  constructor() {
    super();
    this.bubbleColors = ['#eee', '#0084ff'];
    this.rounded = true;
    this.messages = [];
  }

  updated() {
    this._updateScroll();
  }

  _updateScroll() {
    const messages = this.shadowRoot?.querySelector('.messages');
    if (messages) {
      messages.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });
    }
  }

  render() {
    return html`
      <div class="messages-wrap ${this.rounded ? 'rounded' : ''}">
        <div class="messages-header">${this.messages.length} messages</div>
        <ul class="messages">
          ${this.messages.map(
            message =>
              html` <chat-message
                .rounded=${this.rounded}
                .message=${message}
                .colors=${this.bubbleColors}
              ></chat-message>`
          )}
        </ul>
      </div>
    `;
  }
}
