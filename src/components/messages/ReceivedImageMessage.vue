<template>
    <img class="received" :src="url" />
</template>

<style>
    img.received {
        border-radius: 15px;
        max-width: 70%;
        margin-top: 5px;
        margin-left: 5px;
        align-self: flex-start;
    }
</style>

<script setup>
import { firebaseApp } from '@/firebase';
import { getDownloadURL, getStorage, ref as storageRef } from 'firebase/storage';
import { ref } from 'vue';
const props = defineProps(['content']);
const url = ref('');
const storage = getStorage(firebaseApp);
getDownloadURL(storageRef(storage, `images/${props.content}`))
.then((fetchUrl) => {
    url.value = fetchUrl;
})

</script>