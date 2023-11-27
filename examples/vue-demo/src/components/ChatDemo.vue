<script setup lang="ts">
import { ref } from 'vue'
import '../../../../dist/src/chat-list.js';

const chatList = ref(null);
const isRounded = ref(true);
const bubbleColors = ref(['#eee', '#0084ff']);

const colorOptions = ref([
  { value: ['#eee', '#0084ff'], label: 'Default' },
  { value: ['#eee', '#888'], label: 'Gray' },
  { value: ['#eee', '#ff0000'], label: 'Red' },
  { value: ['#eee', '#00cc00'], label: 'Green' },
  { value: ['#eee', '#ff00ff'], label: 'Magenta' },
  { value: ['#eee', '#000000'], label: 'Black' },
]);

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
  const input = event.target!.querySelector('input');
  const message = input.value;
  input.value = '';
  
  messages.value.push({ content: message, role: 'human', timestamp });
  // @ts-ignore
  chatList.value!.requestUpdate();
}
</script>

<template>
  <main>
    <chat-list
      ref="chatList"
      .messages="messages"
      .rounded="isRounded"
      .bubbleColors="bubbleColors"
    ></chat-list>

    <form class="chat-input" v-on:submit="onSubmit">
      <p>
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </p>

      <p>
        <label>
          <input type="checkbox" v-model="isRounded" />
          Rounded corners?
        </label>
      </p>
      
      <p>
        <label>
          Colors:

          <select v-model="bubbleColors">
            <option
              v-for="option in colorOptions" :value="option.value"
              v-bind:key="option.label"
            >{{ option.label }}</option> 
          </select>
        </label>
      </p>
    </form>
  </main>
</template>

<style scoped>
form p {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  margin-top: 1rem;
}

form p:first-child input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin-right: 1rem;
}
</style>