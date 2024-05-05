<template>
    <span class="sent">{{ content }}</span>
</template>

<style>
    span.sent {
        word-wrap: break-word;
        text-align: left;
        border-radius: 15px;
        padding: 10px;
        max-width: 70%;
        margin-top: 5px;
        margin-left: 30%;
        margin-right: 5px;
        align-self: flex-end;
        background-color: gray;
    }
</style>

<script setup>
defineProps(['content']);
</script>