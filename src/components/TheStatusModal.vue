<script setup>
import WinIcon from '@/assets/icons/winFace.svg';
import LoseIcon from '@/assets/icons/loseFace.svg';
import { ModalType } from '@/types/modal.type';
import Button from '@/components/TheButton.vue';

const props = defineProps({
  typeModal: {
    type: String,
    default: ModalType.lose,
  },
  text: {
    type: String,
    default: '',
  },
});

defineEmits(['on-exit', 'on-retry']);
</script>

<template>
  <div class="modal modal-status">
    <div class="modal-content">
      <div class="modal-header">
        <WinIcon
          v-if="props.typeModal === ModalType.win"
          class="w-[50px] h-[50px] mx-auto mb-6"
        />
        <LoseIcon v-else class="w-[50px] h-[50px] mx-auto mb-6" />
      </div>
      <div class="modal-body">
        <p class="text-xl font-bold text-center text-indigo-500 mb-4">
          {{ props.typeModal === ModalType.win ? 'You Win' : 'You Lose' }}
        </p>
        <p
          v-if="props.typeModal === ModalType.lose"
          class="text-md font-bold text-center text-green-500 mb-4"
        >
          Answer: {{ text }}
        </p>
        <div class="grid grid-cols-2 gap-2">
          <Button
            class="col-span-1"
            type="small"
            color="red"
            @click="$emit('on-exit')"
            >Exit</Button
          >
          <Button class="col-span-1" type="small" @click="$emit('on-retry')">{{
            props.typeModal === ModalType.lose ? 'Retry' : 'Next'
          }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  .modal-content {
    width: 100%;
    max-width: 320px;
    background-color: #ffffff;
    border-radius: 30px;
    padding: 2rem;
  }
  .modal-header {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    top: -5rem;
    margin-bottom: -5rem;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
}
</style>
