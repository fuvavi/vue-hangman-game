<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useHeaderStore } from '@/stores/header';
import { useCategoriesStore } from '@/stores/categories';
import { useRoute, useRouter } from 'vue-router';
import Keyboard from '@/components/TheKeyboard.vue';
import Modal from '@/components/TheStatusModal.vue';
import { ModalType } from '@/types/modal.type';
import { maxHealthNumber } from '@/utils/constants';

const route = useRoute();
const router = useRouter();
const header = useHeaderStore();
const categories = useCategoriesStore();
const categoryData = categories?.getCategoryBySlug(route.params.slug);

if (!categoryData) {
  router.push('/404');
} else {
  header.title = categoryData?.name;
  //or header.setTitle(categoryData?.name);
}

function getRandomQuestion() {
  const randomNumber = Math.floor(
    Math.random() * categoryData?.questions?.length,
  );
  return categoryData?.questions[randomNumber];
}

const question = getRandomQuestion();

const suggestionAnswer = question?.correctAnswer.map((item) =>
  question?.suggestion.includes(item) ? item : '',
);

const renderComponent = ref(1);

// Health max is 5, if health is 0 will LOSE //
const correctAnswer = ref(question?.correctAnswer);
const currentAnswer = ref(suggestionAnswer);
const isWin = ref(false);
const isLose = ref(false);

function checkIsCorrectCharacter(character, word) {
  const isCorrect = word.includes(character);
  return isCorrect;
}

function updateAnswer(character, currentAnswer) {
  character = character.toUpperCase();
  for (let i = 0; i < currentAnswer.length; i++) {
    if (correctAnswer.value[i] === character) {
      currentAnswer[i] = character;
    }
  }
  return currentAnswer;
}

function handleAnswer(key) {
  if (header.health > 0) {
    const isCorrectCharacter = checkIsCorrectCharacter(
      key,
      question?.correctAnswer,
    );
    if (!isCorrectCharacter) {
      header.health -= 1;
      if (header.health <= 0) {
        isLose.value = true;
      }
    } else {
      const res = updateAnswer(key, currentAnswer.value);
      const winStatus = res.every((char) => char !== '');
      if (winStatus) {
        isWin.value = true;
      }
    }
  }
}

const selectedKeys = question?.suggestion?.filter((key) => key);

onMounted(() => {
  header.health = maxHealthNumber;
});

onUnmounted(() => {
  header.health = 0;
});

const handleExit = () => {
  router.push('/');
};

const handleRestart = async () => {
  // TODO: Implement restart game
  location.reload();
};
</script>

<template>
  <div
    v-if="question"
    :key="renderComponent"
    class="play-screen flex flex-col justify-between py-8 mb-auto"
  >
    <div class="question-box w-full">
      <ul class="question-box-flex flex flex-wrap justify-center w-full gap-4">
        <li
          class="question-character"
          v-for="(character, key, index) in currentAnswer"
          :key="index"
        >
          {{ index }}
          <input :value="character" class="character-input" readonly />
        </li>
      </ul>
    </div>
    <Modal
      v-if="isWin || isLose"
      :typeModal="isLose ? ModalType.lose : ModalType.win"
      @on-exit="handleExit"
      @on-retry="handleRestart"
      :text="question?.correctAnswer.join('')"
    />
    <div class="keyboard-box">
      <Keyboard :disabledKeys="selectedKeys" @onPressKeyboard="handleAnswer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.question-box {
  .question-box-flex {
    .question-character {
      .character-input {
        width: 2.5rem;
        height: 2.5rem;
        border: 2px solid var(--color-white);
        border-radius: 8px;
        background-color: var(--color-pink);
        text-align: center;
        font-size: 1.25rem;
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);
        outline: none;
        pointer-events: none;
      }
    }
  }
}
.play-screen {
  min-height: calc(100vh - 100px);
}
</style>
