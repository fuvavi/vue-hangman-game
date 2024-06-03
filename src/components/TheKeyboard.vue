<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { alphabet } from '@/utils/constants';

const props = defineProps({
  disabledKeys: {
    type: Array,
    default: null,
  },
});

const emit = defineEmits(['onPressKeyboard']);
const text = ref('');
const disabledKeys = ref(props.disabledKeys);

const addCharacter = (char) => {
  text.value += char;
  if (!disabledKeys.value.includes(char)) {
    disabledKeys.value.push(char);
    emit('onPressKeyboard', char);
  }
};

const handleKeydown = (event) => {
  const char = event.key.toUpperCase();
  if (alphabet.includes(char) && !disabledKeys.value.includes(char)) {
    addCharacter(char);
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div>
    <div id="keyboard">
      <ul class="flex flex-wrap justify-center gap-2">
        <li v-for="key in alphabet" :key="key">
          <button
            class="button-keyboard"
            :disabled="disabledKeys.includes(key)"
            @click="addCharacter(key)"
          >
            {{ key }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-keyboard {
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--color-white);
  border-radius: 8px;
  background-color: var(--color-violet);
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);
  outline: none;
  cursor: pointer;
  position: relative;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    top: 2px;
    box-shadow: none;
  }
  &:active {
    top: 2px;
    box-shadow: none;
  }
}
</style>
