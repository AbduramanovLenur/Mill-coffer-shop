<template>
  <div :class="b('')">
    <address :class="b('address')">
      <div :class="b('box')">
        <h2 :class="b('title margin--10')">
          {{ $t('supportTitle') }}
        </h2>
        <ul :class="b('list')">
          <li :class="b('item')">
            <a :class="b('link')" href="tel: +74012375343">
              +7 (401) 237 53 43
            </a>
          </li>
          <li :class="b('item')">
            <a :class="b('link')" href="mailto: Import@kldrefine.com">
              Import@kldrefine.com
            </a>
          </li>
        </ul>
      </div>
      <div :class="b('box')">
        <h2 :class="b('title margin--40')">
          {{ $t('legalTitle') }}
        </h2>
        <div :class="b('text address-text')">
          {{ $t('addressText') }}
        </div>
      </div>
      <div :class="b('box')">
        <h2 :class="b('title margin--30')">
          {{ $t('warehouseTitle') }}
        </h2>
        <div :class="b('text warehouse-text')">
          {{ $t('warehouseText') }}
        </div>
      </div>
    </address>
    <GoogleMap />
  </div>
</template>

<script>
export default {
  name: "ContactInfo"
}
</script>

<style lang="scss" scoped>
.contact-info {
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
    gap: 20px 50px;
    @media (max-width: 1024px) {
      --grid-template-columns: 2;
      order: 2;
    }
    @media (max-width: 640px) {
      --grid-template-columns: 1;
    }
  }
  &__title {
    font-size: 30px;
    font-weight: 900;
    line-height: 1.23;
    color: #000000;
    max-width: 310px;
    @media (max-width: 768px) {
      font-size: 25px;
    }
    &.margin--10 {
      --margin-10: 10px;
      margin-bottom: var(--margin-10);
    }
    &.margin--30 {
      --margin-30: 30px;
      margin-bottom: var(--margin-30);
      @media (max-width: 768px) {
        --margin-30: 10px;
      }
    }
    &.margin--40 {
      --margin-40: 40px;
      margin-bottom: var(--margin-40);
      @media (max-width: 768px) {
        --margin-40: 10px;
      }
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__link {
    font-size: 20px;
    line-height: 1.3;
    @media (max-width: 640px) {
      font-size: 18px;
    }
  }
  &__text {
    font-size: 20px;
    line-height: 1.3;
    @media (max-width: 640px) {
      font-size: 18px;
    }
    &.address-text {
      max-width: 540px;
    }
    &.warehouse-text {
      max-width: 430px;
    }
  }
}
</style>
