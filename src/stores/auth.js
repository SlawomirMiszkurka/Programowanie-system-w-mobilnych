 /* eslint-disable */
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    let user = ref({});

    function setUser(newUser) {
        user.value = newUser;
    }

    return { user, setUser }
})