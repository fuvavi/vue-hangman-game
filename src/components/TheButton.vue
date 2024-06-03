<template>
  <button
    :class="`button uppercase button-${type} button-${color}`"
    @click="$emit('on-click')"
  >
    <span class="button-decoration"></span>
    <span class="button-text">
      <span><slot /></span>
    </span>
    <span class="button-text-front"><slot /></span>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'default',
  },
  color: {
    type: String,
    default: 'green',
  },
});
defineEmits(['on-click']);
</script>

<style lang="scss" scoped>
.app-wrapper {
  @apply flex justify-center items-center;
  min-height: 100vh;
  background: rgb(156, 89, 254);
  background: linear-gradient(
    0deg,
    rgba(156, 89, 254, 1) 0%,
    rgba(111, 83, 253, 1) 100%
  );
}

.button {
  border-left: 4px solid var(--color-white);
  border-right: 4px solid #ffffff;
  border-bottom: 12px solid #ffffff;
  border-top: 3px solid #ffffff;
  border-radius: 35px;
  background: #ffffff;
  display: flex;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.15);
  position: relative;
  .button-decoration {
    width: 70%;
    height: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    border-radius: 35px 0 0 35px;
    overflow: hidden;
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      left: -25%;
      z-index: 1;
      transform: skew(35deg);
    }
  }
  .button-text {
    display: flex;
    align-items: center;
    padding: 4px 32px;
    font-size: 32px;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    position: relative;
    width: 100%;
    span {
      opacity: 0;
    }
  }

  .button-text-front {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #ffffff;
    text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.15);
  }

  &:active {
    span {
      transform: translateY(4px);
    }
    .button-text {
      span {
        z-index: 2;
      }
    }
    .button-decoration::after {
      z-index: 1;
    }
  }
}

.button-small {
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
  border-bottom-width: 6px;
  &:active .button-text {
    box-shadow: none !important;
  }
  .button-text-front,
  .button-text {
    font-size: 20px;
  }
  .button-text {
    padding: 4px 16px;
  }
}

.button-green {
  .button-text {
    background-color: var(--color-green);
    box-shadow: 0 8px 0
      color-mix(in srgb, var(--color-green), var(--color-black) 10%);
    span {
      z-index: 2;
    }
  }
  .button-decoration::after {
    background-color: color-mix(
      in srgb,
      var(--color-green),
      var(--color-white) 30%
    );
    opacity: 0.5;
  }
  &:active .button-text {
    box-shadow: 0 4px 0
      color-mix(in srgb, var(--color-green), var(--color-black) 10%);
  }
  &.button-small {
    .button-text {
      box-shadow: 0 4px 0
        color-mix(in srgb, var(--color-green), var(--color-black) 10%);
    }
  }
}

.button-red {
  .button-text {
    background-color: var(--color-red);
    box-shadow: 0 8px 0
      color-mix(in srgb, var(--color-red), var(--color-black) 10%);
    span {
      z-index: 2;
    }
  }
  .button-decoration::after {
    background-color: color-mix(
      in srgb,
      var(--color-red),
      var(--color-white) 30%
    );
    opacity: 0.5;
  }
  &:active .button-text {
    box-shadow: 0 4px 0
      color-mix(in srgb, var(--color-red), var(--color-black) 10%);
  }
  &.button-small .button-text {
    box-shadow: 0 4px 0
      color-mix(in srgb, var(--color-red), var(--color-black) 10%);
  }
}
</style>
