import { LitElement, html, css } from 'lit';
import {property} from 'lit/decorators.js';

export class ChatList extends LitElement {  
  @property()
  messages: Array<{
    content: string
    role: string
    timestamp: Date
  }>;

  static styles = css`
    .messages-wrap {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: helvetica neue, arial, sans-serif;
      outline: solid 1px #ddd;
      border-radius: 5px;
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
      
      background: #FFF;
      border-bottom: 0.717px solid #DDD;
      box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.05);
      padding: 18.588px 0px;
    }
    
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
      border-radius: 13px;
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
  `;
  
  constructor() {
    super();
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
      <div class="messages-wrap">
        <div class="messages-header">${this.messages.length} messages</div>
        <div class="messages">
          ${this.messages.map(message => (
            html`
              <div class="message ${message.role}">
                <div class="message-avatar"></div>
                <div class="message-copy">
                  <div class="message-content">${message.content}</div>
                  <div class="message-timestamp">${message.timestamp}</div>
                </div>
              </div>
            `
          ))}
        </div>
      </div>
    `;
  }
}
