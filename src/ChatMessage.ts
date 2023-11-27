import { LitElement, html, css } from 'lit';
import {property} from 'lit/decorators.js';

export class ChatMessage extends LitElement {  
  @property()
  rounded: boolean;

  @property()
  message: {
    content: string
    role: string
    timestamp: Date
  } | null;

  static styles = css`    
    div.message {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 12px 9px;
    }
    div.message.bot {
      justify-content: flex-start;
    }
    div.message.human {
      flex-direction: row-reverse;
    }
    
    div.message div.message-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 20px 0 0;
      background: #aaa;
    }
    div.message.human div.message-avatar {
      margin: 0 0 0 20px;
    }

    div.message div.message-copy {
      position: relative;
      display: flex;
      width: fit-content;
      flex-direction: column;
      padding: 10px 14px;
      align-items: flex-start;
      background: #eee;
      color: #000;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.2;
    }
    div.message.human div.message-copy {
      align-items: flex-end;
      background: #0084ff;
      color: #fff;
    }
    div.message div.message-timestamp {
      display: block;
      font-size: 10px;
    }
    div.message div.chat-arrow {
      position: absolute;
      bottom: -8px;
      right: 20px;
    }

    div.message.rounded {
      border-radius: 20px;
    }
    div.message.rounded div.message-copy {
      border-radius: 13px;
    }
    div.message.rounded.human div.message-copy {
      border-radius: 20px 0 20px 20px;
    }
    div.message.rounded.bot div.message-copy {
      border-radius: 0 20px 20px 20px;
    }
  `;
  
  constructor() {
    super();
    this.message = null;
    this.rounded = true;
  }

  render() {
    return html`
      <div class="message ${this.message?.role} ${this.rounded ? 'rounded' : ''}">
        <div class="message-avatar"></div>
        <div class="message-copy">
          <div class="message-content">${this.message?.content}</div>
          <div class="message-timestamp">${this.message?.timestamp}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('chat-message', ChatMessage);

