<template>
    <div class="container">
        <div class="navbar"><img @click="goBack" src="back.png" width="30px"/></div>
        <div class="mainContent">
            <h1>Rejestracja</h1>
            <input class="form-control" type="text" ref="email" placeholder="E-mail">
            <input class="form-control" type="password" ref="password" placeholder="Hasło">
            <button class="btn btn-primary" @click="register">Zarejestruj</button>
            <p v-if="isError" style="color: red">{{ loginError }}</p>
        </div>
    </div>
</template>

<style>

</style>

<script setup>
import { firebaseApp } from '@/firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

function goBack() {
    router.go(-1);
}

function register() {

    const auth = getAuth(firebaseApp);
    createUserWithEmailAndPassword(auth, email.value.value, password.value.value)
    .then(() => {
        router.push('/login')
    })
}


</script>