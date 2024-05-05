<template>
    <div class="container">
        <header class="navbar">
            <div class="width: 30px"></div>
            <span class="headerText">
                Strona główna
            </span>
            <div class="width: 30px"></div>
        </header>
        <div class="mainContent">
            <h2>Witaj, {{ auth.user.nickname }}!</h2>
            <RouterLink to="/completeProfile" style="text-decoration: none; color: inherit;">
                <img src="my_account_image.png" width="30px">
                <h2>Moje konto</h2>
            </RouterLink>
            <RouterLink to="/messagesList" style="text-decoration: none; color: inherit;">
                <img src="messages_image.png" width="30px">
                <h2>Wiadomości</h2>
            </RouterLink>
            <RouterLink to="/newContacts" style="text-decoration: none; color: inherit;">
                <img src="new_friends_image.png" width="30px">
                <h2>Propozycje nowych kontaktów</h2>
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
    import { useAuthStore } from '@/stores/auth';
    const auth = useAuthStore();

</script>