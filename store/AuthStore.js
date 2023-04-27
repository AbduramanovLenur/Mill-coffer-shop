import { defineStore } from 'pinia';
import { auth } from '../plugins/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    token: false,
    user: null,
    errorRegister: false,
    errorAuth: false
  }),
  actions: {
    async login({email, password}) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        this.token = true;
        this.user = auth.currentUser;

        console.dir("Вы вошли в аккаунт");
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            console.dir('User not found');
            this.errorAuth = true;
            break;
          case 'auth/wrong-password':
            console.dir('Wrond password');
            this.errorAuth = true;
            break;
          default:
            console.dir("Something went wrong");
            this.errorAuth = true;
            break;
        }

        return;
      }
    },
    async register({email, password, name, phone}) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        this.user = auth.currentUser;

        console.dir("Пользователь зарегистрирован");
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            console.dir('Email already in use');
            this.errorRegister = true
            break;
          case 'auth/invalid-email':
            console.dir('Invalid email');
            this.errorRegister = true
            break;
          case 'auth/operation-not-allowed':
            console.dir('Operation not allowed');
            this.errorRegister = true
            break;
          case 'auth/weak-password':
            console.dir('Weak password');
            this.errorRegister = true
            break;
          default:
            console.dir("Something went wrong");
            this.errorRegister = true
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
