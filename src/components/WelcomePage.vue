<template>
  <div class="container">
    <div class="mainContent">
        <h1>Wybierz akcję</h1>
      <button class="btn btn-primary" @click="redirectToLogin()">Logowanie</button>
      <button class="btn btn-primary" @click="redirectToRegister()">Rejestracja</button>
      <button class="btn btn-primary" @click="handleGoogleAuth()">Kontynuuj z Google</button>
      <button class="btn btn-primary" @click="handleFacebookAuth()">
        Kontynuuj z Facebook
 </button>
    </div>
  </div>

</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { firebaseApp } from '@/firebase';
  import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
  import { getFirestore, doc, getDoc } from 'firebase/firestore';
  import { useAuthStore } from '@/stores/auth';

  const router = useRouter();

  function redirectToLogin() {
    router.push('/login')
  }

  function redirectToRegister() {
    router.push('/register')
  }

  function handleGoogleAuth() {
    const provider = new GoogleAuthProvider();
    handlePopupAuth(provider);
  }

  function handlePopupAuth(provider) {
    const auth = getAuth(firebaseApp);
    signInWithPopup(auth, provider)
    .then(({ user }) => {
      const db = getFirestore(firebaseApp);
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef)
      .then((doc) => {
              const authStore = useAuthStore();
          if(doc.exists()) {
              const userData = {'uid': user.uid, ...doc.data()};
              authStore.setUser(userData);
          } else {
              const userData = { 'uid': user.uid, 'email': user.email}
              authStore.setUser(userData);
              router.push('/completeProfile')
          }
      })
    })
  }

  function handleFacebookAuth() {
    const provider = new FacebookAuthProvider();
    handlePopupAuth(provider);
  }
</script>

<style>

</style>