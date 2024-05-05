<template>
    <div class="container">
        <div class="navbar"><img @click="goBack" src="back.png" width="30px"/></div>
        <div class="mainContent">
            <h1>Logowanie</h1>
            <input class="form-control" type="text" ref="email" placeholder="E-mail">
            <input class="form-control" type="password" ref="password" placeholder="Hasło">
            <button class="btn btn-primary" @click="login">Zaloguj</button>
            <p v-if="isError" style="color: red">{{ loginError }}</p>
        </div>

    </div>

</template>

<style>

</style>

<script setup>
    // import { dbRef } from '@/firebase';
    import { firebaseApp } from '@/firebase';
    import { doc, getFirestore, getDoc } from 'firebase/firestore'
    import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
    import { ref } from 'vue';
    import { useAuthStore } from '@/stores/auth';
    import { useRouter } from 'vue-router';

    const email = ref('');
    const password = ref('');

    const isError = ref(false);
    const loginError = ref('');

    const router = useRouter();

    function goBack() {
        router.go(-1);
    }

    function login() {
        const auth = getAuth(firebaseApp);
        signInWithEmailAndPassword(auth, email.value.value, password.value.value)
        .then(({ user }) => {
            const db = getFirestore(firebaseApp);
            const docRef = doc(db, "users", user.uid);
            getDoc(docRef)
            .then((doc) => {
                    const authStore = useAuthStore();
                if(doc.exists()) {
                    const userData = {'uid': user.uid, ...doc.data()};
                    authStore.setUser(userData);
                    router.push('/home');
                } else {
                    const userData = { 'uid': user.uid, 'email': user.email}
                    authStore.setUser(userData);
                    router.push('/completeProfile')
                }
            })
        })
    }
</script>