<template>
  <div :class="b('')">
    <address :class="b('address')">
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
      <h2 :class="b('title margin--40')">
        {{ $t('legalTitle') }}
      </h2>
      <div :class="b('text address-text')">
        {{ $t('addressText') }}
      </div>
      <h2 :class="b('title margin--30')">
        {{ $t('warehouseTitle') }}
      </h2>
      <div :class="b('text warehouse-text')">
        {{ $t('warehouseText') }}
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
  &__title {
    font-size: 30px;
    font-weight: 900;
    line-height: 1.23;
    color: #000000;
    max-width: 310px;
    &.margin--10 {
      margin-bottom: 10px;
    }
    &.margin--30 {
      margin-bottom: 30px;
    }
    &.margin--40 {
      margin-bottom: 40px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 70px;
  }
  &__link {
    font-size: 20px;
    line-height: 1.3;
  }
  &__text {
    font-size: 20px;
    line-height: 1.3;
    &.address-text {
      max-width: 540px;
      margin-bottom: 50px;
    }
    &.warehouse-text {
      max-width: 430px;
    }
  }
}
</style>
