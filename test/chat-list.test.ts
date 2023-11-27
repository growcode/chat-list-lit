import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { ChatList } from '../src/ChatList.js';
import '../src/chat-list.js';

describe('ChatList', () => {
  it('renders a list of messages', async () => {
    const el = await fixture<ChatList>(html`<chat-list></chat-list>`);
    expect(el.shadowRoot?.querySelectorAll('li').length).to.equal(1);
  });

  it('updates when new messages are added', async () => {
    const initialMessages = [{ content: 'First Message', sender: 'User1', timestamp: '10:00 AM' }];
    const newMessage = { content: 'New Message', sender: 'User2', timestamp: '10:05 AM' };
    const el = await fixture(html`<chat-list .messages=${initialMessages}></chat-list>`);

    // eslint-disable-next-line no-undef
    const renderedMessages = el.shadowRoot?.querySelectorAll('li') as NodeListOf<HTMLLIElement>;
    expect(renderedMessages.length).to.equal(2);
    expect(renderedMessages[1].textContent).to.include(newMessage.content);
  });  
});
