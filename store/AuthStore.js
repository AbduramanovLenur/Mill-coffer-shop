import { defineStore } from 'pinia';
import { auth } from '../plugins/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from 'firebase/auth';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    token: false,
    user: null,
  }),
  actions: {
    async login({email, password}) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        this.token = true;
        this.user = auth.currentUser;

        this.$nuxt.$toast.success('Вы вошли в аккаунт!');
        console.debug("Вы вошли в аккаунт");
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            this.$nuxt.$toast.error('Пользователь не найден!');

            console.debug('User not found');
            break;
          case 'auth/wrong-password':
            this.$nuxt.$toast.error('Неправильный пароль!');

            console.debug('Wrond password');
            break;
          default:
            this.$nuxt.$toast.error('Что-то пошло не так!');

            console.debug("Something went wrong");
            break;
        }

        return;
      }
    },
    async register({email, password, name, phone}) {
      try {
        await createUserWithEmailAndPassword(auth, email, password).then(data => {
          sendEmailVerification(auth.currentUser)
        });
        this.user = auth.currentUser;

        this.$nuxt.$toast.success('Пользователь зарегистрирован!');
        console.debug("Пользователь зарегистрирован");
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.$nuxt.$toast.error('Что-то пошло не так!');
            console.debug('Этот электронный адрес уже занят!');
            break;
          case 'auth/invalid-email':
            this.$nuxt.$toast.error('Неверный адрес электронной почты!');
            console.debug('Invalid email');
            break;
          case 'auth/operation-not-allowed':
            this.$nuxt.$toast.error('Операция не разрешена!');
            console.debug('Operation not allowed');
            break;
          case 'auth/weak-password':
            this.$nuxt.$toast.error('Слабый пароль!');
            console.debug('Weak password');
            break;
          default:
            this.$nuxt.$toast.error('Что-то пошло не так!');
            console.debug("Something went wrong");
            break;
        }

        return;
      }
    },
    async logout() {
      await signOut(auth);
      this.token = false;
      this.user = null;
    }
  }
});
