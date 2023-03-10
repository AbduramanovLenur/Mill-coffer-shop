<template>
  <div :class="b()">
    <address :class="b('address')">
      <div :class="b('box')">
        <h2 :class="b('title')">
          {{ $t('piterTitle') }}
        </h2>
        <ul :class="b('list')">
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressPiter1') }}
            </div>
          </li>
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressPiter2') }}
            </div>
          </li>
        </ul>
      </div>
      <div :class="b('box')">
        <h2 :class="b('title')">
          {{ $t('kalinigradTitle') }}
        </h2>
        <ul :class="b('list')">
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressKalinigrad1') }}
            </div>
          </li>
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressKalinigrad2') }}
            </div>
          </li>
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressKalinigrad3') }}
            </div>
          </li>
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressKalinigrad4') }}
            </div>
          </li>
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressKalinigrad5') }}
            </div>
          </li>
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressKalinigrad6') }}
            </div>
          </li>
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressKalinigrad7') }}
            </div>
          </li>
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressKalinigrad8') }}
            </div>
          </li>
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressKalinigrad9') }}
            </div>
          </li>
          <li :class="b('item')">
            <div :class="b('text')">
              {{ $t('addressKalinigrad10') }}
            </div>
          </li>
        </ul>
      </div>
    </address>
    <GoogleMap />
  </div>
</template>

<script>
export default {
  name: 'ContactShop'
}
</script>

<style lang="scss" scoped>
.contact-shop {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    gap: 30px;
  }
  &__address {
    --grid-template-columns: 1;
    display: grid;
    grid-template-columns: repeat(var(--grid-template-columns), 1fr);
    gap: 35px 50px;
    @media (max-width: 1024px) {
      --grid-template-columns: 2;
      order: 2;
    }
    @media (max-width: 640px) {
      --grid-template-columns: 1;
    }
  }
  &__box {
    @media (max-width: 1024px) {
      &:nth-child(1) {
        order: 2;
      }
    }
    @media (max-width: 640px) {
      &:nth-child(1) {
        order: 0;
      }
    }
  }
  &__title {
    font-size: 30px;
    font-weight: 900;
    line-height: 1.23;
    color: #000000;
    max-width: 555px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      font-size: 25px;
      margin-bottom: 10px;
    }
  }
  &__text {
    font-size: 20px;
    line-height: 1.3;
    @media (max-width: 640px) {
      font-size: 18px;
    }
  }
}
</style>
