<template>
    <div @click="play" class="received">
        <img v-if="isPaused" src="play.png" width="30px"/>
        <img v-if="!isPaused" src="pause.png" width="30px"/>
        <span>{{ currentTime }}</span>
    </div>
</template>

<style>
    div.received {
        display: flex;
        justify-content: space-between;
        align-items: center;
        word-wrap: break-word;
        text-align: left;
        border-radius: 15px;
        padding: 10px;
        width: 50%;
        height: 100px;
        max-width: 70%;
        margin-top: 5px;
        margin-right: 30%;
        margin-left: 5px;
        align-self: flex-start;
        background-color:#FF914D;
    }
</style>

<script setup>
import { firebaseApp } from '@/firebase';
import { getDownloadURL, getStorage, ref as storageRef } from 'firebase/storage';
import { ref } from 'vue';
const props = defineProps(['content']);
let audio = new Audio();
let isPaused = ref(true);
let currentTimeSeconds = ref(0);
let currentTime = ref(new Date(currentTimeSeconds.value * 1000).toISOString().slice(14, 19));
const url = ref('');
const storage = getStorage(firebaseApp);
getDownloadURL(storageRef(storage, `audio/${props.content}`))
.then((fetchUrl) => {
    url.value = fetchUrl;
    audio = new Audio(url.value);
    audio.ontimeupdate = () => {
        currentTimeSeconds.value = parseInt(audio.currentTime);
        currentTime.value = new Date(currentTimeSeconds.value * 1000).toISOString().slice(14, 19);
    }
    audio.onpause = () => {
        isPaused.value = true;
    }
    audio.onplay = () => {
        isPaused.value = false;
    }
})

function play() {
    if(audio.paused) {
        audio.play();
    } else{
        audio.pause();
    }
}



</script>