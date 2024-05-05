<template>
    <span class="received">{{ content }}</span>
</template>

<style>
    span.received {
        word-wrap: break-word;
        text-align: left;
        border-radius: 15px;
        padding: 10px;
        max-width: 70%;
        margin-top: 5px;
        margin-right: 30%;
        margin-left: 5px;
        align-self: flex-start;
        background-color:#FF914D;
    }
</style>

<script setup>
defineProps(['content']);
</script>