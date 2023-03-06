<template>
  <div :class="b('')">
    <h2 :class="b('title instruction--fisrt-title')">
      {{ $t('instructionTitle1') }}
    </h2>
    <ul :class="b('list')">
      <InstructionTab v-for="item in instructionTab" :tab="item" :key="item.id" @setIsActiveTab="setIsActive"/>
    </ul>
    <InstructionContent :isActiveTab="activeTab"/>
  </div>
</template>

<script>
export default {
  name: "Instruction",
  data: () => {
    return {
      instructionTab: [
        {
          id: 1,
          title: {
            ru: 'Турка',
            en: 'Turk'
          },
          images: 'tab-1',
          isActive: true,
          buttonName: 'instruction-1'
        },
        {
          id: 2,
          title: {
            ru: 'Френч-пресс',
            en: 'French-press'
          },
          images: 'tab-2',
          isActive: false,
          buttonName: 'instruction-2'
        },
        {
          id: 3,
          title: {
            ru: 'Мока',
            en: 'Moka'
          },
          images: 'tab-3',
          isActive: false,
          buttonName: 'instruction-3'
        },
        {
          id: 4,
          title: {
            ru: 'Эспрессо',
            en: 'Espresso'
          },
          images: 'tab-4',
          isActive: false,
          buttonName: 'instruction-4'
        },
        {
          id: 5,
          title: {
            ru: 'Воронка',
            en: 'Funnel'
          },
          images: 'tab-5',
          isActive: false,
          buttonName: 'instruction-5'
        },
        {
          id: 6,
          title: {
            ru: 'Аэропресс',
            en: 'Aeropress'
          },
          images: 'tab-6',
          isActive: false,
          buttonName: 'instruction-6'
        },
        {
          id: 7,
          title: {
            ru: 'Чашка',
            en: 'Cup'
          },
          images: 'tab-7',
          isActive: false,
          buttonName: 'instruction-7'
        },
        {
          id: 8,
          title: {
            ru: 'Автомат',
            en: 'Machine'
          },
          images: 'tab-8',
          isActive: false,
          buttonName: 'instruction-8'
        }
      ],
      activeTab: 'instruction-1'
    }
  },
  methods: {
    setIsActive(tab) {
      this.activeTab = tab;
      this.instructionTab.forEach(item => item.buttonName === this.activeTab ? item.isActive = true : item.isActive = false);
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .instruction {
  &__title {
    font-size: 40px;
    font-weight: 900;
    line-height: 1.25;
    &.instruction--fisrt-title {
      max-width: 790px;
      margin-bottom: 50px;
      @media (max-width: 1024px) {
        margin-bottom: 30px;
      }
    }
    &.instruction--two-title {
      max-width: 700px;
      margin-bottom: 60px;
      @media (max-width: 1024px) {
        margin-bottom: 40px;
      }
      @media (max-width: 480px) {
        margin-bottom: 25px;
      }
    }
    @media (max-width: 1024px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
  &__list {
    --grid-tab-width: 190px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--grid-tab-width), 1fr));
    gap: 20px;
    margin-bottom: 110px;
    @media (max-width: 1024px) {
      --grid-tab-width: 135px;
      margin-bottom: 50px;
    }
    @media (max-width: 480px) {
      --grid-tab-width: 110px;
      margin-bottom: 40px;
    }
  }
  &__text {
    line-height: 1.3;
    margin-bottom: 70px;
    max-width: 1380px;
    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 40px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
  &__picture {
    border-radius: 20px;
    &.margin--60 {
      margin-bottom: 60px;
      @media (max-width: 768px) {
        margin-bottom: 30px;
      }
    }
    img {
      border-radius: 20px;
    }
  }
  &__name-title {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 60px;
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
}
</style>
