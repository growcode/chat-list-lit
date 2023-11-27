import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { ChatList } from '../src/ChatList.js';
import '../src/chat-list.js';

const initialMessages = [
  { content: 'First Message', role: 'bot', timestamp: '10:00 AM' },
];

describe('ChatList', () => {
  it('renders a list of messages', async () => {
    const el = await fixture<ChatList>(
      html`<chat-list .messages=${initialMessages}></chat-list>`
    );
    expect(el.shadowRoot?.querySelectorAll('chat-message').length).to.equal(1);
  });

  it('updates when new messages are added', async () => {
    const newMessage = {
      content: 'New Message',
      role: 'human',
      timestamp: '10:05 AM',
    };
    const el = await fixture(
      html`<chat-list .messages=${initialMessages}></chat-list>`
    );

    // @ts-ignore
    el.messages = [...initialMessages, newMessage];
    // @ts-ignore
    el.requestUpdate();
    // @ts-ignore
    await el.updateComplete;

    // eslint-disable-next-line no-undef
    const renderedMessages = el.shadowRoot?.querySelectorAll(
      'chat-message'
    ) as NodeListOf<HTMLLIElement>;
    expect(renderedMessages.length).to.equal(2);

    // @ts-ignore
    expect(renderedMessages[1].message.content).to.include(newMessage.content);
  });
});
