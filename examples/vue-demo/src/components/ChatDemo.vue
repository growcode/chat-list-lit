<script setup lang="ts">
import { ref } from 'vue'
import '../../../../dist/src/chat-list.js';

const chatList = ref(null);

const messages = ref([
  { content: 'Hello! How are you?', role: 'bot', timestamp: '10:00 AM' },
  { content: 'I am fine, thanks! How about you?', role: 'human', timestamp: '10:01 AM' },
  { content: 'Good. How can I help you?', role: 'bot', timestamp: '10:01 AM' },
  { content: 'What is the weather like today?', role: 'human', timestamp: '10:02 AM' },
])

const onSubmit = (event: Event) => {
  event.preventDefault()
  
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  
  // @ts-ignore
  const input = event.target!.querySelector('input')
  const message = input.value
  input.value = ''
  
  messages.value.push({ content: message, role: 'human', timestamp })
  // @ts-ignore
  chatList.value!.requestUpdate();
}
</script>

<template>
  <main>
    <chat-list .messages="messages" ref="chatList"></chat-list>

    <form class="chat-input" v-on:submit="onSubmit">
      <input type="text" placeholder="Type a message..." />
      <button>Send</button>
    </form>
  </main>
</template>
