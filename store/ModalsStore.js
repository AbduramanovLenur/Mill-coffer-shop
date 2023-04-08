import { defineStore } from 'pinia';

export const useModalsStore = defineStore('modalsStore', {
  state: () => ({
    isOpenAuthModal: false,
    isOpenAuthMobileModal: false,
    isOpenRegisterModal: false,
    isOpenForgotPasswordModal: false,
    scrollWidthPages: 0
  }),
  actions: {
    addIsOpenAuthModal(orientation) {
      let value = (orientation === 'desktop') ? 'isOpenAuthModal' : 'isOpenAuthMobileModal';

      this.calculateWidthScroll(this[value]);

      if (this[value]) {
        this[value] = false;
        document.body.style.overflowY = 'auto';
      } else {
        this[value] = true;
        document.body.style.overflowY = 'hidden';
      }
    },
    addIsOpenRegisterModal() {
      if (this.isOpenRegisterModal) {
        this.isOpenRegisterModal = false;
        document.body.style.overflowY = 'auto'
      } else {
        this.isOpenRegisterModal = true;
        document.body.style.overflowY = 'hidden';
      }
    },
    addIsOpenForgotPasswordModal() {
      if (this.isOpenForgotPasswordModal) {
        this.isOpenForgotPasswordModal = false;
        document.body.style.overflowY = 'auto'
      } else {
        this.isOpenForgotPasswordModal = true;
        document.body.style.overflowY = 'hidden';
      }
    },
    calculateWidthScroll(modal) {
      const div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      const scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      this.scrollWidthPages = scrollWidth;
      if (!modal) {
        document.body.style.paddingRight = `${scrollWidth}px`;
      } else {
        document.body.style.paddingRight = '0px';
      }
    }
  }
});
